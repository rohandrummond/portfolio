'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'motion/react'

export default function ProjectLinkButton({
  href,
  text,
  icon: Icon,
}: {
  href: string
  text: string
  icon: React.ComponentType
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.025, transition: { duration: 0.2 } }}
      transition={{ duration: 0.1 }}
    >
      <Button
        className="border rounded-lg hover:bg-background !py-5 !px-4 md:!py-6 md:!px-5"
        asChild
      >
        <a
          href={href}
          target="_blank"
          className="flex flex-row items-center gap-3"
        >
          <p className="body">{text}</p>
          <Icon />
        </a>
      </Button>
    </motion.div>
  )
}
