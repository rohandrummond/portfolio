import { Metadata } from 'next'
import ProjectCard from '@/components/pages/work/ProjectCard'
import twoCentsImage from '@/../public/images/two-cents/two-cents-card.png'
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
          name="TattGPT"
          stack={['TypeScript', 'C#', 'PostgreSQL', 'GPT', 'DALL·E 3']}
          blurb="An AI-powered tattoo idea generator that lets users quickly generate and save designs, without worrying about the fuss of prompt engineering."
          href="/work/tattgpt"
          image={{
            data: tattgptImage,
            alt: 'TattGPT saved ideas page on mobile',
          }}
        />
        <ProjectCard
          name="Tip Tap Toe"
          stack={['C#', 'Gemini']}
          blurb="A console application for improving coding-style typing speed and accuracy. Users choose a language, get assessed, and receive personalised practice."
          href="/work/tip-tap-toe"
          image={{
            data: tipTapToeImage,
            alt: 'TipTapToe terminal program on laptop',
          }}
        />
        <ProjectCard
          name="Arbie Abroad"
          stack={['JavaScript', 'Node.js', 'NoSQL']}
          blurb="A micro CMS for sharing travel memories with family and friends. Users can create and edit posts, manage users, and interact through a built-in commenting system."
          href="/work/arbie-abroad"
          image={{
            data: arbieAbroadImage,
            alt: 'Arbie Abroad home screen map on mobile',
          }}
        />
        <ProjectCard
          name="Two Cents [WIP]"
          stack={['TypeScript', 'NoSQL', 'PostgreSQL']}
          blurb="A financial dashboard designed for couples who want insights into their shared finances e.g. wealth distribution, cash flow monitoring,  financial goal tracking."
          href="/work/two-cents"
          image={{
            data: twoCentsImage,
            alt: 'Two Cents dashboard on laptop',
          }}
        />
      </section>
    </main>
  )
}
