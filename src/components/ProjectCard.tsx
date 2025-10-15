'use client'

import Image, { StaticImageData } from 'next/image'
import { useMediaQuery } from '@/hooks/use-media-query'
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
  const isTabletOrDesktop = useMediaQuery('(min-width:768px)')
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
          <div className="flex flex-col py-7 md:py-10 px-5 md:px-8 xl:px-7">
            <div className="flex flex-row justify-between items-start mb-5 md:mb-6">
              <h3 className="body-lg">{name}</h3>
              {isTabletOrDesktop && (
                <div className="flex flex-row flex-wrap gap-2">
                  {stack.map((tech, index) => (
                    <ProjectBadge key={index} tech={tech} />
                  ))}
                </div>
              )}
            </div>
            <p className="body mb-8 md:mb-0">{blurb}</p>
            {!isTabletOrDesktop && (
              <div className="flex flex-row flex-wrap gap-2 -ml-1">
                {stack.map((tech, index) => (
                  <ProjectBadge key={index} tech={tech} />
                ))}
              </div>
            )}
          </div>
        </div>
      </TransitionLink>
    </motion.div>
  )
}
