'use client'

import Image from 'next/image'
import face from '../../public/images/notion-face.png'

import Magnet from '@/components/Magnet'

export default function Home() {
  return (
    <div className="flex-1 flex justify-center items-center">
      <div className="flex flex-row items-end gap-10">
        <h1 className="heading-xl text-center text-foreground z-1">
          kia ora, i’m rohan
        </h1>
        <Magnet padding={1500} disabled={false} magnetStrength={1}>
          <Image src={face} alt="" className="relative w-auto h-[7rem] -z-10" />
        </Magnet>
      </div>
    </div>
  )
}
