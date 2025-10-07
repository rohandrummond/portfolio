'use client'

import Image, { StaticImageData } from 'next/image'
import TransitionLink from './TransitionLink'
import ProjectBadge from '@/components/ProjectBadge'
import { motion } from 'motion/react'

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
    <motion.div
      whileHover={{
        scale: 1.01,
        transition: { duration: 0.2 },
      }}
      transition={{ duration: 0.1 }}
    >
      <TransitionLink href={href}>
        <div className="flex flex-col bg-card hover:bg-background border rounded-sm">
          <Image src={image} alt="" className="rounded-t-sm" />
          <div className="flex flex-col gap-4 p-5">
            <div className="flex flex-row justify-between items-start">
              <h3 className="body-lg">{name}</h3>
              <div className="flex flex-row gap-2">
                {stack.map((tech, index) => (
                  <ProjectBadge key={index} tech={tech} />
                ))}
              </div>
            </div>
            <p className="body">{blurb}</p>
          </div>
        </div>
      </TransitionLink>
    </motion.div>
  )
}
