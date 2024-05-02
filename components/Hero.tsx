import React from 'react'
import Typewriter from '@/effects/Typewriter'
import Image from '@/node_modules/next/image'

const Hero = () => {
    return (
        <div className='w-full h-screen text-center'>
            <Image 
                src='/assets/background.jpg' 
                fill= {true}
                objectFit='cover'
                alt='Background Image'
                className='-z-10 opacity-50'
            />
            <div className='flex flex-col justify-center items-center p-3 max-w-[1240px] w-full h-full mx-auto'>
                <h1 className='font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-pink-600 to-purple-500'>Introducing Me:</h1>
                <div className='py-10 font-bold text-6xl text-white'>
                    <Typewriter/> 
                </div>
            </div>
        </div>
    )
}

export default Hero