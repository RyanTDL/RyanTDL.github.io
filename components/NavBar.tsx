import Link from '@/node_modules/next/link'

const NavBar = () => {
    return (
            <ul className="flex bg-inherit sticky top-0 py-10 justify-center space-x-16 md:space-x-16 lg:space-x-20">
                <li className="group">
                    <Link href="#about" className="md:text-xl inline-block">
                        About
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-500"/>
                    </Link>
                </li>
                <li className="group">
                    <Link href="#experience" className="md:text-xl inline-block">
                        Experience
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-500"/>
                    </Link>
                </li>
                <li className="group">
                    <Link href="#projects" className="md:text-xl inline-block">
                        Projects
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-500"/>
                    </Link>
                </li>
                <li className="group">
                    <Link href="#contact" className="md:text-xl inline-block">
                        Contact
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-500"/>
                    </Link>
                </li>
                <li className="group">
                    <Link href="/" className="md:text-xl inline-block">
                        Resume
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-500"/>
                    </Link>
                </li>
            </ul>
    )
}

export default NavBar 