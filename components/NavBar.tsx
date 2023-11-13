import Link from '@/node_modules/next/link'

const NavBar = () => {
    return (
            <ul className="flex sticky top-0 py-10 justify-center space-x-16 md:space-x-16 lg:space-x-20">
                <li>
                    <Link href="/" className="md:text-xl hover:opacity-50">
                        About
                    </Link>
                </li>
                <li>
                    <Link href="/" className="md:text-xl hover:opacity-50">
                        Experiences  
                    </Link>
                </li>
                <li>
                    <Link href="/" className="md:text-xl hover:opacity-50">
                        Projects  
                    </Link>
                </li>
                <li>
                    <Link href="/" className="md:text-xl hover:opacity-50">
                        Contacts  
                    </Link>
                </li>
            </ul>

        //  </div> 
    )
}

export default NavBar 