import React from 'react'
import Image from '@/node_modules/next/image'

const Skills = () => {
    return (
        <div id='skills' className='w-full lg:h-screen p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <p className='uppercase text-5xl tracking-widest font-bold-200 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-500 pb-4'>
                    Skills
                </p>

                <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 my-5'>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-200 border-2'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>HTML</h3>
                            </div>
                            <div className='m-auto'>
                                <Image src={'/assets/skill_icons/html.png'} width='35' height='35' alt='/' />
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-200 border-2'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>CSS</h3>
                            </div>
                            <div className='m-auto'>
                                <Image src={'/assets/skill_icons/css.png'} width='35' height='35' alt='/' />
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-200 border-2'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Javascript</h3>
                            </div>
                            <div className='m-auto'>
                                <Image src={'/assets/skill_icons/javascript.png'} width='35' height='35' alt='/' />
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-200 border-2'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Typescript</h3>
                            </div>
                            <div className='m-auto'>
                                <Image src={'/assets/skill_icons/typescript.png'} width='35' height='35' alt='/' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 my-5'>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-200 border-2'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>React</h3>
                            </div>
                            <div className='m-auto'>
                                <Image src={'/assets/skill_icons/react.png'} width='35' height='35' alt='/' />
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-200 border-2'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='flex flex-col items-center justify-center'>
                                <h3 className='text-lg'>React Native</h3>
                            </div>
                            <div className='m-auto'>
                                <Image src={'/assets/skill_icons/react.png'} width='35' height='35' alt='/' />
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-200 border-2'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>NextJS</h3>
                            </div>
                            <div className='m-auto border-white bg-white p-3'>
                                <Image src={'/assets/skill_icons/nextjs.png'} width='35' height='35' alt='/' />
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-200 border-2'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='flex flex-col items-center justify-center'>
                                <h3 className='text-lg'>Tailwind CSS</h3>
                            </div>
                            <div className='m-auto'>
                                <Image src={'/assets/skill_icons/tailwind.png'} width='35' height='35' alt='/' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 my-5'>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-200 border-2'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Firebase</h3>
                            </div>
                            <div className='m-auto'>
                                <Image src={'/assets/skill_icons/firebase.png'} width='25' height='25' alt='/' />
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-200 border-2'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Node.js</h3>
                            </div>
                            <div className='m-auto border-white bg-white px-2'>
                                <Image src={'/assets/skill_icons/nodejs.png'} width='35' height='35' alt='/' />
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-200 border-2'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Figma</h3>
                            </div>
                            <div className='m-auto'>
                                <Image src={'/assets/skill_icons/figma.png'} width='35' height='35' alt='/' />
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-200 border-2'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Github</h3>
                            </div>
                            <div className='m-auto border-white bg-white'>
                                <Image src={'/assets/skill_icons/github.png'} width='35' height='35' alt='/' />
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Skills