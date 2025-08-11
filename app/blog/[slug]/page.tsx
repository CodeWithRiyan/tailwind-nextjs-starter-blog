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

const defaultLayout = 'PostLayout'
const layouts = {
  PostSimple,
  PostLayout,
  PostBanner,
}

export const generateStaticParams = async () => {
  return allBlogs.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>
}): Promise<Metadata | undefined> {
  const { slug } = await props.params
  const post = allBlogs.find((p) => p.slug === slug)

  if (!post) return

  const publishedAt = post?.date
  const modifiedAt = post.lastmod
  const imageList = post?.images ? [post.images] : []

  const ogImages = imageList.map((img) => {
    return {
      url: typeof img === 'string' && img.includes('http') ? img : siteMetadata.siteUrl + img,
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
}) {
  const { slug } = await props.params

  const post = allBlogs.find((p) => p.slug === slug)
  const postIndex = allBlogs.findIndex((p) => p.slug === slug)
  
  if (!post) {
    return notFound()
  }

  const sortedCoreContents = allCoreContent(sortPosts(allBlogs))
  const prev = sortedCoreContents[postIndex + 1]
  const next = sortedCoreContents[postIndex - 1]
  
  const mainContent = coreContent(post)
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
      url: post?.images || siteMetadata.siteUrl + siteMetadata.socialBanner,
    },
    datePublished: post?.date,
    dateModified: post?.lastmod || post?.date,
  }

  const Layout = layouts[post?.layout || defaultLayout]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Layout content={mainContent} prev={prev} next={next}>
        <MDXLayoutRenderer code={post.body.code} components={components} toc={post.toc} />
      </Layout>
    </>
  )
}
