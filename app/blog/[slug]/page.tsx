import 'css/prism.css'
import 'katex/dist/katex.css'

import PageTitle from '@/components/PageTitle'
import { components } from '@/components/MDXComponents'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { sortPosts, coreContent, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs, allAuthors } from 'contentlayer/generated'
import type { Authors } from 'contentlayer/generated'
import PostSimple from '@/layouts/PostSimple'
import PostLayout from '@/layouts/PostLayout'
import PostBanner from '@/layouts/PostBanner'
import { Metadata } from 'next'
import siteMetadata from '@/data/siteMetadata'
import { notFound } from 'next/navigation'
import { getBlogPost } from 'fetch-ssr/blog-post'

const defaultLayout = 'PostLayout'
const layouts = {
  PostSimple,
  PostLayout,
  PostBanner,
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ locale: 'id-ID' | 'en-US' }>
}): Promise<Metadata | undefined> {
  const { slug } = await props.params
  const { locale } = await props.searchParams
  const post = await getBlogPost({ locale, slug })

  if (!post) return

  const publishedAt = post?.date_published
  const modifiedAt = post.date_updated
  // const authors = authorDetails.map((author) => author.name)
  const imageList = post?.images || []

  const ogImages = imageList.map((img) => {
    return {
      url: img.includes('http') ? img : siteMetadata.siteUrl + img,
    }
  })

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      siteName: siteMetadata.title,
      locale: 'en_US',
      type: 'article',
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      url: './',
      images: ogImages,
      // authors: authors.length > 0 ? authors : [siteMetadata.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.summary,
      images: imageList,
    },
  }
}

export default async function Page(props: {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ locale: 'id-ID' | 'en-US' }>
}) {
  const { slug } = await props.params
  const { locale } = await props.searchParams

  // Filter out drafts in production
  const post = await getBlogPost({ locale, slug })

  // const prev = sortedCoreContents[postIndex + 1]
  // const next = sortedCoreContents[postIndex - 1]
  
  // const mainContent = coreContent(post)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': siteMetadata.siteUrl + post?.slug,
    },
    headline: post?.title,
    image: {
      '@type': 'ImageObject',
      url: post?.images?.[0] || siteMetadata.siteUrl + siteMetadata.socialBanner,
    },
    datePublished: post?.date_published,
    dateModified: post?.date_updated,
    // author: {
    //   '@type': 'Person',
    //   name: post.authors,
    // },
  }

  const Layout = layouts[defaultLayout]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Layout content={post} />
    </>
  )
}
