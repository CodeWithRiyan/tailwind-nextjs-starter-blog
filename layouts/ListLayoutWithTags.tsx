'use client'

import { usePathname } from 'next/navigation'
import { formatDate } from 'pliny/utils/formatDate'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import tagData from 'app/tag-data.json'
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react'
import TagList from '@/components/TagList'
import { BlogPost } from 'types/blog'

interface PaginationProps {
  totalPages: number
  currentPage: number
}

interface ListLayoutProps {
  posts: BlogPost[]
  title: string
  initialDisplayPosts?: BlogPost[]
  pagination?: PaginationProps
}

function Pagination({ totalPages, currentPage }: PaginationProps) {
  const pathname = usePathname()
  const basePath = pathname.split('/')[1]
  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages

  return (
    <div className="mt-12">
      <div className="text-center">
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <div className="flex items-center gap-4">
            {!prevPage ? (
              <button
                disabled
                className="flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-600/50 to-primary-400/50 px-6 py-3 text-lg font-semibold text-white opacity-50"
              >
                <ChevronLeft className="h-5 w-5" />
                Previous
              </button>
            ) : (
              <Link
                href={
                  currentPage - 1 === 1 ? `/${basePath}/` : `/${basePath}/page/${currentPage - 1}`
                }
                className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-600 to-primary-400 px-6 py-3 text-lg font-semibold text-white transition-all duration-300 hover:from-primary-700 hover:to-primary-500"
              >
                <ChevronLeft className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-0.5" />
                Previous
              </Link>
            )}

            {!nextPage ? (
              <button
                disabled
                className="flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-600/50 to-primary-400/50 px-6 py-3 text-lg font-semibold text-white opacity-50"
              >
                Next
                <ChevronRight className="h-5 w-5" />
              </button>
            ) : (
              <Link
                href={`/${basePath}/page/${currentPage + 1}`}
                className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-600 to-primary-400 px-6 py-3 text-lg font-semibold text-white transition-all duration-300 hover:from-primary-700 hover:to-primary-500"
              >
                Next
                <ChevronRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            )}
          </div>
        </div>
      </div>
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
          <div className="hidden lg:col-span-4 lg:block">
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
                  <div className="mt-4">
                    <TagList tags={sortedTags} counts={tagCounts} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="space-y-6">
              {displayPosts.map((post) => {
                const { slug, date_published, title, summary, tags, language } = post
                return (
                  <article
                    key={slug}
                    className="overflow-hidden rounded-lg bg-white shadow transition duration-300 ease-in-out hover:shadow-lg dark:bg-gray-800"
                  >
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="mr-2 h-4 w-4" />
                        <time dateTime={date_published} suppressHydrationWarning>
                          {formatDate(date_published, siteMetadata.locale)}
                        </time>
                      </div>

                      <div className="mt-4">
                        <h2 className="text-2xl font-bold text-gray-900 hover:text-primary-600 dark:text-white dark:hover:text-primary-400">
                          <Link href={`/blog/${slug}?locale=${language}`} className="hover:underline">
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
                            href={`/blog/${slug}?locale=${language}`}
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
