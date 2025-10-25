import type { Metadata } from 'next'
import AboutHero from '@/components/pages/about/AboutHero'
import AboutEducation from '@/components/pages/about/AboutEducation'
import AboutSkills from '@/components/pages/about/AboutSkills'
import AboutExperience from '@/components/pages/about/AboutExperience'
import PageEndOptions from '@/components/common/PageEndOptions'
import { Separator } from '@/components/ui/separator'

export const metadata: Metadata = {
  title: 'About | Rohan Drummond',
  description: 'About Rohan Drummond, software developer from New Zealand',
}

export default function About() {
  return (
    <main className="flex flex-col container mx-auto px-6">
      <AboutHero />
      <div className="flex flex-col gap-16 md:gap-20 xl:gap-24">
        <Separator />
        <AboutEducation />
        <Separator />
        <AboutSkills />
        <Separator />
        <AboutExperience />
      </div>
      <PageEndOptions buttonText="Check out my projects" />
    </main>
  )
}
