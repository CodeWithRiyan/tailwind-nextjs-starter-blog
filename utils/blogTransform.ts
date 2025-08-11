import { CoreContent } from 'pliny/utils/contentlayer'
import { Blog } from 'contentlayer/generated'
import { BlogPost } from 'types/blog'

export function transformBlogToBlogPost(blog: CoreContent<Blog>): BlogPost {
  return {
    id: 0, // Default value since contentlayer doesn't provide id
    status: blog.draft ? 'draft' : 'published',
    date_created: blog.date,
    date_updated: blog.lastmod || blog.date,
    date_published: blog.date,
    reading_time: typeof blog.readingTime === 'object' ? blog.readingTime?.minutes || 0 : 0,
    views: 0, // Default value since contentlayer doesn't track views
    images: blog.images || null,
    tags: blog.tags || [],
    title: blog.title,
    slug: blog.slug,
    summary: blog.summary || '',
    content: undefined, // Body is not included in CoreContent
    language: 'id-ID', // Default language, could be made configurable
  }
}

export function transformBlogsToBlogPosts(blogs: CoreContent<Blog>[]): BlogPost[] {
  return blogs.map(transformBlogToBlogPost)
}