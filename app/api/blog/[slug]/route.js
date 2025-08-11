// app/api/blog/[slug]/route.js
import { createDirectus, rest, readItems, readItem, updateItem } from '@directus/sdk';
import { NextResponse } from 'next/server';

const directus = createDirectus(process.env.DIRECTUS_URL).with(rest());

export async function GET(request, { params }) {
  const { searchParams } = new URL(request.url);
  const locale = searchParams.get('lang') || 'en-US';
  const { slug } = await params;

  try {
    // Get translation by slug to find the post ID
    const translations = await directus.request(
      readItems('blog_posts_translations', {
        filter: {
          slug: { _eq: slug },
          languages_code: { _eq: locale }
        },
        fields: ['blog_posts_id'],
        limit: 1
      })
    );

    if (!translations.length) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      );
    }

    const postId = translations[0].blog_posts_id;

    // Get the full post
    const post = await directus.request(
      readItem('blog_posts', postId, {
        filter: {
          status: { _eq: 'published' }
        },
        fields: [
          'id',
          'status',
          'date_created',
          'date_updated', 
          'date_published',
          'reading_time',
          'canonical_url',
          'layout',
          'tags',
          'views',
          'images',
          {
            'translations': [
              'id',
              'title',
              'slug',
              'summary',
              'content',
              'languages_code'
            ]
          }
        ]
      })
    );

    if (!post) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      );
    }

    const translation = post.translations?.find(t => t.languages_code === locale);
    
    if (!translation) {
      return NextResponse.json(
        { error: 'Translation not found' },
        { status: 404 }
      );
    }

    // Increment view count (optional)
    try {
      await directus.request(
        updateItem('blog_posts', postId, {
          views: (post.views || 0) + 1
        })
      );
    } catch (viewError) {
      console.warn('Failed to update view count:', viewError);
    }

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
      }),
    );

    const postTagsId = post.tags?.map(tag => blog_posts_tags?.find(t => t.id === tag).tags_id) || [];
    const tagsName = postTagsId?.map(tag => tags?.find(t => t.id === tag).name) || [];
    const postFilesId = post.images.map(img => blog_posts_files?.find(f => f.id === img).directus_files_id) || [];
    const imagesUrl = postFilesId.map(id => `${process.env.DIRECTUS_URL}/assets/${id}`) || [];

    // Get available languages for this post
    const availableLanguages = post.translations?.map(t => ({
      code: t.languages_code,
      slug: t.slug,
      title: t.title
    })) || [];

    const transformedPost = {
      ...post,
      title: translation.title,
      slug: translation.slug,
      tags: tagsName,
      images: imagesUrl,
      summary: translation.summary,
      content: translation.content,
      language: translation.languages_code,
      availableLanguages,
      views: (post.views || 0) + 1, // Include the updated view count
      translations: undefined // Remove from response
    };

    return NextResponse.json({
      data: transformedPost
    }, {
      headers: {
        'Cache-Control': 'public, s-maxage=600, stale-while-revalidate=1200' // Cache for 10 minutes
      }
    });

  } catch (error) {
    console.error('Error fetching blog post:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog post' },
      { status: 500 }
    );
  }
}