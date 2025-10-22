'use client'

import Image, { StaticImageData } from 'next/image'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import ProjectBadge from '@/components/ProjectBadge'
import PageEndOptions from './PageEndOptions'
import { ExternalLinkIcon } from '@radix-ui/react-icons'
import { motion } from 'motion/react'
import { Separator } from './ui/separator'
import { ImageItem } from '@/types/imageItem'

export default function Project({
  name,
  repo,
  stack,
  description,
  badges,
  features,
  images,
  videoSrc,
}: {
  name: string
  repo: string
  stack: {
    [key: string]: string
  }
  description: string
  badges: string[]
  features: string[]
  images?: ImageItem[]
  videoSrc: string
}) {
  return (
    <main className="container mx-auto mt-40 px-6">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 md:gap-20 xl:gap-y-24">
        <section className="flex flex-col justify-between gap-8">
          <h1 className="heading-xl">{name}</h1>
          <div className="flex flex-row flex-wrap gap-4">
            {badges.map((value, index) => (
              <ProjectBadge key={index} tech={value} />
            ))}
          </div>
        </section>
        <section>
          <video autoPlay loop muted className="rounded-xl">
            <source src={videoSrc} type="video/mp4" />
          </video>
        </section>
        <section className="flex flex-col justify-between items-start gap-8">
          <div className="flex flex-col">
            {Object.keys(stack).map((key, index) => (
              <h2 key={index} className="body-lg">
                {key}: {stack[key]}
              </h2>
            ))}
          </div>
          <p className="body w-[90%]">{description}</p>
          <motion.div
            whileHover={{
              scale: 1.025,
              transition: { duration: 0.2 },
            }}
            transition={{ duration: 0.1 }}
          >
            <Button className="border hover:bg-background" asChild>
              <a
                href={repo}
                target="_blank"
                className="flex f-row items-center gap-3"
              >
                <p className="body">GitHub</p>
                <ExternalLinkIcon />
              </a>
            </Button>
          </motion.div>
        </section>
        <section>
          <Card className="flex flex-col justify-center p-6 md:p-8">
            <div className="flex flex-col gap-6">
              <h2 className="body-lg">Key features</h2>
              <ul className="flex flex-col gap-2 list-disc list-inside">
                {features.map((value, index) => (
                  <li
                    key={index}
                    className="body before:content-[''] before:ml-[-12]"
                  >
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </section>
        {images &&
          images.map((image, index) => (
            <section key={index}>
              <Image
                src={image.data}
                alt={image.alt}
                className="border p-4 bg-card rounded-md"
              />
            </section>
          ))}
      </div>
      <PageEndOptions buttonText="Back to projects" />
    </main>
  )
}
