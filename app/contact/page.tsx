import React from 'react'
import { Code, Smartphone, Palette, Database, Users, Award, Target, Coffee } from 'lucide-react'
import CTA from '@/components/sections/cta'

const AboutPage = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description:
        'Creating responsive and modern web applications using cutting-edge technologies and frameworks.',
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description:
        'Building native and cross-platform mobile applications for iOS and Android devices.',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description:
        'Designing intuitive and engaging user interfaces with focus on user experience and accessibility.',
    },
    {
      icon: Database,
      title: 'API Development',
      description: 'Developing robust and scalable APIs to power your applications and services.',
    },
  ]

  const values = [
    {
      icon: Users,
      title: 'Client-Focused',
      description:
        "We prioritize our clients' needs and maintain clear communication throughout every project.",
    },
    {
      icon: Award,
      title: 'Quality First',
      description:
        'We maintain high standards in our work, ensuring the best possible outcomes for every project.',
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'We stay ahead of technology trends to provide cutting-edge solutions.',
    },
    {
      icon: Coffee,
      title: 'Dedication',
      description:
        'Our team is passionate about creating the best digital solutions for our clients.',
    },
  ]

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            About Riyan.id
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            Building digital solutions with modern technology and best practices. We help businesses
            transform their ideas into reality.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Our Services
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
              Comprehensive digital solutions tailored to your needs
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div
                  key={service.title}
                  className="rounded-lg bg-white p-6 shadow-lg transition-transform duration-300 hover:scale-105 dark:bg-gray-900"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary-500 text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Our Values
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            The principles that guide our work and relationships
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon
            return (
              <div key={value.title} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-primary-500 text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
                  {value.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>
      <CTA />
    </div>
  )
}

export default AboutPage
