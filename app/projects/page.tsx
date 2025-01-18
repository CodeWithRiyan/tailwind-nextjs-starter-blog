import React from 'react'
import { genPageMetadata } from 'app/seo'
import ProjectSection from '@/components/Project'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="container py-12">
          <ProjectSection isMain={false} />
        </div>
      </div>
    </>
  )
}
