import React from 'react'
import { FaLinkedin, FaGithub, FaTelegram} from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";


const Contact = () => {

    return (
        <div id='contact' className='w-full lg:h-screen p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <p className='uppercase text-5xl tracking-widest font-bold-200 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-500 pb-4'>
                    Contact
                </p>

                <div>
                    <p className="text-lg lg:text-2xl pt-4 lg:pt-8 max-w-4xl">
                        I'm currently looking for any Software Engineering or Machine Learning opportunities.
                        If you have a cool project you would like to collaborate on, or just want to have a chat, free feel to reach out!
                    </p>
                </div>

                <div className="flex flex-row justify-center gap-10 pt-20 lg:pt-15">
                <a className="hover:opacity-50" href="https://linkedin.com/in/ryan-teo/"> 
                    <FaLinkedin size={50} />
                </a>
                <a className="hover:opacity-50" href="https://github.com/RyanTDL">
                    <FaGithub size={50} />
                </a>
                <a className="hover:opacity-50" href="https://t.me/tdl_ryan"> 
                    <FaTelegram size={50} />
                </a>
                <a className="hover:opacity-50" href="mailto:teodeliangryan@u.nus.edu">
                    <IoMdMail size={50} />
                </a>
            </div>


            </div>
        </div>
    )
}

export default Contact