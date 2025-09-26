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

export default function Contact() {
  const [open, setOpen] = useState(false)

  function copyEmail(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    setOpen(true)
    navigator.clipboard.writeText('drummond.rohan@gmail.com')
    setTimeout(() => setOpen(false), 1500)
  }

  return (
    <main className="flex-1 flex flex-col justify-center gap-[2rem] w-full max-w-[45vw] mx-auto">
      <section>
        <h1 className="heading-lg">Contact me.</h1>
        <h2 className="sub-heading">Something about contacting me</h2>
      </section>
      <Separator />
      <section className="flex flex-col gap-4">
        <div className="flex flex-row justify-between items-center">
          <p className="body-large">Email</p>
          <TooltipProvider>
            <Tooltip open={open}>
              <TooltipTrigger asChild>
                <Button
                  className="min-w-[100px] border py-5 cursor-pointer"
                  asChild
                  onClick={copyEmail}
                >
                  <div className="flex f-row items-center gap-3">
                    <p className="sub-text">Copy</p>
                    <CopyIcon />
                  </div>
                </Button>
              </TooltipTrigger>
              <TooltipContent className="sub-text" side="top" sideOffset={5}>
                Copied
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="flex flex-row justify-between items-center">
          <p className="body-large">GitHub</p>
          <Button className="min-w-[100px] border py-5" asChild>
            <a
              href="https://github.com/rohandrummond"
              target="_blank"
              className="flex f-row items-center gap-3"
            >
              <p className="sub-text">Visit</p>
              <ExternalLinkIcon />
            </a>
          </Button>
        </div>
        <div className="flex flex-row justify-between items-center">
          <p className="body-large">LinkedIn</p>
          <Button className="min-w-[100px] border py-5" asChild>
            <a
              href="https://www.linkedin.com/in/drummondr/"
              target="_blank"
              className="flex f-row items-center gap-3"
            >
              <p className="sub-text">Visit</p>
              <ExternalLinkIcon />
            </a>
          </Button>
        </div>
      </section>
    </main>
  )
}
