import { genPageMetadata } from 'app/seo'
import ProjectDetail from '@/components/ProjectDetail'
import { projects } from '@/data/projectsData'
import type { Metadata } from 'next'

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug)
  return genPageMetadata({
    title: project?.title || 'Project Not Found',
    description: project?.description,
  })
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default function Page({ params }: Props) {
  return <ProjectDetail params={params} />
}
