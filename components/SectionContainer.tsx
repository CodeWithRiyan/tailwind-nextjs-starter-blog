import { cn } from 'lib/utils'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
}

export default function SectionContainer({ children, className }: Props) {
  return <section className={cn('mx-auto w-full px-4 sm:px-24', className)}>{children}</section>
}
