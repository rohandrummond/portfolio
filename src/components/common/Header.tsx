'use client'

import { motion } from 'motion/react'
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'

const iconSpring = { type: 'spring', stiffness: 350, damping: 26 } as const

export default function Header() {
  return (
    <header className="flex flex-row items-center fixed top-0 min-h-[70px] w-full p-6 md:p-8 z-10">
      <div className="flex flex-row gap-6">
        <motion.a
          href="https://github.com/rohandrummond"
          target="_blank"
          aria-label="Rohan Drummond on GitHub"
          className="opacity-80"
          whileHover={{ scale: 1.15, opacity: 1 }}
          whileTap={{ scale: 0.9 }}
          transition={iconSpring}
        >
          <GitHubLogoIcon style={{ width: '24px', height: '24px' }} />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/drummondr/"
          target="_blank"
          aria-label="Rohan Drummond on LinkedIn"
          className="opacity-80"
          whileHover={{ scale: 1.15, opacity: 1 }}
          whileTap={{ scale: 0.9 }}
          transition={iconSpring}
        >
          <LinkedInLogoIcon style={{ width: '24px', height: '24px' }} />
        </motion.a>
      </div>
    </header>
  )
}
