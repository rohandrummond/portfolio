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
      <div className="flex flex-col bg-card border rounded-sm">
        <Image src={placeholder} alt="" className="rounded-t-sm" />
        <div className="flex flex-col gap-2 p-5">
          <div className="flex flex-row justify-between items-start">
            <h3 className="body-large">{name}</h3>
            <div className="flex flex-row gap-2">
              {stack.map((tech, index) => (
                <ProjectBadge key={index} tech={tech} />
              ))}
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis.
          </p>
        </div>
      </div>
    </Link>
  )
}
