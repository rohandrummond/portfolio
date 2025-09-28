import Project from '@/components/Project'

export default function TattGPT() {
  return (
    <Project
      name="TattGPT"
      repo="https://github.com/rohandrummond/tattgpt"
      subtitle="A web app for AI-generated tattoo ideas"
      stack={{
        'Front-end': 'Angular',
        API: '.NET',
        Database: 'Supabase',
        LLM: 'Google Gemini',
      }}
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut. Lorem ipsum dolor sit amet, consectetur."
      badges={['C#', 'TypeScript', 'PostgreSQL']}
      problem="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ."
      learnings="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ."
      features={[
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
      ]}
    />
  )
}
