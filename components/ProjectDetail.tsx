import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Tag, ArrowLeft, Globe, Github, Calendar, Users } from 'lucide-react'
import { notFound } from 'next/navigation'
import { projects } from '@/data/projectsData'

const ProjectDetail = ({ params }) => {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  // Determine layout based on screenshots availability
  const hasScreenshots = project.screenshots && project.screenshots.length > 0

  return (
    <div className="min-h-screen bg-gray-50 py-12 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4">
        {/* Back button */}
        <Link
          href="/projects"
          className="mb-8 inline-flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Link>

        {/* Project header */}
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-gray-100">
            {project.title}
          </h1>
          <p className="mb-6 text-xl text-gray-600 dark:text-gray-400">{project.description}</p>

          {/* Quick info */}
          <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
              <Calendar className="h-5 w-5" />
              <span>Completed: {project.completionDate}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
              <Users className="h-5 w-5" />
              <span>Team: {project.teamSize}</span>
            </div>
            <div className="flex items-center space-x-2">
              {project.liveUrl && (
                <Link
                  href={project.liveUrl}
                  className="flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  <Globe className="mr-1 h-5 w-5" />
                  Live Demo
                </Link>
              )}
            </div>
            <div className="flex items-center space-x-2">
              {project.githubUrl && (
                <Link
                  href={project.githubUrl}
                  className="flex items-center text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                >
                  <Github className="mr-1 h-5 w-5" />
                  Source Code
                </Link>
              )}
            </div>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm 
                  text-gray-700 dark:bg-gray-700 dark:text-gray-300"
              >
                <Tag className="mr-1 h-3 w-3" />
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Main image */}
        <div className="mb-12 overflow-hidden rounded-lg shadow-lg">
          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={600}
            className="w-full object-cover"
          />
        </div>

        {/* Project details with conditional layout */}
        <div
          className={`mb-12 grid grid-cols-1 gap-12 ${hasScreenshots ? 'lg:grid-cols-3' : 'lg:grid-cols-2'}`}
        >
          {/* Main content */}
          <div className={hasScreenshots ? 'lg:col-span-2' : 'lg:col-span-full'}>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {/* Left column */}
              <div className="space-y-8">
                <div>
                  <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
                    Project Overview
                  </h2>
                  <p className="whitespace-pre-line text-gray-600 dark:text-gray-400">
                    {project.longDescription}
                  </p>
                </div>

                <div>
                  <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
                    Key Features
                  </h2>
                  <ul className="list-inside list-disc space-y-2 text-gray-600 dark:text-gray-400">
                    {project.keyFeatures.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right column */}
              <div className="space-y-8">
                <div>
                  <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
                    Challenges
                  </h2>
                  <ul className="list-inside list-disc space-y-2 text-gray-600 dark:text-gray-400">
                    {project.challenges.map((challenge, index) => (
                      <li key={index}>{challenge}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
                    Solutions
                  </h2>
                  <ul className="list-inside list-disc space-y-2 text-gray-600 dark:text-gray-400">
                    {project.solutions.map((solution, index) => (
                      <li key={index}>{solution}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Screenshots sidebar - only render if there are screenshots */}
          {hasScreenshots && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Screenshots</h2>
              {project.screenshots.map((screenshot, index) => (
                <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={screenshot}
                    alt={`${project.title} screenshot ${index + 1}`}
                    width={400}
                    height={300}
                    className="w-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail
