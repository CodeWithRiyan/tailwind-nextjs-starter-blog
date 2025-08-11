// app/api/blog/route.js
import { createDirectus, rest, readItems, staticToken } from '@directus/sdk';
import { NextResponse } from 'next/server';

// Debug environment variables (remove in production)
console.log('DIRECTUS_URL:', process.env.DIRECTUS_URL);
console.log('DIRECTUS_TOKEN exists:', !!process.env.DIRECTUS_TOKEN);

const directus = createDirectus(process.env.DIRECTUS_URL)
  .with(rest())

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const locale = searchParams.get('lang') || 'en-US';
  const page = parseInt(searchParams.get('page')) || 1;
  const limit = parseInt(searchParams.get('limit')) || 10;
  const offset = (page - 1) * limit;

  // Validate environment variables
  if (!process.env.DIRECTUS_URL || !process.env.DIRECTUS_TOKEN) {
    console.error('Missing DIRECTUS_URL or DIRECTUS_TOKEN environment variables');
    return NextResponse.json(
      { error: 'Server configuration error' },
      { status: 500 }
    );
  }

  try {
    // Test connection first with a simple request
    console.log('Testing Directus connection...');
    
    // Get posts with pagination
    const posts = await directus.request(
      readItems('blog_posts', {
        filter: {
          status: { _eq: 'published' }
        },
        sort: ['-date_published'],
        limit: limit,
        offset: offset,
        fields: [
          'id',
          'status',
          'date_created',
          'date_updated', 
          'date_published',
          'reading_time',
          'tags',
          'views',
          'images',
          {
            'translations': [
              'id',
              'title',
              'slug',
              'summary',
              'languages_code'
            ]
          }
        ]
      })
    );

    const blog_posts_tags = await directus.request(
      readItems('blog_posts_tags', {
        fields: ['id', 'blog_posts_id', 'tags_id']
      })
    );

    const tags = await directus.request(
      readItems('tags', {
        fields: ['id', 'name', 'slug']
      })
    );

    const blog_posts_files = await directus.request(
      readItems('blog_posts_files', {
        fields: ['id', 'blog_posts_id', 'directus_files_id']
      })
    );

    // Get total count for pagination
    const totalCount = await directus.request(
      readItems('blog_posts', {
        filter: {
          status: { _eq: 'published' }
        },
        aggregate: {
          count: ['id']
        }
      })
    );

    // Transform posts to include only the requested locale
    const transformedPosts = posts.map(post => {
      const translation = post.translations?.find(t => t.languages_code === locale) || 
                         post.translations?.[0];
      
      if (!translation) return null;
      
      const postTagsId = post.tags?.map(tag => blog_posts_tags?.find(t => t.id === tag).tags_id) || [];
      const tagsName = postTagsId?.map(tag => tags?.find(t => t.id === tag).name) || [];

      const postFilesId = post.images.map(img => blog_posts_files?.find(f => f.id === img).directus_files_id) || [];
      const imagesUrl = postFilesId.map(id => `${process.env.DIRECTUS_URL}/assets/${id}`) || [];

      return {
        ...post,
        tags: tagsName,
        images: imagesUrl,
        title: translation.title,
        slug: translation.slug.trim(),
        summary: translation.summary,
        language: translation.languages_code,
        // Remove translations from response to reduce payload
        translations: undefined
      };
    }).filter(Boolean);

    const totalPages = Math.ceil(totalCount[0].count.id / limit);

    return NextResponse.json({
      data: transformedPosts,
      meta: {
        page,
        limit,
        total: totalCount[0].count.id,
        totalPages,
        hasNext: page < totalPages,
        hasPrev: page > 1
      }
    }, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600'
      }
    });

  } catch (error) {
    console.error('Detailed Directus error:', {
      message: error.message,
      status: error.status,
      errors: error.errors,
      stack: error.stack
    });

    // Handle specific Directus errors
    if (error.errors && error.errors[0]?.message === 'Invalid user credentials.') {
      return NextResponse.json(
        { error: 'Authentication failed. Please check your Directus token.' },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { 
        error: 'Failed to fetch blog posts',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}