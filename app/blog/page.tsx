import ListLayout from '@/layouts/ListLayoutWithTags'
import { genPageMetadata } from 'app/seo'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import { transformBlogsToBlogPosts } from '@/utils/blogTransform'

export const metadata = genPageMetadata({ title: 'Blog' })

const limit = 100

export default async function BlogPage() {
  const coreBlogs = allCoreContent(sortPosts(allBlogs))
  const posts = transformBlogsToBlogPosts(coreBlogs)
  
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
