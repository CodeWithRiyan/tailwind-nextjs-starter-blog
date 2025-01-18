// app/not-found.tsx
'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowLeft, Search, Home, AlertCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const GlobalNotFound = () => {
  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-gray-50 px-4 dark:bg-gray-900">
      <div className="w-full max-w-3xl text-center">
        {/* Animated 404 */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-8xl font-extrabold text-transparent">
            404
          </h1>
          <div className="flex items-center justify-center space-x-2 text-gray-500 dark:text-gray-400">
            <AlertCircle className="h-5 w-5" />
            <p className="text-xl">Page Not Found</p>
          </div>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-12 space-y-4"
        >
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
            Looks like you've ventured into unknown territory!
          </h2>
          <p className="mx-auto max-w-md text-gray-600 dark:text-gray-400">
            The page you're looking for doesn't exist or has been moved. Don't worry though, you can
            find lots of other interesting content on our site.
          </p>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
        >
          <Link
            href="/"
            className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 text-white 
              transition-colors duration-300 hover:bg-blue-700 dark:hover:bg-blue-500"
          >
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Link>

          <Link
            href="/projects"
            className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-6 py-3 
              text-gray-700 transition-colors duration-300 hover:bg-gray-50 dark:border-gray-600 
              dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
          >
            <Search className="mr-2 h-4 w-4" />
            Browse Projects
          </Link>
        </motion.div>

        {/* Additional help */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12 text-sm text-gray-500 dark:text-gray-400"
        >
          <p>
            Need help finding something specific?{' '}
            <Link href="/contact" className="text-blue-600 hover:underline dark:text-blue-400">
              Contact us
            </Link>
            .
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default GlobalNotFound
