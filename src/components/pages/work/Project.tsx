'use client'

import Image, { StaticImageData } from 'next/image'
import { Card } from '@/components/ui/card'
import ProjectBadge from '@/components/pages/work/ProjectBadge'
import ProjectLinkButton from '@/components/pages/work/ProjectLinkButton'
import PageEndOptions from '@/components/common/PageEndOptions'
import { ExternalLinkIcon, ArrowRightIcon } from '@radix-ui/react-icons'

type ImageItem = {
  data: StaticImageData
  alt: string
}

export default function Project({
  name,
  repo,
  demo,
  firstParagraph,
  secondParagraph,
  badges,
  highlights,
  images,
  videoSrc,
}: {
  name: string
  repo: string
  demo?: string
  firstParagraph: string
  secondParagraph: string
  badges: string[]
  highlights: string[]
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
          <div className="flex flex-col gap-6">
            <p className="body w-[90%]">{firstParagraph}</p>
            <p className="body w-[90%]">{secondParagraph}</p>
          </div>
          <div className="flex flex-row gap-4">
            {demo && (
              <ProjectLinkButton
                href={demo}
                text="Demo"
                icon={ExternalLinkIcon}
              />
            )}
            <ProjectLinkButton
              href={repo}
              text="GitHub"
              icon={ExternalLinkIcon}
            />
          </div>
        </section>
        <section>
          <Card className="flex flex-col justify-center rounded-xl p-6 md:p-8">
            <div className="flex flex-col gap-6">
              <h2 className="flex flex-row items-center body-lg gap-2">
                Project Highlights <ArrowRightIcon />
              </h2>
              <ul className="flex flex-col gap-2 list-disc list-inside">
                {highlights.map((value, index) => (
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
                className="border p-4 bg-card rounded-lg"
              />
            </section>
          ))}
      </div>
      <PageEndOptions buttonText="Back to projects" />
    </main>
  )
}
