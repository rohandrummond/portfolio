import Image, { StaticImageData } from 'next/image'
import TransitionLink from './TransitionLink'
import ProjectBadge from '@/components/ProjectBadge'

export default function ProjectCard({
  name,
  stack,
  blurb,
  href,
  image,
}: {
  name: string
  stack: string[]
  blurb: string
  href: string
  image: StaticImageData
}) {
  return (
    <TransitionLink href={href}>
      <div className="flex flex-col bg-card hover:bg-background border rounded-sm">
        <Image src={image} alt="" className="rounded-t-sm" />
        <div className="flex flex-col gap-2 p-5">
          <div className="flex flex-row justify-between items-start">
            <h3 className="body-large">{name}</h3>
            <div className="flex flex-row gap-2">
              {stack.map((tech, index) => (
                <ProjectBadge key={index} tech={tech} />
              ))}
            </div>
          </div>
          <p>{blurb}</p>
        </div>
      </div>
    </TransitionLink>
  )
}
