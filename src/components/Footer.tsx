'use client'
import { usePathname } from 'next/navigation'

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'

import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'

export default function Footer() {
  const pathname = usePathname()

  return (
    <>
      <footer
        className={`flex f-row ${
          pathname != '/' ? 'justify-between' : 'justify-end'
        } items-end mb-5 mx-5 z-1`}
      >
        {pathname != '/' ? (
          <>
            <div className="flex flex-row gap-6">
              <a href="https://github.com/rohandrummond" target="_blank">
                <GitHubLogoIcon
                  style={{ width: '24px', height: '24px' }}
                ></GitHubLogoIcon>
              </a>
              <a href="https://www.linkedin.com/in/drummondr/" target="_blank">
                <LinkedInLogoIcon
                  style={{ width: '24px', height: '24px' }}
                ></LinkedInLogoIcon>
              </a>
            </div>
            <p className="footer-link">© Rohan Drummond 2025</p>
          </>
        ) : (
          <div className="flex flex-col items-end">
            <p className="body-small">
              Deployed with AWS Route 53, CloudFront and Amazon S3.
            </p>
            <p className="body-small">
              Built with Next.js, Tailwind CSS and shadcn/ui.
            </p>
          </div>
        )}
      </footer>
    </>
  )
}
