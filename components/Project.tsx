import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Sparkles, Tag, ChevronLeft, ChevronRight } from 'lucide-react'

const ProjectSection = ({ isMain = false }) => {
  const ITEMS_PER_PAGE = 4
  const [currentPage, setCurrentPage] = useState(1)

  const projects = [
    {
      title: 'I2I Custom (Apparel E-Commerce Platform)',
      description:
        'A specialized e-commerce platform for custom apparel, featuring an intuitive design interface, real-time pricing calculator, and comprehensive order management system.',
      technologies: ['Bootstrap', 'Codeigniter', 'MySQL', 'JQuery'],
      image: '/static/images/portfolio/ecommerce-i2icustom.png',
      featured: false,
    },
    {
      title: 'Boskasir (Cashier Application)',
      description:
        'A robust point-of-sale solution offering inventory management, sales tracking, and financial reporting capabilities for retail businesses of all sizes.',
      technologies: ['Bootstrap', 'Codeigniter', 'MySQL', 'JQuery'],
      image: '/static/images/portfolio/boskasir-cashier-app.png',
    },
    {
      title: 'BNV (Examination Application)',
      description:
        'A comprehensive digital examination platform with secure test delivery, automated grading, and detailed analytics for educational institutions and corporate training programs.',
      technologies: ['Bootstrap', 'Codeigniter', 'MySQL', 'JQuery'],
      image: '/static/images/portfolio/bni-corporate-university.png',
      featured: true,
    },
    {
      title: 'Agilascout (Web Scrapper Ecommerce)',
      description:
        'An advanced web scraping tool designed specifically for e-commerce platforms, providing automated price monitoring, competitor analysis, and market trend insights.',
      technologies: ['Python', 'Flask', 'Tailwind'],
      image: '/static/images/portfolio/agilascout-web-scrapper-for-ecommerce.png',
    },
    {
      title: 'Advika (Online Customer Service)',
      description:
        'A modern customer service platform integrating multi-channel communication, ticket management, and automated response systems for enhanced customer support efficiency.',
      technologies: ['Bootstrap', 'React.js', 'Next.js'],
      image: '/static/images/portfolio/advika-customer-service-online.png',
    },
    {
      title: 'Ecodoe (Procurement Application)',
      description:
        'A streamlined procurement management system featuring vendor evaluation, purchase order automation, and comprehensive spend analytics for optimized supply chain operations.',
      technologies: ['Bootstrap', 'React.js', 'Next.js', 'Firebase'],
      image: '/static/images/portfolio/ecodoe-procurement-application.png',
    },
    {
      title: 'Flowstep (API Generator)',
      description:
        'An innovative API development tool that automates the creation of RESTful APIs, featuring intuitive workflow design, documentation generation, and testing capabilities.',
      technologies: ['Tailwind', 'React.js', 'Next.js'],
      image: '/static/images/portfolio/flowstep-api-generator.png',
    },
    {
      title: 'CMS DSS (Advertising Content Management System)',
      description:
        'A sophisticated content management system specialized for digital advertising, offering campaign scheduling, asset management, and performance analytics tools.',
      technologies: ['Ant Design', 'React.js', 'Next.js'],
      image: '/static/images/portfolio/cms-dss.png',
    },
    {
      title: 'CombatGo (Boxing Timer and Virtual Combo Coach)',
      description:
        'An interactive boxing training application featuring customizable interval timing, virtual combo sequences, and progress tracking for both beginners and advanced athletes.',
      technologies: ['Tailwind', 'React.js', 'Next.js'],
      image: '/static/images/portfolio/combat-go-landing-page.png',
    },
    {
      title: 'BNI PLN (E-Budgeting)',
      description:
        'A comprehensive e-budgeting solution offering budget planning, expense tracking, and financial forecasting tools with integrated approval workflows and reporting capabilities.',
      technologies: ['Bootstrap', 'React.js', 'Next.js'],
      image: '/static/images/portfolio/bni-pln-dashboard.png',
    },
  ]

  // Calculate pagination
  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE

  // Get displayed projects based on isMain prop
  const displayedProjects = isMain
    ? projects.slice(0, ITEMS_PER_PAGE)
    : projects.slice(startIndex, endIndex)

  const handlePageChange = (newPage) => {
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
          {displayedProjects.map((project, index) => (
            <div
              key={project.title}
              className="animate-slide-in group overflow-hidden rounded-lg bg-white opacity-0 shadow-lg 
                transition-all duration-300 hover:shadow-xl dark:bg-gray-800"
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: 'forwards',
              }}
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {project.featured && (
                  <div
                    className="absolute right-4 top-4 z-10 flex items-center space-x-1 rounded-full 
                    bg-primary-500 px-3 py-1 text-sm text-white"
                  >
                    <Sparkles className="h-4 w-4" />
                    <span>Featured</span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3
                  className="mb-2 text-xl font-bold text-gray-900 transition-colors 
                  duration-300 group-hover:text-primary-500 dark:text-gray-100 dark:group-hover:text-primary-400"
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
            </div>
          ))}
        </div>

        {/* Pagination or See All button */}
        <div className="mt-12 flex justify-center">
          {isMain ? (
            <Link
              href="/projects"
              className="inline-flex items-center rounded-lg bg-primary-500 px-6 py-3 text-white 
                transition-colors duration-300 hover:bg-primary-600"
            >
              See All Projects
            </Link>
          ) : (
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="rounded-lg bg-white p-2 shadow-md transition-colors 
                  duration-300 hover:bg-gray-50
                  disabled:cursor-not-allowed disabled:opacity-50 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="flex items-center space-x-2">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => handlePageChange(i + 1)}
                    className={`h-10 w-10 rounded-lg transition-colors duration-300
                      ${
                        currentPage === i + 1
                          ? 'bg-primary-500 text-white'
                          : 'bg-white text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                      }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="rounded-lg bg-white p-2 shadow-md transition-colors 
                  duration-300 hover:bg-gray-50
                  disabled:cursor-not-allowed disabled:opacity-50 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectSection
