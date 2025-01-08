'use client'

import React, { useState, useEffect } from 'react'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import ClientSideContent from '@/components/Hero'
import Technology from '@/components/Technology'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import ProjectSection from '@/components/Project'
import TestimonialsSection from '@/components/Testimonials'

const MAX_DISPLAY = 5

const Home = ({ posts }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {/* Hero Section */}
        <div className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden pb-8 pt-6">
          <ClientSideContent isVisible={isVisible} />
          {/* Centered Content */}
          <div className="mx-auto max-w-3xl px-4 text-center">
            <h1
              className={`relative mb-6 transform text-4xl font-extrabold tracking-tight text-gray-900
              transition-all duration-1000 dark:text-gray-100 md:text-5xl
              ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              <span className="inline-block bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent dark:from-gray-100 dark:to-gray-400">
                {siteMetadata.title}
              </span>
            </h1>

            <p
              className={`relative text-lg leading-8 text-gray-500 transition-all delay-500
              duration-1000 dark:text-gray-400 md:text-xl
              ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              {siteMetadata.description}
            </p>
          </div>
        </div>
        <Technology />
        <ProjectSection isMain={true} />
        <TestimonialsSection />
      </div>
    </>
  )
}

export default Home
