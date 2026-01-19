import { Metadata } from 'next'
import ProjectCard from '@/components/pages/work/ProjectCard'
import mithrandirImage from '@/../public/images/mithrandir/mithrandir-card.png'
import tattgptImage from '@/../public/images/tattgpt/tattgpt-card.png'
import tipTapToeImage from '@/../public/images/tip-tap-toe/tip-tap-toe-card.png'
import arbieAbroadImage from '@/../public/images/arbie-abroad/arbie-abroad-card.png'

export const metadata: Metadata = {
  title: 'Work | Rohan Drummond',
  description: 'Software applications and projects built by Rohan Drummond',
}

export default function Work() {
  return (
    <main className="container mx-auto flex flex-col my-50 px-6">
      <div className="mb-20">
        <h1 className="heading-lg text-center mb-2">Personal projects</h1>
        <h2 className="body-lg text-center">
          A collection of apps I&apos;ve built and designed in my spare time
        </h2>
      </div>
      <section className="grid grid-cols-1 xl:grid-cols-2 gap-12 md:gap-16">
        <ProjectCard
          name="Mithrandir"
          stack={['.NET', 'Next.js', 'PostgreSQL', 'Redis']}
          blurb="An API key and rate limiting REST API I built to learn more about .NET fundamentals, Redis and infrastructure tools like AWS, Docker and Terraform."
          href="/work/mithrandir"
          image={{
            data: mithrandirImage,
            alt: 'Mithrandir web dashboard on laptop',
          }}
        />
        <ProjectCard
          name="TattGPT"
          stack={['.NET', 'Angular', 'PostgreSQL', 'OpenAI']}
          blurb="An AI powered tattoo idea generator. A project for learning about .NET web APIs, Angular, rate limiting and OpenAI's image and text generation models."
          href="/work/tattgpt"
          image={{
            data: tattgptImage,
            alt: 'TattGPT saved ideas page on mobile',
          }}
        />
        <ProjectCard
          name="Tip Tap Toe"
          stack={['.NET', 'Gemini']}
          blurb="A console app for practicing and improving code typing speed, built to explore C# and generative AI. My first experience working with a strongly typed language."
          href="/work/tip-tap-toe"
          image={{
            data: tipTapToeImage,
            alt: 'TipTapToe terminal program on laptop',
          }}
        />
        <ProjectCard
          name="Arbie Abroad"
          stack={['React', 'Express', 'MongoDB']}
          blurb="My first self directed project, a micro CMS for sharing travel memories with family and friends. Built to cement learning from on an online bootcamp I had completed."
          href="/work/arbie-abroad"
          image={{
            data: arbieAbroadImage,
            alt: 'Arbie Abroad home screen map on mobile',
          }}
        />
      </section>
    </main>
  )
}
