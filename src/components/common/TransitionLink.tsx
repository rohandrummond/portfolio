'use client'

import { ReactNode, MouseEvent } from 'react'
import { useRouter } from 'next/navigation'
import Link, { LinkProps } from 'next/link'
import { transitionPage } from '@/lib/utils'

interface TransitionLinkProps extends LinkProps {
  children: ReactNode
  href: string
  className?: string
}

export default function TransitionLink({
  children,
  href,
  className,
  ...props
}: TransitionLinkProps) {
  const router = useRouter()
  async function handleTransition(
    e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>
  ) {
    e.preventDefault()
    transitionPage(href, router)
  }
  return (
    <Link
      href={href}
      {...props}
      className={className}
      onClick={(e) => {
        handleTransition(e)
      }}
    >
      {children}
    </Link>
  )
}
