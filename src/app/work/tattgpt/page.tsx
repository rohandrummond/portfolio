import { Metadata } from 'next'
import Project from '@/components/pages/work/Project'
import imageOne from '@/../public/images/tattgpt/tattgpt-desktop-screenshots.png'
import imageTwo from '@/../public/images/tattgpt/tattgpt-screenshots-mobile.png'

export const metadata: Metadata = {
  title: 'TattGPT | Rohan Drummond',
  description: 'TattGPT, built by Rohan Drummond.',
}

export default function TattGPT() {
  return (
    <Project
      name="TattGPT"
      repo="https://github.com/rohandrummond/tattgpt"
      firstParagraph="TattGPT is a web app that generates personalised tattoo ideas using AI. It's built on an Angular frontend, .NET web API, Supabase (PostgreSQL) for storage and authentication, and OpenAI's GPT and DALL·E 3 models."
      secondParagraph="I built TattGPT so I could experiment with Angular, and build a real web app using .NET. It was a good chance for me to practice interacting with AI models via an API, specifically image generation which I hadn't done before."
      badges={['.NET', 'Angular', 'PostgreSQL', 'GPT', 'DALL·E 3']}
      highlights={[
        "AI Integration: Utilises OpenAI's GPT model for generating creative tattoo concepts and DALL·E 3 for visual designs based on user preferences like style and size",
        '.NET Web API: Lightweight web APIs for handling OpenAI integration and PostgreSQL database operations via Supabase',
        'Angular Frontend: Custom frontend (no CSS libraries) with Angular reactive forms and RxJS state management',
        'Authentication: Client-side auth powered by Supabase with Google OAuth integration and 401 error handling',
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
