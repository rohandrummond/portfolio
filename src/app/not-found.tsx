'use client'

import { RippleButton } from '@/components/ui/shadcn-io/ripple-button'
import { HomeIcon } from '@radix-ui/react-icons'
import { useRouter } from 'next/navigation'
import { transitionPage } from '@/lib/utils'

export default function NotFound() {
  const router = useRouter()

  function handleHome() {
    setTimeout(async () => {
      transitionPage('/', router)
    }, 300)
  }
  return (
    <div className="flex flex-col flex-1 justify-center items-center">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center gap-2 mb-10">
          <h2 className="heading-xl">404</h2>
          <h3 className="heading-md">Page not found</h3>
          <p className="body-text">Unluggy uce</p>
        </div>
        <RippleButton className="border flex items-center" onClick={handleHome}>
          <p>Home</p>
          <HomeIcon />
        </RippleButton>
      </div>
    </div>
  )
}
