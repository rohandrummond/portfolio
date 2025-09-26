import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

export default function About() {
  return (
    <main className="flex-1 flex flex-col justify-center gap-[1rem] w-full max-w-[55vw] mx-auto">
      <section className="flex flex-col">
        <h1 className="heading-lg">About me.</h1>
        <h2 className="sub-heading">
          A short sentence that summarises who I am
        </h2>
      </section>
      <Separator />
      <section className="flex flex-col gap-[1rem]">
        <p className="body-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p className="body-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p className="body-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut{' '}
        </p>
        <p className="body-text">
          Something about checking out what{' '}
          <Link href="skills" className="underline">
            skills
          </Link>{' '}
          I have learnt or what{' '}
          <Link href="work" className="underline">
            projects
          </Link>{' '}
          I have built.
        </p>
      </section>
    </main>
  )
}
