'use client'

import { useState, MouseEvent } from 'react'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { CopyIcon, ExternalLinkIcon } from '@radix-ui/react-icons'
import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { motion } from 'motion/react'

export default function Contact() {
  const [open, setOpen] = useState(false)

  function copyEmail(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    setOpen(true)
    navigator.clipboard.writeText('drummond.rohan@gmail.com')
    setTimeout(() => setOpen(false), 1500)
  }

  return (
    <main className="container mx-auto flex-1 flex flex-col justify-center gap-[2rem] px-6 md:max-w-[60%] xl:max-w-[40%]">
      <section>
        <h1 className="heading-lg mb-2">Get in touch</h1>
        <h2 className="body-lg">Always up for a coffee or kōrero!</h2>
      </section>
      <Separator />
      <section className="flex flex-col gap-4">
        <div className="flex flex-row justify-between items-center">
          <p className="body-lg">Email</p>
          <TooltipProvider>
            <Tooltip open={open}>
              <TooltipTrigger asChild>
                <motion.div
                  whileHover={{
                    scale: 1.025,
                    transition: { duration: 0.2 },
                  }}
                  transition={{ duration: 0.1 }}
                >
                  <Button
                    className="min-w-[100px] border hover:bg-background cursor-pointer"
                    asChild
                    onClick={copyEmail}
                  >
                    <div className="flex f-row items-center gap-3">
                      <p className="body">Copy</p>
                      <CopyIcon />
                    </div>
                  </Button>
                </motion.div>
              </TooltipTrigger>
              <TooltipContent className="body" side="top" sideOffset={5}>
                Copied
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <div className="flex flex-row justify-between items-center">
          <p className="body-lg">GitHub</p>
          <motion.div
            whileHover={{
              scale: 1.025,
              transition: { duration: 0.2 },
            }}
            transition={{ duration: 0.1 }}
          >
            <Button
              className="min-w-[100px] border hover:bg-background"
              asChild
            >
              <a
                href="https://github.com/rohandrummond"
                target="_blank"
                className="flex f-row items-center gap-3"
              >
                <p className="body">Visit</p>
                <ExternalLinkIcon />
              </a>
            </Button>
          </motion.div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <p className="body-lg">LinkedIn</p>
          <motion.div
            whileHover={{
              scale: 1.025,
              transition: { duration: 0.2 },
            }}
            transition={{ duration: 0.1 }}
          >
            <Button
              className="min-w-[100px] border hover:bg-background"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/drummondr/"
                target="_blank"
                className="flex f-row items-center gap-3"
              >
                <p className="body">Visit</p>
                <ExternalLinkIcon />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
