'use client'

import Image from 'next/image'
import ProjectBadge from '@/components/ProjectBadge'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { ArrowUpIcon, ExternalLinkIcon } from '@radix-ui/react-icons'
import placeholder from '@/../public/images/placeholder.png'
import Link from 'next/link'

export default function Project({
  name,
  subtitle,
  repo,
  stack,
  description,
  badges,
  problem,
  learnings,
  features,
}: {
  name: string
  subtitle: string
  repo: string
  stack: {
    [key: string]: string
  }
  description: string
  badges: string[]
  problem: string
  learnings: string
  features: string[]
}) {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }
  return (
    <main className="flex flex-col mt-30 mb-30 gap-20">
      <section className="flex flex-col gap-8">
        <div className="flex flex-row justify-between items-end">
          <div className="flex flex-col gap-2">
            <h1 className="heading-xl">{name}</h1>
            <h2 className="sub-heading">{subtitle}</h2>
          </div>
          <Button className="border" asChild>
            <a
              href={repo}
              target="_blank"
              className="flex f-row items-center gap-3"
            >
              <p className="sub-text">GitHub</p>
              <ExternalLinkIcon />
            </a>
          </Button>
        </div>
        <Image src={placeholder} alt="" className="min-w-full rounded-sm" />
      </section>
      <section className="flex flex-row gap-10">
        <div className="flex flex-col justify-between w-1/2">
          <div className="flex flex-col gap-1">
            {Object.keys(stack).map((key, index) => (
              <h3 key={index} className="sub-heading">
                {key}: {stack[key]}
              </h3>
            ))}
          </div>
          <p className="body-text">{description}</p>
          <div className="flex flex-row gap-4">
            {badges.map((value, index) => (
              <ProjectBadge key={index} tech={value} />
            ))}
          </div>
        </div>
        <Card className="flex flex-col w-1/2 p-8">
          <div className="flex flex-row gap-8">
            <div className="flex flex-col gap-2">
              <h4 className="body-text">The problem</h4>
              <p className="body-text">{problem}</p>
            </div>
            <Separator orientation="vertical" />
            <div className="flex flex-col gap-2">
              <h4 className="body-text">Learnings</h4>
              <p className="body-text">{learnings}</p>
            </div>
          </div>
          <Separator />
          <div className="flex flex-col gap-2">
            <h4 className="body-text">Key features</h4>
            <ul>
              {features.map((value, index) => (
                <li key={index} className="body-text list-disc list-inside">
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </Card>
      </section>
      <section className="grid grid-cols-2 gap-8 ">
        <Image src={placeholder} alt="" className="rounded-sm" />
        <Image src={placeholder} alt="" className="rounded-sm" />
        <Image src={placeholder} alt="" className="rounded-sm" />
        <Image src={placeholder} alt="" className="rounded-sm" />
      </section>
      <section className="flex flex-row justify-end gap-4">
        <Button className="border" asChild>
          <Link href="/about" className="sub-text">
            About me
          </Link>
        </Button>
        <Button
          className="border gap-1 sub-text"
          variant="outline"
          onClick={scrollToTop}
        >
          Back to top<ArrowUpIcon></ArrowUpIcon>
        </Button>
      </section>
    </main>
  )
}
