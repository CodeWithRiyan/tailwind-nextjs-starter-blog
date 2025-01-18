'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Sparkles, Tag, ChevronLeft, ChevronRight } from 'lucide-react'
import { projects, IProject } from '@/data/projectsData'

interface ProjectSectionProps {
  isMain?: boolean
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ isMain = false }) => {
  const ITEMS_PER_PAGE = 4
  const [currentPage, setCurrentPage] = useState(1)

  // Calculate pagination
  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE

  // Get displayed projects based on isMain prop
  const displayedProjects = isMain
    ? projects.slice(0, ITEMS_PER_PAGE)
    : projects.slice(startIndex, endIndex)

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="w-full bg-gray-50 py-16 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-100">
            {isMain ? 'Featured Projects' : 'All Projects'}
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
            Explore some of my recent work and personal projects. Each project represents a unique
            challenge and demonstrates different technical skills.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {displayedProjects.map((project: IProject) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group relative rounded-lg bg-white shadow-lg transition-all duration-300 
                hover:shadow-xl dark:bg-gray-800"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={640}
                  height={360}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {project.featured && (
                  <div
                    className="absolute right-4 top-4 z-10 flex items-center space-x-1 rounded-full 
                    bg-blue-500 px-3 py-1 text-sm text-white"
                  >
                    <Sparkles className="h-4 w-4" />
                    <span>Featured</span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3
                  className="mb-2 text-xl font-bold text-gray-900 transition-colors duration-300 
                  group-hover:text-blue-500 dark:text-gray-100"
                >
                  {project.title}
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-400">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 
                        text-sm text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                    >
                      <Tag className="mr-1 h-3 w-3" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination or See All button */}
        <div className="mt-12">
          <div className="text-center">
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              {isMain ? (
                <Link
                  href="/projects"
                  className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-600 to-primary-400 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:from-primary-700 hover:to-primary-500"
                >
                  View All Projects
                  <svg
                    className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              ) : (
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-600 to-primary-400 px-6 py-3 text-lg font-semibold text-white transition-all duration-300 hover:from-primary-700 hover:to-primary-500 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <ChevronLeft className="h-5 w-5" />
                    Previous
                  </button>
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-600 to-primary-400 px-6 py-3 text-lg font-semibold text-white transition-all duration-300 hover:from-primary-700 hover:to-primary-500 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Next
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectSection
