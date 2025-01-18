import { genPageMetadata } from 'app/seo'
import { Building2, Code2, Laptop, PenTool, Target, Eye, ListChecks } from 'lucide-react'

export const metadata = genPageMetadata({ title: 'About PT. Riyan Solusi Teknologi' })

const Service = ({ icon: Icon, title, description }) => {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-orange-100 p-2 dark:bg-orange-900/30">
          <Icon className="h-6 w-6 text-orange-600 dark:text-orange-500" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
      </div>
      <p className="text-primary pl-11 dark:text-gray-300">{description}</p>
    </div>
  )
}

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Full-service web development solutions tailored to your business needs',
  },
  {
    icon: Laptop,
    title: 'Software Development',
    description: 'Custom software solutions to streamline your business processes',
  },
  {
    icon: PenTool,
    title: 'Application Design',
    description: 'User-centric application design focusing on usability and aesthetics',
  },
]

export default function Page() {
  return (
    <>
      <div className="mb-4 space-y-20">
        {/* Hero Section */}
        <section className="space-y-4 text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            PT. Riyan Solusi Teknologi
          </h1>
          <div className="text-primary flex items-center justify-center gap-2 dark:text-gray-300">
            <Building2 className="h-5 w-5" />
            <span>Pekalongan, Indonesia</span>
          </div>
          <p className="text-primary mx-auto max-w-2xl text-lg dark:text-gray-300">
            A professional web development provider with more than 7 years of experience delivering
            exceptional digital solutions.
          </p>
        </section>

        {/* Services Section */}
        <section>
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 dark:text-white">
            Our Services
          </h2>
          <div className="mx-auto max-w-3xl space-y-8">
            {services.map((service) => (
              <Service key={service.title} {...service} />
            ))}
          </div>
        </section>

        {/* What We Do Section */}
        <section className="mx-auto max-w-3xl">
          <div className="mb-4 flex items-center gap-3">
            <Target className="h-6 w-6 text-orange-600 dark:text-orange-500" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">What We Do</h2>
          </div>
          <div className="text-primary space-y-4 dark:text-gray-300">
            <p>
              We offer creative and innovative solutions through a process that is the most
              developed and effective means of conducting business. We provide solutions for web
              development for our clients' business.
            </p>
            <p>
              Create digital mobile application which nowadays become new a full functioning
              operation business among entrepreneurs. We create a simple, corporate, affordable,
              effective, and manageable website with our dedicated team of experts in the web
              development sectors.
            </p>
            <p>Our team is proficient to deliver quick and quality solutions.</p>
          </div>
        </section>

        {/* Vision Section */}
        <section className="mx-auto max-w-3xl">
          <div className="mb-4 flex items-center gap-3">
            <Eye className="h-6 w-6 text-orange-600 dark:text-orange-500" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Vision</h2>
          </div>
          <p className="text-primary dark:text-gray-300">
            Our vision is to become a consultant and service provider in the field of Information
            Technology and Communication who is competent and has an "Outstanding Service" standard.
          </p>
        </section>

        {/* Mission Section */}
        <section className="mx-auto max-w-3xl">
          <div className="mb-4 flex items-center gap-3">
            <ListChecks className="h-6 w-6 text-orange-600 dark:text-orange-500" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Mission</h2>
          </div>
          <ul className="text-primary ml-4 list-inside list-disc space-y-2 dark:text-gray-300">
            <li>Providing efficiency in solutions to our clients</li>
            <li>High quality and professionalism of work</li>
            <li>Commitment in every service to clients</li>
            <li>Creating a competent and innovative work culture</li>
          </ul>
        </section>
      </div>
    </>
  )
}
