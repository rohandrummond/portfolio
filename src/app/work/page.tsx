import ProjectCard from '@/components/ProjectCard'

export default function Work() {
  return (
    <main className="container mx-auto flex flex-col mt-30 mb-30 gap-20">
      <section className="flex flex-col items-center">
        <h1 className="heading-lg">Projects</h1>
        <h2 className="sub-heading">Stuff I&rsquo;ve designed and built</h2>
      </section>
      <section className="grid grid-cols-2 gap-12">
        <ProjectCard
          name="Two Cents [WIP]"
          stack={['Next', 'Firebase', 'Neon']}
          blurb="A financial dashboard designed for couples who want insights into their shared finances e.g. wealth distribution, cash flow monitoring,  financial goal tracking."
          href="/work/two-cents"
        />
        <ProjectCard
          name="TattGPT"
          stack={['OpenAI', 'Angular', '.NET', 'Supabase']}
          blurb="An AI-powered tattoo idea generator that lets users quickly generate and save designs, without worrying about the fuss of prompt engineering."
          href="/work/tattgpt"
        />
        <ProjectCard
          name="Tip Tap Toe"
          stack={['Google Gemini', '.NET']}
          blurb="A console application for improving coding-style typing speed and accuracy. Users choose a language, get assessed, and receive personalised practice."
          href="/work/tip-tap-toe"
        />
        <ProjectCard
          name="Arbie Abroad"
          stack={['React', 'Express', 'MongoDB']}
          blurb="A micro CMS for sharing travel memories with family and friends. Users can create and edit posts, manage users, and interact through a built-in commenting system."
          href="/work/arbie-abroad"
        />
      </section>
    </main>
  )
}
