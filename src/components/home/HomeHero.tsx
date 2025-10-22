'use client'

import { useMediaQuery } from '@/hooks/use-media-query'
import Image from 'next/image'
import face from '../../../public/images/notion-face.png'
import Magnet from '@/components/Magnet'
import { motion } from 'motion/react'

function HomeHero() {
  const isTouch = useMediaQuery('(pointer: coarse)')

  return (
    <motion.div
      className="flex-1 flex justify-center items-center px-5"
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
        delay: 1,
      }}
    >
      <div className="flex flex-col lg:flex-row items-center lg:items-end gap-8 lg:gap-10">
        <h1 className="flex flex-col md:flex-row heading-xl text-center text-foreground z-1 md:gap-5">
          <span>kia ora,</span> <span>i’m rohan</span>
        </h1>
        {!isTouch ? (
          <Magnet padding={1500} disabled={false} magnetStrength={1}>
            <Image
              src={face}
              alt="Cartoon illustration of Rohan Drummond"
              className="relative w-auto h-[7rem] -z-10"
            />
          </Magnet>
        ) : (
          <Image src={face} alt="" className="relative w-auto h-[5rem] -z-10" />
        )}
      </div>
    </motion.div>
  )
}

export default HomeHero
