'use client'

import Image from 'next/image'
import image from '@/../public/images/rohan-profile.png'
import { ArrowDownIcon } from '@radix-ui/react-icons'

export default function AboutHero() {
  return (
    <section className="min-h-[100dvh] flex flex-col justify-end lg:justify-between mb-16 md:mb-20 xl:mb-24 pt-30 lg:pt-[45vh] xl:pt-[35vh] pb-6 xl:pb-10">
      <h1 className="heading-lg relative flex flex-col pb-10">
        <span className="z-2">I’m a software developer</span>
        <span className="z-2">based in Aotearoa, New Zealand.</span>
      </h1>
      <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between">
        <p className="body pb-12 md:w-2/3 lg:w-1/2 xl:w-1/3 lg:pb-0">
          I found my way into software later in life, after realising my old
          career wasn’t where I wanted to be. That shift gave me a fresh
          perspective and a bit of grit, and I’ve been hooked on building and
          problem-solving ever since. Outside of coding, I’m usually at the gym,
          fishing, brewing a cheeky beer, or hanging out with my partner, mates,
          and whānau.
        </p>
        <div className="w-full lg:w-auto flex flex-row-reverse lg:flex-row justify-between items-end lg:gap-6">
          <div className="flex items-center gap-1">
            <p
              className="body cursor-pointer hover:underline"
              onClick={() => {
                window.scrollTo({
                  top: window.innerHeight + 50,
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
