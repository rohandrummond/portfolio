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
          blurb="Shared financial dashboard for couples"
          href="/work/two-cents"
        />
        <ProjectCard
          name="TattGPT"
          stack={['OpenAI', 'Angular', '.NET', 'Supabase']}
          blurb="Web app for AI generated tattoo ideas"
          href="/work/tattgpt"
        />
        <ProjectCard
          name="Tip Tap Toe"
          stack={['Google Gemini', '.NET']}
          blurb="Console app for code typing practice"
          href="/work/tip-tap-toe"
        />
        <ProjectCard
          name="Arbie Abroad"
          stack={['React', 'Express', 'MongoDB']}
          blurb="Micro CMS for sharing travel memories"
          href="/work/arbie-abroad"
        />
      </section>
    </main>
  )
}
