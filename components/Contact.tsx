import { FaLinkedin, FaGithub, FaTelegram } from "@/node_modules/react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Contact = () => {
    return (
        <div className="container mx-auto py-10 md:py-20 lg:py-30 text-center">
            <div>
                <p className="font-bold text-4xl lg:text-6xl">Let's Connect! </p>
                <p className="text-lg lg:text-2xl mx-auto pt-4 lg:pt-8 max-w-4xl">
                    I'm currently looking for Machine Learning or Software Engineering opportunities.
                    If you have a cool project you would like to collaborate on, or just want to have a chat, free feel to reach out!
                </p>
            </div>

            <div className="flex flex-row justify-center gap-10 pt-10 lg:pt-15">
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
    )
}

export default Contact