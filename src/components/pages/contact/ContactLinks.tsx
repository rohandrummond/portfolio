'use client'

import { useState, MouseEvent } from 'react'
import { Button } from '@/components/ui/button'
import { CopyIcon, ExternalLinkIcon } from '@radix-ui/react-icons'
import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { motion } from 'motion/react'

export default function ContactLinks() {
  const [open, setOpen] = useState(false)

  function copyEmail(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    setOpen(true)
    navigator.clipboard.writeText('drummond.rohan@gmail.com')
    setTimeout(() => setOpen(false), 1500)
  }
  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-row justify-between items-center">
        <h3 className="body-lg">Email</h3>
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
                  className="min-w-[110px] border rounded-lg hover:bg-background cursor-pointer p-6"
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
        <h3 className="body-lg">GitHub</h3>
        <motion.div
          whileHover={{
            scale: 1.025,
            transition: { duration: 0.2 },
          }}
          transition={{ duration: 0.1 }}
        >
          <Button
            className="min-w-[110px] border rounded-lg hover:bg-background  p-6"
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
        <h3 className="body-lg">LinkedIn</h3>
        <motion.div
          whileHover={{
            scale: 1.025,
            transition: { duration: 0.2 },
          }}
          transition={{ duration: 0.1 }}
        >
          <Button
            className="min-w-[110px] border rounded-lg hover:bg-background  p-6"
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
  )
}
