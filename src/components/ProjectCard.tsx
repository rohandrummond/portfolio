import Image from 'next/image'
import ProjectBadge from '@/components/ProjectBadge'
import placeholder from '@/../public/images/placeholder.png'

export default function ProjectCard({
  name,
  stack,
  blurb,
}: {
  name: string
  stack: string[]
  blurb: string
}) {
  return (
    <div className="flex flex-col gap-4">
      <Image src={placeholder} alt="" className="rounded-xl" />
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
  )
}
