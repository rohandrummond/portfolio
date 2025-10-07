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
    <section className="flex flex-col lg:flex-row justify-between items-end mt-40 mb-50">
      <h3 className="heading-lg">Thanks for stopping by!</h3>
      <div className="flex flex-row gap-4">
        <RippleButton
          className="body border hover:bg-background"
          onClick={navigateToWork}
        >
          {buttonText}
        </RippleButton>
        <RippleButton
          className="body border gap-1 bg-background hover:bg-card"
          onClick={scrollToTop}
        >
          Scroll to top<ArrowUpIcon></ArrowUpIcon>
        </RippleButton>
      </div>
    </section>
  )
}
