import Link from 'next/link'
import Image from 'next/image'
import face from '../../public/images/notion-face.png'

export default function Header() {
  return (
    <>
      <header className="flex flex-row justify-between items-center mt-[30px]">
        <Link href="/">
          <Image src={face} height={50} alt="Cartoon of Rohan's face" />
        </Link>
        <nav className="flex flex-row gap-[50px]">
          <Link href="/about" className="nav-link">
            About
          </Link>
          <Link href="/skills" className="nav-link">
            Skills
          </Link>
          <Link href="/work" className="nav-link">
            Work
          </Link>
          <Link href="/contact" className="nav-link">
            Let’s kōrero
          </Link>
        </nav>
      </header>
    </>
  )
}
