'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'
import Magnet from '@/components/ui/Magnet'
import { useMediaQuery } from '@/hooks/use-media-query'
import face from '../../public/images/notion-face.png'

function BrbMessage() {
  const [spins, setSpins] = useState(0)

  return (
    <motion.div
      className="flex flex-col items-center cursor-pointer select-none"
      animate={{ rotate: spins * 360 }}
      whileTap={{ scale: 0.85 }}
      transition={{
        rotate: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
        scale: { type: 'spring', stiffness: 350, damping: 26 },
      }}
      onTap={() => setSpins((s) => s + 1)}
    >
      <Image
        src={face}
        alt="Cartoon illustration of Rohan Drummond"
        className="relative w-auto h-[2.5rem] pointer-events-none"
        priority
      />
    </motion.div>
  )
}

export default function Brb() {
  const isTouch = useMediaQuery('(pointer: coarse)')

  return (
    <motion.main
      className="flex-1 flex justify-center items-center px-6 md:px-8"
      initial={{
        opacity: 0,
        scale: 0.95,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        ease: 'easeOut',
        duration: 0.25,
        delay: 0.1,
      }}
    >
      {!isTouch ? (
        <Magnet padding={1500} disabled={false} magnetStrength={1}>
          <BrbMessage />
        </Magnet>
      ) : (
        <BrbMessage />
      )}
    </motion.main>
  )
}
