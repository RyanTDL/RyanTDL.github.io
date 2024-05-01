import React from 'react'
import Link from '@/node_modules/next/link'

const ProjectItem = ({ title, backgroundImg, tech, projectUrl, desc}) => {
    return (
        <div className='flex justify-center h-[540px] max-w-[530px] min-w-full my-1 shadow-xl shadow-gray-400 rounded-xl cursor-pointer hover:scale-105 ease-in duration-100'>
            <div className='my-0 py-0 min-w-full'>
                <Link href={projectUrl}>
                    <div className=' my-3'>
                        <img src={backgroundImg} alt={title} className='w-full h-[350px] object-cover rounded-t-xl' />

                    </div>
                    <div className='px-8 text-center '>
                        <h6 className='text-1xl text-white tracking-wider text-center '>{title}</h6>
                        <p className='text-[14px] text-center text-gray-200 mb-2 max-w-[485px] ml-6 '>{desc}</p>
                        <p className='pb-2 pt-2 text-white text-center text-[14px] font-semibold max-w-[485px] ml-6'> {tech}</p>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default ProjectItem