export interface BlogPost {
  id: number
  status: string
  date_created: string
  date_updated: string
  date_published: string
  reading_time: number
  views: number
  images: string[] | null
  tags: string[]
  title: string
  slug: string
  summary: string
  content?: string
  language: string
}
