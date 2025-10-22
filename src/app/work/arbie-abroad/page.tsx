import Project from '@/components/Project'
import imageOne from '@/../public/images/arbie-abroad/arbie-abroad-desktop-screenshots.png'
import imageTwo from '@/../public/images/arbie-abroad/arbie-abroad-mobile-screenshots.png'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Arbie Abroad | Rohan Drummond',
  description: 'Arbie Abroad, built by Rohan Drummond.',
}

export default function ArbieAbroad() {
  return (
    <Project
      name="Arbie Abroad"
      repo="https://github.com/rohandrummond/arbie-abroad"
      stack={{
        'Front-end': 'React',
        API: 'Express',
        Database: 'MongoDB',
      }}
      description="Arbie Abroad is a full-stack travel blog app I built as a lightweight and convenient way for sharing and preserving my travel memories. It features a React front end and an Express API, with posts, images, and user data stored in MongoDB,."
      badges={['JavaScript', 'Node.js', 'NoSQL']}
      features={[
        'Interactive world map built with React Simple Maps for exploring travel posts.',
        'User authentication & accounts with secure bcrypt encryption and Redux-managed state.',
        'Dynamic content through an Express-powered RESTful API with modular route handlers.',
        'MongoDB data layer with dedicated collections for users, posts, comments, and image storage via GridFS.',
        'Admin tools for creating posts, managing users, and moderating content.',
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
