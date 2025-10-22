'use client'

import { useRouter } from 'next/navigation'
import { transitionPage } from '@/lib/utils'
import { RippleButton } from '@/components/ui/shadcn-io/ripple-button'
import { ArrowUpIcon } from '@radix-ui/react-icons'

export default function PageEndOptions({ buttonText }: { buttonText: string }) {
  const router = useRouter()
  function navigateToWork() {
    setTimeout(async () => {
      transitionPage('/work', router)
    }, 300)
  }
  function scrollToTop() {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    }, 250)
  }
  return (
    <section className="flex flex-col md:flex-row justify-between items-center md:items-end mt-20 mb-30 md:mt-30 md:mb-40">
      <h3 className="w-[350px] md:w-[375px] lg:w-[500px] xl:w-auto heading-lg text-center md:text-left mb-10 md:m-0">
        Thanks for stopping by
      </h3>
      <div className="w-full xl:w-auto flex flex-row justify-center md:justify-end gap-6">
        <RippleButton
          className="body border hover:bg-background py-6 px-5"
          onClick={navigateToWork}
        >
          {buttonText}
        </RippleButton>
        <RippleButton
          className="body border rounded-lg bg-background hover:bg-card !py-6 !px-5"
          onClick={scrollToTop}
        >
          Scroll to top<ArrowUpIcon></ArrowUpIcon>
        </RippleButton>
      </div>
    </section>
  )
}
