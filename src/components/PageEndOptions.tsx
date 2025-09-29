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
    <section className="flex flex-row justify-between items-end my-10">
      <h3 className="heading-lg">Thanks for stopping by</h3>
      <div className="flex flex-row gap-4">
        <RippleButton
          className="border hover:bg-background sub-text"
          onClick={navigateToWork}
        >
          {buttonText}
        </RippleButton>
        <RippleButton
          className="border gap-1 sub-text bg-background hover:bg-card"
          onClick={scrollToTop}
        >
          Back to top<ArrowUpIcon></ArrowUpIcon>
        </RippleButton>
      </div>
    </section>
  )
}
