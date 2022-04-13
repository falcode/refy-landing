import Image from 'next/image'
import Link from 'next/link'
import logo from '../assets/svg/logo-primary.svg'

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 w-full shadow bg-white h-16 px-10 flex justify-between z-20">
    <div className="w-20 h-full flex items-center">
      <Image src={logo} alt="Refy Logo"></Image>
    </div>

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
)

export default Navbar
