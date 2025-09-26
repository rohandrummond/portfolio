'use client'

import { useState, MouseEvent } from 'react'
import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export default function Footer() {
  const [open, setOpen] = useState(false)

  function copyEmail(e: MouseEvent<HTMLAnchorElement>) {
    e.preventDefault()
    setOpen(true)
    navigator.clipboard.writeText('drummond.rohan@gmail.com')
    setTimeout(() => setOpen(false), 1500)
  }

  return (
    <>
      <footer className="flex f-row justify-between mb-[30px]">
        <a
          href="https://github.com/rohandrummond"
          target="_blank"
          className="footer-link"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/drummondr/"
          target="_blank"
          className="footer-link"
        >
          LinkedIn
        </a>
        <TooltipProvider>
          <Tooltip open={open}>
            <TooltipTrigger asChild>
              <a className="footer-link cursor-pointer" onClick={copyEmail}>
                Email
              </a>
            </TooltipTrigger>
            <TooltipContent side="top" sideOffset={5}>
              Copied
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <p className="footer-link">© Rohan Drummond 2025</p>
      </footer>
    </>
  )
}
