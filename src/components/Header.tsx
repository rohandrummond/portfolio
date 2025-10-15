'use client'

import { useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { useMediaQuery } from '@/hooks/use-media-query'
import Image from 'next/image'
import TransitionLink from './TransitionLink'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerNavLink,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import {
  Cross2Icon,
  GitHubLogoIcon,
  HamburgerMenuIcon,
  LinkedInLogoIcon,
} from '@radix-ui/react-icons'
import face from '../../public/images/notion-face.png'
import Link from 'next/link'

export default function Header() {
  const isDesktop = useMediaQuery('(min-width:768px)')
  const path = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    console.log(path)
    if (path === '/') {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
    const onScroll = () => {
      if (!drawerOpen) {
        setScrolled(window.scrollY > 50)
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [path, drawerOpen])

  const pathname = usePathname()

  return (
    <>
      <header
        className={`header flex flex-row justify-between items-center fixed top-0 min-h-[70px] w-full py-5 px-5 z-10 bg-transparent transition-colors duration-500 ease-in-out ${
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
        {isDesktop ? (
          <nav className="flex flex-row gap-[50px]">
            <TransitionLink href="/about" className="body hover:underline">
              About
            </TransitionLink>
            <TransitionLink href="/work" className="body hover:underline">
              Work
            </TransitionLink>
            <TransitionLink href="/contact" className="body hover:underline">
              Contact
            </TransitionLink>
          </nav>
        ) : (
          <Drawer
            open={drawerOpen}
            onOpenChange={setDrawerOpen}
            direction="right"
          >
            <DrawerTrigger asChild>
              <HamburgerMenuIcon style={{ height: '30px', width: '36px' }} />
            </DrawerTrigger>

            <DrawerContent className="items-end p-5">
              <DrawerHeader className="p-0">
                <DrawerTitle className="sr-only">Navigation Menu</DrawerTitle>
                <DrawerDescription className="sr-only">
                  Links to main sections of the site
                </DrawerDescription>
                <DrawerClose asChild>
                  <Cross2Icon style={{ width: '30px', height: '30px' }} />
                </DrawerClose>
              </DrawerHeader>

              <div className="flex flex-col items-end gap-8 mt-[25vh]">
                <DrawerNavLink href="/" setDrawerOpen={setDrawerOpen}>
                  Home
                </DrawerNavLink>
                <DrawerNavLink href="/about" setDrawerOpen={setDrawerOpen}>
                  About
                </DrawerNavLink>
                <DrawerNavLink href="/work" setDrawerOpen={setDrawerOpen}>
                  Work
                </DrawerNavLink>
                <DrawerNavLink href="/contact" setDrawerOpen={setDrawerOpen}>
                  Contact
                </DrawerNavLink>
              </div>

              <DrawerFooter>
                <Link href="/">
                  <Image src={face} height={30} alt="Cartoon of Rohan's face" />
                </Link>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        )}
      </header>
    </>
  )
}
