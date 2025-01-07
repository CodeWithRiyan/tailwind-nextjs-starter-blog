'use client'

import React, { useState, useEffect } from 'react'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'

const MAX_DISPLAY = 5

const NETWORK_POINTS = [
  // Top row
  { x: 15, y: 10 }, { x: 35, y: 10 }, { x: 50, y: 10 }, { x: 65, y: 10 }, { x: 85, y: 10 },
  // Upper middle row
  { x: 25, y: 25 }, { x: 50, y: 25 }, { x: 75, y: 25 },
  // Center row
  { x: 15, y: 50 }, { x: 35, y: 50 }, { x: 50, y: 50 }, { x: 65, y: 50 }, { x: 85, y: 50 },
  // Lower middle row
  { x: 25, y: 75 }, { x: 50, y: 75 }, { x: 75, y: 75 },
  // Bottom row
  { x: 15, y: 90 }, { x: 35, y: 90 }, { x: 50, y: 90 }, { x: 65, y: 90 }, { x: 85, y: 90 }
]

const BackgroundDecorations = ({ isVisible }) => {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      {/* Grid background */}
      <div className="absolute inset-0 -z-10">
        <div className={`absolute inset-0 bg-[linear-gradient(to_right,#4444441a_1px,transparent_1px),linear-gradient(to_bottom,#4444441a_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)]
          ${isVisible ? 'opacity-40' : 'opacity-0'} transition-opacity duration-1000`} />
      </div>

      {/* Network visualization */}
      <div className="absolute inset-0 -z-10">
        {NETWORK_POINTS.map((point, i) => (
          <div key={i}>
            {/* Persistent dot with gentle pulse */}
            <div 
              className={`absolute w-2 h-2 rounded-full bg-blue-400/70 dark:bg-blue-400/70
                ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
                transition-all duration-500`}
              style={{
                top: `${point.y}%`,
                left: `${point.x}%`,
                transitionDelay: `${i * 100}ms`,
              }}
            >
              {/* Continuous gentle pulse effect */}
              <div className="absolute inset-0 rounded-full bg-blue-300/50 
                dark:bg-blue-300/50 animate-gentle-pulse" />
            </div>

            {/* Repeating connection lines */}
            {NETWORK_POINTS.slice(i + 1).map((endpoint, j) => {
              const distance = Math.hypot(endpoint.x - point.x, endpoint.y - point.y);
              if (distance < 45) {
                const angle = Math.atan2(endpoint.y - point.y, endpoint.x - point.x) * 180 / Math.PI;
                return (
                  <div
                    key={`${i}-${j}`}
                    className="absolute h-px"
                    style={{
                      top: `${point.y}%`,
                      left: `${point.x}%`,
                      width: `${distance}%`,
                      transform: `rotate(${angle}deg)`,
                      transformOrigin: '0 0',
                    }}
                  >
                    <div className="w-full h-full">
                      <div className="absolute inset-0 bg-gradient-to-r 
                        from-blue-400/30 to-blue-400/30
                        dark:from-blue-400/30 dark:to-blue-400/30
                        animate-connection-flow"
                        style={{ 
                          animationDelay: `${(i + j) * 50}ms`
                        }} />
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        ))}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 -z-10">
        <div className={`absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-purple-900/10
          ${isVisible ? 'opacity-60' : 'opacity-0'} transition-opacity duration-1000`} />
      </div>
    </>
  )
}

const ClientSideContent = ({ posts, isVisible }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <>
      <BackgroundDecorations isVisible={isVisible} />
      
      {/* Newsletter Form */}
      {siteMetadata.newsletter?.provider && (
        <div className={`flex items-center justify-center pt-4
          transition-all duration-1000
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          style={{ transitionDelay: '1400ms' }}>
          <NewsletterForm />
        </div>
      )}
    </>
  )
}

const Home = ({ posts }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <>
<style jsx global>{`
        @keyframes gentle-pulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.5); opacity: 0.2; }
        }

        @keyframes connection-flow {
          0% { 
            clip-path: polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%);
            opacity: 0;
          }
          5% { 
            clip-path: polygon(0% 0%, 0% 100%, 5% 100%, 5% 0%);
            opacity: 0.4;
          }
          95% { 
            clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%);
            opacity: 0.4;
          }
          100% { 
            clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%);
            opacity: 0;
          }
        }

        .animate-gentle-pulse {
          animation: gentle-pulse 3s infinite ease-in-out;
        }

        .animate-connection-flow {
          animation: connection-flow 6s infinite ease-in-out;
        }
      `}</style>

      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {/* Hero Section */}
        <div className="relative min-h-[80vh] flex flex-col items-center justify-center pb-8 pt-6 overflow-hidden">
          <ClientSideContent posts={posts} isVisible={isVisible} />

          {/* Centered Content */}
          <div className="text-center max-w-3xl mx-auto px-4">
            <h1 className={`relative font-extrabold tracking-tight text-gray-900 dark:text-gray-100 text-4xl md:text-5xl
              transition-all duration-1000 transform mb-6
              ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <span className="inline-block bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
                {siteMetadata.title}
              </span>
            </h1>

            <p className={`relative text-lg md:text-xl leading-8 text-gray-500 dark:text-gray-400
              transition-all duration-1000 delay-500
              ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              {siteMetadata.description}
            </p>
          </div>
        </div>

        {/* Posts Section */}
        <div className="max-w-6xl mx-auto px-4">
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {!posts.length && 'No posts found.'}
            {posts.slice(0, MAX_DISPLAY).map((post, index) => {
              const { slug, date, title, summary, tags } = post
              return (
                <li key={slug} 
                  className={`py-12 transition-all duration-700 transform
                    ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{ transitionDelay: `${1000 + index * 200}ms` }}>
                  <article className="relative group">
                    {/* Hover effect background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                    
                    <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                      <dl>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                          <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                        </dd>
                      </dl>
                      <div className="space-y-5 xl:col-span-3">
                        <div className="space-y-6">
                          <div>
                            <h2 className="text-2xl font-bold leading-8 tracking-tight">
                              <Link
                                href={`/blog/${slug}`}
                                className="text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                              >
                                {title}
                              </Link>
                            </h2>
                            <div className="flex flex-wrap">
                              {tags.map((tag) => (
                                <Tag key={tag} text={tag} />
                              ))}
                            </div>
                          </div>
                          <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                            {summary}
                          </div>
                        </div>
                        <div className="text-base font-medium leading-6">
                          <Link
                            href={`/blog/${slug}`}
                            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                            aria-label={`Read more: "${title}"`}
                          >
                            Read more &rarr;
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                </li>
              )
            })}
          </ul>

          {posts.length > MAX_DISPLAY && (
            <div className={`flex justify-end text-base font-medium leading-6 mt-6
              transition-all duration-1000
              ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: '1200ms' }}>
              <Link
                href="/blog"
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                aria-label="All posts"
              >
                All Posts &rarr;
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Home