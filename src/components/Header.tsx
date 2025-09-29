'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
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
        <Link href="/">
          <Image src={face} height={24} alt="Cartoon of Rohan's face" />
        </Link>
        <nav className="flex flex-row gap-[50px]">
          <Link href="/about" className="nav-link">
            About
          </Link>
          <Link href="/work" className="nav-link">
            Work
          </Link>
          <Link href="/contact" className="nav-link">
            Let’s kōrero
          </Link>
        </nav>
      </header>
    </>
  )
}
