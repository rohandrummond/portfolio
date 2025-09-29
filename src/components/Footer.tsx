import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'

export default function Footer() {
  return (
    <>
      <footer className="flex f-row justify-between items-end mb-5 mx-5">
        <div className="flex flex-row gap-6">
          <a href="https://github.com/rohandrummond" target="_blank">
            <GitHubLogoIcon
              style={{ width: '30px', height: '30px' }}
            ></GitHubLogoIcon>
          </a>
          <a href="https://www.linkedin.com/in/drummondr/" target="_blank">
            <LinkedInLogoIcon
              style={{ width: '30px', height: '30px' }}
            ></LinkedInLogoIcon>
          </a>
        </div>
        <p className="footer-link">© Rohan Drummond 2025</p>
      </footer>
    </>
  )
}
