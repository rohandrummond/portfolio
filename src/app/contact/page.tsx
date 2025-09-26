import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { CopyIcon, ExternalLinkIcon } from '@radix-ui/react-icons'

export default function Contact() {
  return (
    <main className="flex-1 flex flex-col justify-center gap-[2rem] w-full max-w-[45vw] mx-auto">
      <section>
        <h1 className="heading-lg">Contact me.</h1>
        <h2 className="sub-heading">Something about contacting me</h2>
      </section>
      <Separator />
      <section className="flex flex-col gap-4">
        <div className="flex flex-row justify-between">
          <p className="body-large">Email</p>
          <Button className="min-w-[100px] border" asChild>
            <div className="flex f-row items-center gap-3">
              <p className="body-text">Copy</p>
              <CopyIcon />
            </div>
          </Button>
        </div>
        <div className="flex flex-row justify-between">
          <p className="body-large">GitHub</p>
          <Button className="min-w-[100px] border" asChild>
            <a
              href="https://github.com/rohandrummond"
              target="_blank"
              className="flex f-row items-center gap-3"
            >
              <p className="body-text">Visit</p>
              <ExternalLinkIcon />
            </a>
          </Button>
        </div>
        <div className="flex flex-row justify-between">
          <p className="body-large">LinkedIn</p>
          <Button className="min-w-[100px] border" asChild>
            <a
              href="https://www.linkedin.com/in/drummondr/"
              target="_blank"
              className="flex f-row items-center gap-3"
            >
              <p className="body-text">Visit</p>
              <ExternalLinkIcon />
            </a>
          </Button>
        </div>
      </section>
    </main>
  )
}
