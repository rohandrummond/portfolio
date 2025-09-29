'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import TransitionLink from './TransitionLink'
import face from '../../public/images/notion-face.png'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={`header flex flex-row justify-between items-center fixed w-full py-5 px-5 z-10 ${
          scrolled ? 'header-scroll' : ''
        }`}
      >
        <TransitionLink href="/" className="nav-link">
          <Image src={face} height={24} alt="Cartoon of Rohan's face" />
        </TransitionLink>
        <nav className="flex flex-row gap-[50px]">
          <TransitionLink href="/about" className="nav-link">
            About
          </TransitionLink>
          <TransitionLink href="/work" className="nav-link">
            Work
          </TransitionLink>
          <TransitionLink href="/contact" className="nav-link">
            Let’s kōrero
          </TransitionLink>
        </nav>
      </header>
    </>
  )
}
