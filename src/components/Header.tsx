import Link from 'next/link'
import Image from 'next/image'
import face from '../../public/images/notion-face.png'

export default function Header() {
  return (
    <>
      <header className="flex flex-row justify-between items-center mt-[30px]">
        <Image src={face} height={50} alt="Cartoon of Rohan's face" />
        <nav className="flex flex-row gap-[50px]">
          <Link href="" className="nav-link">
            Bio
          </Link>
          <Link href="" className="nav-link">
            Skills
          </Link>
          <Link href="" className="nav-link">
            Projects
          </Link>
          <Link href="" className="nav-link">
            Let’s kōrero
          </Link>
        </nav>
      </header>
    </>
  )
}
