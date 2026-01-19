import { Metadata } from 'next'
import Project from '@/components/pages/work/Project'

export const metadata: Metadata = {
  title: 'Mithrandir | Rohan Drummond',
  description: 'Mithrandir, built by Rohan Drummond.',
}

export default function Mithrandir() {
  return (
    <Project
      name="Mithrandir"
      repo="https://github.com/rohandrummond/mithrandir"
      demo="https://mithrandir-rho.vercel.app/"
      firstParagraph="Mithrandir is an API key management service that handles authentication, IP whitelisting, and rate limiting. It's built around a .NET MVC API that uses PostgreSQL for storing API keys, Redis for rate limiting and a Next.js dashboard for interacting with the service via a browser."
      secondParagraph="After completing Dev Academy's TypeScript focused curriculum, I wanted to dive back into the .NET ecosystem, and learn more about using middleware to process API requests. It was also a great opportunity to get some practical experience with AWS, Docker, Terraform and GitHub Actions CI/CD pipelines."
      badges={['.NET', 'Next.js', 'PostgreSQL', 'Redis']}
      highlights={[
        'Custom middleware pipeline: Requests processed through logging, authentication and rate limiting layers before reaching controllers',
        'Secure API key management: Cryptographically generated keys stored as BCrypt hashes',
        'Redis rate limiting: Sliding window with tiered limits and proper Retry-After response headers',
        'Integration testing: 52 tests using xUnit with a real middleware pipeline, in-memory database and custom time provider for rate limit testing',
      ]}
      videoSrc="/videos/mithrandir-demo.mp4"
    />
  )
}
