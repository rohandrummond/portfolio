import { Metadata } from 'next'
import Project from '@/components/pages/work/Project'
import imageOne from '@/../public/images/arbie-abroad/arbie-abroad-desktop-screenshots.png'
import imageTwo from '@/../public/images/arbie-abroad/arbie-abroad-mobile-screenshots.png'

export const metadata: Metadata = {
  title: 'Arbie Abroad | Rohan Drummond',
  description: 'Arbie Abroad, built by Rohan Drummond.',
}

export default function ArbieAbroad() {
  return (
    <Project
      name="Arbie Abroad"
      repo="https://github.com/rohandrummond/arbie-abroad"
      firstParagraph="Arbie Abroad is a full stack travel blog I built to share my and my partner's travels with family and friends. It includes an interactive world map, blog posts with image uploads, a commenting system, and an admin dashboard for managing content."
      secondParagraph="While I had worked with React, Express and MongoDB before, this was my first time pulling everything together in a single app without following a tutorial. I learnt to implement local auth from scratch, work with Redux for state management, and Multer and GridFS for file handling."
      badges={['React', 'Express', 'MongoDB']}
      highlights={[
        'Local authentication: User registration and login with bcrypt password hashing and express-session for session management',
        'Redux state management: Auth state managed via Redux Toolkit and persisted to localStorage, enabling protected routes and conditional rendering based on user type',
        'Image uploads: Express API uses Multer to handle multipart form data, which is chunked and stored using MongoDB GridFS',
        'Interactive world map: React Simple Maps renders countries, highlights those with blog posts, and navigates users to content',
      ]}
      images={[
        {
          data: imageOne,
          alt: 'Screenshots of Arbie Abroad UI on desktop and tablet',
        },
        {
          data: imageTwo,
          alt: 'Screenshots of Arbie Abroad UI on mobile',
        },
      ]}
      videoSrc="/videos/arbie-abroad-demo.mp4"
    />
  )
}
