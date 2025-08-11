import ListLayout from '@/layouts/ListLayoutWithTags'
import { genPageMetadata } from 'app/seo'
import { getBlogPost, getBlogPosts } from 'fetch-ssr/blog-post';
import { slug } from 'github-slugger';

export const revalidate = 600; // ISR, cache 10 minutes

export const metadata = genPageMetadata({ title: 'Blog' })

const locale = 'id-ID'
const page = 1
const limit = 100

export default async function BlogPage() {
  const blogPosts = await getBlogPosts({ locale, page, limit })

  const posts = blogPosts
  
  const pageNumber = 1
  const initialDisplayPosts = posts.slice(
    limit * (pageNumber - 1),
    limit * pageNumber
  )
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / limit),
  }

  return (
    <ListLayout
      posts={posts}
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
      title="All Posts"
    />
  )
}
