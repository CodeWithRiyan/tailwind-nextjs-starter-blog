import React from 'react'
import Link from '@/components/Link'
import { usePathname } from 'next/navigation'
import { slug } from 'github-slugger'
import { Tag, Hash } from 'lucide-react'

const TagList = ({ tags, counts }) => {
  const pathname = usePathname()
  const sortedTags = Object.keys(counts).sort((a, b) => counts[b] - counts[a])

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 border-b pb-4 dark:border-gray-700">
        <Tag className="h-5 w-5 text-primary-500" />
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Tags</h3>
      </div>

      <div className="grid grid-cols-2 gap-2 pt-2">
        {sortedTags.map((tag) => {
          const isActive = decodeURI(pathname.split('/tags/')[1]) === slug(tag)

          return (
            <div key={tag} className="group">
              {isActive ? (
                <div className="flex items-center gap-2 rounded-lg bg-primary-50 px-3 py-2 dark:bg-primary-900/20">
                  <Hash className="h-4 w-4 flex-shrink-0 text-primary-500" />
                  <span className="truncate text-sm font-medium text-primary-700 dark:text-primary-300">
                    {tag}
                  </span>
                  <span className="ml-auto flex-shrink-0 text-xs font-medium text-primary-600 dark:text-primary-400">
                    {counts[tag]}
                  </span>
                </div>
              ) : (
                <Link
                  href={`/tags/${slug(tag)}`}
                  className="flex items-center gap-2 rounded-lg px-3 py-2 transition-all duration-200 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  <Hash className="h-4 w-4 flex-shrink-0 text-gray-400 transition-colors group-hover:text-primary-500" />
                  <span className="truncate text-sm font-medium text-gray-600 transition-colors group-hover:text-gray-900 dark:text-gray-300 dark:group-hover:text-gray-100">
                    {tag}
                  </span>
                  <span className="ml-auto flex-shrink-0 text-xs font-medium text-gray-400 transition-colors group-hover:text-gray-600 dark:text-gray-500 dark:group-hover:text-gray-400">
                    {counts[tag]}
                  </span>
                </Link>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TagList
