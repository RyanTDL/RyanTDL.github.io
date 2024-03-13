import Link from '@/node_modules/next/link'


const NavBar = () => {
    return (
        <div className='flex justify-center'>
            <ul className="w-full flex py-4 justify-around items-center lg:max-w-screen-md">
                <li className="group">
                    <Link href="#about" className="md:text-xl inline-block">
                        About
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"/>
                    </Link>
                </li>
                <li className="group">
                    <Link href="#experience" className="md:text-xl inline-block">
                        Experience
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"/>
                    </Link>
                </li>
                <li className="group">
                    <Link href="#projects" className="md:text-xl inline-block">
                        Projects
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"/>
                    </Link>
                </li>
                <li className="group">
                    <Link href="#contact" className="md:text-xl inline-block">
                        Contact
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"/>
                    </Link>
                </li>
                <li className="group">
                    <a download href="assets/TeoDeLiangRyan_resume.pdf" className="md:text-xl inline-block">
                        {/* <div className='text-center'>
                            <p>Download</p>
                            <p>my resume</p>
                        </div> */}
                        Resume
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"/>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default NavBar 