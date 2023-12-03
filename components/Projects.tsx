import Link from '@/node_modules/next/link';
import Image from "@/node_modules/next/image";
import { FaGithub } from "react-icons/fa6";

interface ProjectCardProps {
    projectLink: string;
    projectName: string;
    projectDescription: string;
    projectTechStack: string;
    projectImage: string;
}

const ProjectCard = ({projectLink, projectName, projectDescription, projectTechStack, projectImage}:ProjectCardProps) => {
    return (
        <div className="flex flex-col max-w-screen-md max md:flex-row lg:flex-row items-center gap-6 container border-2 border-black rounded-3xl shadow-xl hover:scale-110 p-6">
            <div className='w-1/3 flex justify-end'>
                <Image
                    src={`/assets/${projectImage}.jpg`} 
                    alt="Personal photo of myself!" 
                    width= {300} 
                    height={300} 
                    style={{borderRadius: "5%"}}
                />
            </div>
            <div className="flex flex-col w-2/3 gap-4 px-4">
                <p className="font-medium text-xl md:text-3xl">{projectName}</p>
                <p className="text-slate-600 text-base md:text-xl">{projectDescription}</p>
                <div className='flex flex-row gap-3 items-center'>
                    <a className="hover:opacity-50" href={projectLink}>
                        <FaGithub size={30} />
                    </a>
                    <p className="text-slate-900 text-base md:text-xl">{projectTechStack}</p>
                </div>
            </div>
        </div>
    )
}

const Projects = () => {
    return (
        <div id="projects" className="overflow-hidden container mx-auto px-10 py-10 md:py-10 lg:py-10 flex flex-col gap-4 lg:gap-8 justify-center items-center">
            <p className="font-bold text-4xl lg:text-5xl">Projects</p>
            <div className="w-11/12 flex flex-col items-center gap-16">
                <ProjectCard 
                    projectLink="https://github.com/TurtleBot-EG2310-NUS/auto_nav"
                    projectName="Fundamentals of Systems Design"
                    projectDescription="A robotic food delivery system. Developed to autonomously deliver drinks in a restaurant setting."
                    projectTechStack="ROS2, Python, C++, SolidWorks"
                    projectImage="eg2310_project"
                />
                <ProjectCard 
                    projectLink="https://github.com/RyanTDL/NUS-Orbital-2023"
                    projectName="LifeQuest: A Gamified Productivity App"
                    projectDescription="Developed as part of NUS Orbital 2023. LifeQuest aims to help users track their daily habits in a fun and engaging way."
                    projectTechStack="Figma, React Native, Firebase, JavaScript"
                    projectImage="orbital_project"
                />
                <ProjectCard 
                    projectLink="https://github.com/Steer-App-RC4/steer-mobile-app"
                    projectName="The STEER Mobile App"
                    projectDescription="A sharing economy platform to empower homestays in rural communities in Mukteshwar, India, to rent their homes to tourists."
                    projectTechStack="React Native, Firebase, TypeScript"
                    projectImage="steer_app_project"
                />
            </div>
        </div>
    )
}

export default Projects