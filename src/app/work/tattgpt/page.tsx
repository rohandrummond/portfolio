import Project from '@/components/pages/work/Project'
import imageOne from '@/../public/images/tattgpt/tattgpt-desktop-screenshots.png'
import imageTwo from '@/../public/images/tattgpt/tattgpt-screenshots-mobile.png'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TattGPT | Rohan Drummond',
  description: 'TattGPT, built by Rohan Drummond.',
}

export default function TattGPT() {
  return (
    <Project
      name="TattGPT"
      repo="https://github.com/rohandrummond/tattgpt"
      stack={{
        'Front-end': 'Angular',
        API: '.NET',
        Database: 'Supabase',
        LLM: 'GPT & DALL·E 3',
      }}
      description="TattGPT is a full-stack web app that generates personalised tattoo ideas using AI, without the fuss of constant prompt engineering. Built with an Angular front-end and .NET web API, it integrates with Supabase (PostgreSQL) for storage and OpenAI for concept and image generation."
      badges={['TypeScript', 'C#', 'PostgreSQL', 'GPT', 'DALL·E 3']}
      features={[
        'AI generation of tattoo concepts (GPT-5 Mini) and custom images (DALL·E 3) via a .NET API.',
        'Personalised idea capture through an Angular Reactive Form for style, size, and placement preferences.',
        'Dynamic results display powered by structured JSON responses from the backend.',
        'User authentication and collections with Supabase (including Google OAuth) for saving and managing designs.',
        'Modern architecture with a clean .NET Web API, separating models, services, and data handling in PostgreSQL.',
      ]}
      images={[
        {
          data: imageOne,
          alt: 'Screenshots of TattGPT UI on desktop and tablet',
        },
        {
          data: imageTwo,
          alt: 'Screenshots of TattGPT UI on mobile',
        },
      ]}
      videoSrc="/videos/tattgpt-demo.mp4"
    />
  )
}
