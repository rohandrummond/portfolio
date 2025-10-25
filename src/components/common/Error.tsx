'use client'

import { useRouter } from 'next/navigation'
import { transitionPage } from '@/lib/utils'
import { RippleButton } from '@/components/ui/shadcn-io/ripple-button'
import { HomeIcon } from '@radix-ui/react-icons'

export default function Error({
  code,
  message,
}: {
  code: string
  message: string
}) {
  const router = useRouter()

  function handleHome() {
    setTimeout(async () => {
      transitionPage('/', router)
    }, 300)
  }
  return (
    <div className="flex flex-col flex-1 justify-center items-center">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center gap-2 mb-8">
          <h2 className="heading-xl">{code}</h2>
          <h3 className="body-lg">{message}</h3>
        </div>
        <RippleButton className="border flex items-center" onClick={handleHome}>
          <p>Home</p>
          <HomeIcon />
        </RippleButton>
      </div>
    </div>
  )
}
