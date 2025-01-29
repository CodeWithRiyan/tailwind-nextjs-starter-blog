import { genPageMetadata } from 'app/seo'
import ProjectDetail from '@/components/ProjectDetail'
import { projects } from '@/data/projectsData' // We'll create this file next

export const generateMetadata = ({ params }) => {
  const project = projects.find((p) => p.slug === params.slug)
  return genPageMetadata({
    title: project?.title || 'Project Not Found',
    description: project?.description,
  })
}

export const generateStaticParams = () => {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default function Page({ params }) {
  return <ProjectDetail params={params} />
}
