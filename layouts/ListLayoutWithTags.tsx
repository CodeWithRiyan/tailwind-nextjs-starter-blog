'use client'

import { usePathname } from 'next/navigation'
import { slug } from 'github-slugger'
import { formatDate } from 'pliny/utils/formatDate'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import tagData from 'app/tag-data.json'
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react'

interface PaginationProps {
  totalPages: number
  currentPage: number
}

interface ListLayoutProps {
  posts: CoreContent<Blog>[]
  title: string
  initialDisplayPosts?: CoreContent<Blog>[]
  pagination?: PaginationProps
}

function Pagination({ totalPages, currentPage }: PaginationProps) {
  const pathname = usePathname()
  const basePath = pathname.split('/')[1]
  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages

  return (
    <div className="pb-8 pt-6">
      <nav className="flex items-center justify-between px-4 sm:px-0">
        <div className="flex flex-1 justify-between space-x-4 sm:justify-end">
          {!prevPage && (
            <button
              className="relative inline-flex cursor-not-allowed items-center rounded-md bg-gray-50 px-4 py-2 text-sm font-medium text-gray-400"
              disabled
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Previous
            </button>
          )}
          {prevPage && (
            <Link
              href={
                currentPage - 1 === 1 ? `/${basePath}/` : `/${basePath}/page/${currentPage - 1}`
              }
              className="relative inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 transition duration-150 ease-in-out hover:bg-gray-50"
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Previous
            </Link>
          )}
          <span className="relative inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-medium">
            Page {currentPage} of {totalPages}
          </span>
          {!nextPage && (
            <button
              className="relative inline-flex cursor-not-allowed items-center rounded-md bg-gray-50 px-4 py-2 text-sm font-medium text-gray-400"
              disabled
            >
              Next
              <ChevronRight className="ml-2 h-4 w-4" />
            </button>
          )}
          {nextPage && (
            <Link
              href={`/${basePath}/page/${currentPage + 1}`}
              className="relative inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 transition duration-150 ease-in-out hover:bg-gray-50"
            >
              Next
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          )}
        </div>
      </nav>
    </div>
  )
}

export default function ListLayoutWithTags({
  posts,
  title,
  initialDisplayPosts = [],
  pagination,
}: ListLayoutProps) {
  const pathname = usePathname()
  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a])

  const displayPosts = initialDisplayPosts.length > 0 ? initialDisplayPosts : posts

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="pb-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
        </div>

        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="hidden lg:col-span-3 lg:block">
            <div className="sticky top-6">
              <div className="overflow-hidden rounded-lg bg-white shadow dark:bg-gray-800">
                <div className="p-6">
                  {pathname.startsWith('/blog') ? (
                    <h3 className="text-lg font-semibold text-primary-600 dark:text-primary-400">
                      All Posts
                    </h3>
                  ) : (
                    <Link
                      href={`/blog`}
                      className="text-lg font-semibold text-gray-900 transition duration-150 ease-in-out hover:text-primary-600 dark:text-gray-100 dark:hover:text-primary-400"
                    >
                      All Posts
                    </Link>
                  )}
                  <div className="mt-4 space-y-3">
                    {sortedTags.map((t) => {
                      return (
                        <div key={t}>
                          {decodeURI(pathname.split('/tags/')[1]) === slug(t) ? (
                            <span className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-primary-600 dark:text-primary-400">
                              {`${t} (${tagCounts[t]})`}
                            </span>
                          ) : (
                            <Link
                              href={`/tags/${slug(t)}`}
                              className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-gray-600 transition duration-150 ease-in-out hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
                            >
                              {`${t} (${tagCounts[t]})`}
                            </Link>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-9">
            <div className="space-y-6">
              {displayPosts.map((post) => {
                const { path, date, title, summary, tags } = post
                return (
                  <article
                    key={path}
                    className="overflow-hidden rounded-lg bg-white shadow transition duration-300 ease-in-out hover:shadow-lg dark:bg-gray-800"
                  >
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="mr-2 h-4 w-4" />
                        <time dateTime={date} suppressHydrationWarning>
                          {formatDate(date, siteMetadata.locale)}
                        </time>
                      </div>

                      <div className="mt-4">
                        <h2 className="text-2xl font-bold text-gray-900 hover:text-primary-600 dark:text-white dark:hover:text-primary-400">
                          <Link href={`/${path}`} className="hover:underline">
                            {title}
                          </Link>
                        </h2>

                        <div className="mt-3 flex flex-wrap gap-2">
                          {tags?.map((tag) => <Tag key={tag} text={tag} />)}
                        </div>

                        <p className="mt-4 line-clamp-3 text-gray-600 dark:text-gray-300">
                          {summary}
                        </p>

                        <div className="mt-4">
                          <Link
                            href={`/${path}`}
                            className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                          >
                            Read more
                            <ChevronRight className="ml-1 h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>

            {pagination && pagination.totalPages > 1 && (
              <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
