import ProjectCard from '@/components/ProjectCard'

export default function Work() {
  return (
    <main className="flex flex-col mt-30 mb-30 gap-20">
      <section className="flex flex-col items-center">
        <h1 className="heading-lg">Projects</h1>
        <h2 className="sub-heading">
          Something about the projects I&rsquo;ve worked on
        </h2>
      </section>
      <section className="grid grid-cols-2 gap-12">
        <ProjectCard
          name="Two Cents [WIP]"
          stack={['Next', 'Firebase', 'Neon']}
          blurb="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam."
        />
        <ProjectCard
          name="TattGPT"
          stack={['OpenAI', 'Angular', '.NET', 'Supabase']}
          blurb="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam."
        />
        <ProjectCard
          name="Tip Tap Toe"
          stack={['Google Gemini', '.NET']}
          blurb="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam."
        />
        <ProjectCard
          name="Arbie Abroad"
          stack={['React', 'Express', 'MongoDB']}
          blurb="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam."
        />
      </section>
    </main>
  )
}
