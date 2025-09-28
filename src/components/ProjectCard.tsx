import Link from 'next/link'
import Image from 'next/image'
import ProjectBadge from '@/components/ProjectBadge'
import placeholder from '@/../public/images/placeholder.png'

export default function ProjectCard({
  name,
  stack,
  blurb,
  href,
}: {
  name: string
  stack: string[]
  blurb: string
  href: string
}) {
  return (
    <Link href={href}>
      <div className="flex flex-col gap-4">
        <Image src={placeholder} alt="" className="rounded-md" />
        <div className="flex flex-row justify-between items-center">
          <h3 className="body-large">{name}</h3>
          <div className="flex flex-row gap-2">
            {stack.map((tech, index) => (
              <ProjectBadge key={index} tech={tech} />
            ))}
          </div>
        </div>
        <p className="body-text">{blurb}</p>
      </div>
    </Link>
  )
}
