import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <footer className="flex f-row justify-between mb-[30px]">
        <Link href="" className="nav-link">
          GitHub
        </Link>
        <Link href="" className="nav-link">
          LinkedIn
        </Link>
        <Link href="" className="nav-link">
          Email
        </Link>
        <Link href="" className="nav-link">
          © Rohan Drummond 2025
        </Link>
      </footer>
    </>
  )
}
