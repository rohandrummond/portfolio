'use client'
import { usePathname } from 'next/navigation'
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'

export default function Footer() {
  const pathname = usePathname()

  return (
    <>
      <footer
        className={`flex f-row ${
          pathname != '/' ? 'justify-between' : 'justify-center md:justify-end'
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
            <p className="body-sm">© Rohan Drummond 2025</p>
          </>
        ) : (
          <p className="body-sm">[ Deployed with Next.js and AWS ]</p>
        )}
      </footer>
    </>
  )
}
