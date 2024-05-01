import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
    return (
        <div id='projects' className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='uppercase text-5xl tracking-widest font-bold-200 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-500 pb-4'>
                    Projects
                </p>


                <div className='grid md:grid-cols-2 gap-8'>

                    <ProjectCard
                        title='LifeQuest'
                        projectUrl='https://github.com/RyanTDL/NUS-Orbital-2023'
                        backgroundImg={'assets/project_previews/lifequest.png'}
                        desc='LifeQuest is a gamified productivity app, that allows users to track their habits in a engaging manner'
                        tech=' React Native, Firebase & Javascript'
                    />
                    <ProjectCard
                        title='STEER Challo'
                        projectUrl='https://github.com/RyanTDL/steer-mobile-app-1'
                        backgroundImg={'assets/project_previews/steer.png'}
                        desc="STEER Challo is a booking platform, to connect travellers with local homestays & guides within Mukteshwar, India"
                        tech='React Native, Firebase & Typscript'
                    />
                    <ProjectCard
                        title='My Personal Portfolio'
                        projectUrl='https://github.com/RyanTDL/RyanTDL.github.io'
                        backgroundImg={'assets/project_previews/website.png'}
                        desc='My personal website, showcasing my projects, skills and experiences'
                        tech='Next.js, Tailwind CSS & TypeScript'

                    />
                    <ProjectCard
                        title='Pokémon Team Builder'
                        projectUrl='https://github.com/RyanTDL/LFG_Assignment'
                        backgroundImg={'assets/project_previews/pokedex.png'}
                        desc='Pokémon Team Builder allows users to search for Pokémon, and build their own team of 6 Pokémon.'
                        tech='Next.js, Tailwind CSS, TypeScript & PokéAPI'
                    />
                </div>
            </div>
        </div>
    )
}

export default Projects