'use client'

import { useRouter } from 'next/navigation'
import { transitionPage } from '@/lib/utils'
import { RippleButton } from '@/components/ui/shadcn-io/ripple-button'
import { ExternalLinkIcon } from '@radix-ui/react-icons'

function ComingSoon({ githubUrl }: { githubUrl: string }) {
  const router = useRouter()
  function handleWork() {
    setTimeout(async () => {
      transitionPage('/work', router)
    }, 300)
  }
  return (
    <div className="flex flex-col flex-1 justify-center items-center">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center gap-10">
          <h2 className="heading-xl">Coming soon</h2>
          <p className="body-text text-center max-w-120">
            Something about currently working on the project while I balance
            studying at Dev Academy. Stay turned!
          </p>
        </div>
        <div className="flex flex-row gap-4 mt-12">
          <RippleButton
            className="border flex items-center"
            onClick={handleWork}
          >
            <p>Projects</p>
          </RippleButton>
          <RippleButton className="border flex items-center">
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

export default ComingSoon
