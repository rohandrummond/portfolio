'use client'

import Image from 'next/image'
import image from '@/../public/images/rohan-profile.png'
import { ArrowDownIcon } from '@radix-ui/react-icons'

export default function AboutHero() {
  return (
    <section className="flex flex-col justify-end h-[100vh] pt-[30vh] pb-6 lg:pb-25">
      <h1 className="relative flex flex-col heading-lg w-[90%]">
        <span className="z-2">I’m a software developer</span>
        <span className="z-2">based in Aotearoa, New Zealand.</span>
      </h1>
      <div className="flex flex-col items-start justify-between lg:flex-row lg:items-end">
        <p className="w-[80%] lg:w-1/3 body">
          I found my way into software later in life, after realising my old
          career wasn’t where I wanted to be. That shift gave me a fresh
          perspective and a bit of grit, and I’ve been hooked on building and
          problem-solving ever since. Outside of coding, I’m usually at the gym,
          fishing, brewing a cheeky beer, or hanging out with my partner, mates,
          and whānau.
        </p>
        <div className="flex flex-row-reverse justify-between lg:flex-row items-end w-full gap-10">
          <div className="flex lg:flex-row items-center gap-1">
            <p
              className="body hover:underline"
              onClick={() => {
                window.scrollTo({
                  top: window.innerHeight,
                  behavior: 'smooth',
                })
              }}
            >
              See more
            </p>
            <ArrowDownIcon />
          </div>
          <Image
            src={image}
            alt=""
            className="w-[220px] h-[220px] object-cover rounded-lg z-1"
          />
        </div>
      </div>
    </section>
  )
}
