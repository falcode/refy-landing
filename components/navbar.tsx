import Image from 'next/image'
import Link from 'next/link'
import logo from '../assets/svg/logo.svg'

const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 w-full shadow bg-white h-16 pr-6 pl-6 flex justify-between z-20">
        <Image
          src={logo}
          alt="Refy Logo"></Image>
        <div className="flex items-center justify-between space-x-9">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/pricing">
            <a>Pricing</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar
