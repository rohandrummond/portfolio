'use client'

import Image, { StaticImageData } from 'next/image'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import ProjectBadge from '@/components/ProjectBadge'
import PageEndOptions from './PageEndOptions'
import { ExternalLinkIcon } from '@radix-ui/react-icons'
import { motion } from 'motion/react'
import { Separator } from './ui/separator'

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
  images?: StaticImageData[]
  videoSrc: string
}) {
  return (
    <main className="container mx-auto pt-50">
      <div className="grid grid-cols-2 gap-y-30 gap-x-20">
        <section className="flex flex-col justify-between">
          <h1 className="heading-xl">{name}</h1>
          <div className="flex flex-row gap-4">
            {badges.map((value, index) => (
              <ProjectBadge key={index} tech={value} />
            ))}
          </div>
        </section>
        <section>
          <video autoPlay loop muted className="rounded-lg">
            <source src={videoSrc} type="video/mp4" />
          </video>
        </section>
        <section className="flex flex-col justify-between items-start">
          <div className="flex flex-col ">
            {Object.keys(stack).map((key, index) => (
              <h3 key={index} className="body-lg">
                {key}: {stack[key]}
              </h3>
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
          <Card className="flex flex-col justify-center p-8">
            <div className="flex flex-col gap-6">
              <h4 className="body">Key features</h4>
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
                src={image}
                alt=""
                className="border py-4 px-6 bg-card rounded-md"
              />
            </section>
          ))}
      </div>
      <PageEndOptions buttonText="Back to projects" />
    </main>

    // <main className="container mx-auto flex flex-col mt-30 mb-30 gap-20">
    //   <section className="flex flex-row">
    //     <div className="flex flex-col justify-between items-end">
    //       <h1 className="heading-xl">{name}</h1>
    //       <div className="flex flex-row gap-4">
    //         {badges.map((value, index) => (
    //           <ProjectBadge key={index} tech={value} />
    //         ))}
    //       </div>
    //     </div>
    //     <video autoPlay loop muted className="w-1/2 rounded-lg">
    //       <source src="/videos/arbie-abroad-demo.mp4" type="video/mp4" />
    //     </video>
    //   </section>
    //   <section className="flex flex-row gap-20">
    //     <div className="flex flex-col justify-between items-start gap-10 w-1/2">
    //       <div className="flex flex-col gap-1">
    //         {Object.keys(stack).map((key, index) => (
    //           <h3 key={index} className="sub-heading">
    //             {key}: <span className="font-medium">{stack[key]}</span>
    //           </h3>
    //         ))}
    //       </div>
    //       <p className="body-text w-[90%]">{description}</p>
    //       <motion.div
    //         whileHover={{
    //           scale: 1.025,
    //           transition: { duration: 0.2 },
    //         }}
    //         transition={{ duration: 0.1 }}
    //       >
    //         <Button className="border hover:bg-background" asChild>
    //           <a
    //             href={repo}
    //             target="_blank"
    //             className="flex f-row items-center gap-3"
    //           >
    //             <p className="sub-text">GitHub</p>
    //             <ExternalLinkIcon />
    //           </a>
    //         </Button>
    //       </motion.div>
    //     </div>
    //     <Card className="flex flex-col justify-center w-1/2 p-8">
    //       <div className="flex flex-col gap-6">
    //         <h4 className="body-text">Key features</h4>
    //         <ul className="flex flex-col gap-2 list-disc list-inside">
    //           {features.map((value, index) => (
    //             <li
    //               key={index}
    //               className="body-text before:content-[''] before:ml-[-12]"
    //             >
    //               {value}
    //             </li>
    //           ))}
    //         </ul>
    //       </div>
    //     </Card>
    //   </section>
    //   <section className="grid grid-cols-2 gap-8 ">
    //     {images &&
    //       images.map((image, index) => (
    //         <Image
    //           key={index}
    //           src={image}
    //           alt=""
    //           className="border py-4 px-6 bg-card rounded-md"
    //         />
    //       ))}
    //   </section>
    //   <PageEndOptions buttonText="Back to projects" />
    // </main>
  )
}
