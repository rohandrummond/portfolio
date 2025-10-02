'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import TransitionLink from './TransitionLink'
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import face from '../../public/images/notion-face.png'

export default function Header() {
  const path = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    console.log(path)
    if (path === '/') {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [path])

  const pathname = usePathname()

  return (
    <>
      <header
        className={`header flex flex-row justify-between items-center fixed h-[70px] w-full py-5 px-5 z-10 bg-transparent transition-colors duration-500 ease-in-out ${
          scrolled ? 'header-scroll' : ''
        }`}
      >
        {pathname != '/' ? (
          <TransitionLink href="/" className="nav-link">
            <Image src={face} height={30} alt="Cartoon of Rohan's face" />
          </TransitionLink>
        ) : (
          <div className="flex flex-row gap-6">
            <a href="https://github.com/rohandrummond" target="_blank">
              <GitHubLogoIcon
                style={{ width: '24px', height: '24px' }}
              ></GitHubLogoIcon>
            </a>
            <a href="https://www.linkedin.com/in/drummondr/" target="_blank">
              <LinkedInLogoIcon
                style={{ width: '24px', height: '24px' }}
              ></LinkedInLogoIcon>
            </a>
          </div>
        )}
        <nav className="flex flex-row gap-[50px]">
          <TransitionLink href="/about" className="nav-link hover:underline">
            About
          </TransitionLink>
          <TransitionLink href="/work" className="nav-link hover:underline">
            Work
          </TransitionLink>
          <TransitionLink href="/contact" className="nav-link hover:underline">
            Contact
          </TransitionLink>
        </nav>
      </header>
    </>
  )
}
