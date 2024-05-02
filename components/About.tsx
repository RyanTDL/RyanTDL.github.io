import React from 'react'

const About = () => {
    return (

        <div id='about' className='w-full md:h-screen p-2 flex items-center '>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-14'>
                <div className='col-span-2'>
                        <p className='uppercase text-5xl tracking-widest font-bold-200 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-500 pb-4'>
                            About
                        </p>
                        <p className='py-2 text-gray-300 text-2xl'>
                            Hey there! I'm Ryan, a second year student at the National University of Singapore (NUS) and an aspiring software engineer.
                            Currently in my second year of study, I am immersing myself in the world of software development and generative AI.
                        </p>
                        <p className='py-2 text-gray-300 text-2xl'>
                            I have a passion for using technology to create positive change.
                            Whether it is developing apps that solve real-world problems or exploring new innovative solutions, I am constantly seeking 
                            opportunities to collaborate on projects that can make tangible impact.
                            If you're interested in working together or just want to chat, feel free to reach out!
                        </p>
                        <a download href='assets/TeoDeLiangRyan_resume.pdf'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className='text-md p-3 my-6 hover:scale-110 ease-in duration-100 bg-gradient-to-r from-purple-800 to-pink-700'>
                                Download Resume
                            </button>
                        </a>
                </div>
                <div className='col-span-1 flex justify-center items-center'>
                    <img 
                        className='rounded-full w-96' 
                        src='assets/personal_pic.jpg' 
                        alt='Personal photo of myself!' 
                    />
                </div>
            </div >
        </div>

    )
}

export default About