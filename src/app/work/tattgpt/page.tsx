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
      firstParagraph="TattGPT is a web app that generates personalised tattoo ideas using AI. It's built with an Angular frontend, .NET web API, PostgreSQL (via Supabase) for storage and authentication, and OpenAI's GPT and DALL·E 3 models."
      secondParagraph="Having primarily worked with React and JavaScript at this point, I built TattGPT to experiment with Angular, .NET, and TypeScript. It also gave me hands on experience integrating with OpenAI's API, particularly the DALL·E 3 model for image generation, something I hadn't done before."
      badges={['.NET', 'Angular', 'PostgreSQL', 'GPT', 'DALL·E 3']}
      highlights={[
        "AI integration: Utilises OpenAI's GPT model for generating creative tattoo concepts and DALL·E 3 for visual designs based on user preferences like style and size",
        '.NET web API: Lightweight web API for handling OpenAI integration and PostgreSQL database operations via Supabase',
        'Angular frontend: Custom frontend (no CSS libraries) with Angular reactive forms and RxJS state management',
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
