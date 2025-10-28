'use client'

import { useRouter } from 'next/navigation'
import { transitionPage } from '@/lib/utils'
import { RippleButton } from '@/components/ui/shadcn-io/ripple-button'
import { ExternalLinkIcon } from '@radix-ui/react-icons'

export default function ComingSoon({ githubUrl }: { githubUrl: string }) {
  const router = useRouter()
  function handleWork() {
    setTimeout(async () => {
      transitionPage('/work', router)
    }, 300)
  }
  return (
    <div className="flex flex-col flex-1 justify-center items-center px-6">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center gap-10">
          <h2 className="heading-lg text-center">Coming soon</h2>
          <p className="body text-center max-w-80 md:max-w-85 lg:max-w-95">
            A new project I&apos;m working on in my spare time while studying at
            Dev Academy Aotearoa!
          </p>
        </div>
        <div className="flex flex-row gap-8 mt-12">
          <RippleButton
            className="body border flex items-center py-5 px-4 md:py-6 md:px-5"
            onClick={handleWork}
          >
            <p>Projects</p>
          </RippleButton>
          <RippleButton className="body border flex items-center py-5 px-4 md:py-6 md:px-5">
            <a href={githubUrl} target="_blank">
              <p>GitHub</p>
            </a>
            <ExternalLinkIcon />
          </RippleButton>
        </div>
      </div>
    </div>
  )
}
