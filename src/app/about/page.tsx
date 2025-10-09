import AboutHero from '@/components/about/AboutHero'
import AboutEducation from '@/components/about/AboutEducation'
import AboutSkills from '@/components/about/AboutSkills'
import AboutExperience from '@/components/about/AboutExperience'
import PageEndOptions from '@/components/PageEndOptions'
import { Separator } from '@/components/ui/separator'

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
