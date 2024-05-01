import React from 'react'
import Link from '@/node_modules/next/link'

const Navbar = () => {

    return (
        <div className='fixed w-full shadow-xl h-24 z-[100] bg-slate-900 sm:px-5'>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <div>
                    <ul>
                        <div>
                            <li className='ml-10 font-extrabold text-xl uppercase text-transparent font-mono bg-clip-text bg-gradient-to-r from-pink-600 to-purple-500'>Welcome to my website</li>
                        </div>
                    </ul>

                </div>
                <div>
                    <ul className='hidden md:flex'>
                        <Link href='/#hero'>
                            <li className='ml-14 uppercase text-md hover:border-b'>Home</li>
                        </Link>
                        <Link href='/#about'>
                            <li className='ml-14 uppercase text-md hover:border-b'>About</li>
                        </Link>
                        <Link href='/#skills'>
                            <li className='ml-14 uppercase text-md hover:border-b'>Skills</li>
                        </Link>
                        <Link href='/#projects'>
                            <li className='ml-14 uppercase text-md hover:border-b'>Projects</li>
                        </Link>
                        <Link href='/#contact'>
                            <li className='ml-14 uppercase text-md hover:border-b'>Contact</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar