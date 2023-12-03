'use client' // Components are client-side, not server-side

//import Image from "next/image"
import Typewriter from "@/effects/Typewriter"
import VantaBackground from "@/effects/VantaBackground"

const Hero = () => {
    return (
        <div>
            <VantaBackground children={
                <div className="container mx-auto py-32 md:py-44 lg:py-72 text-center">
                    <div className=" bg-black/50">
                        <Typewriter text="  Hi, I am Ryan!!" styling="text-white text-4xl font-bold md:text-6xl lg:text-8xl " typingDelay={100} />
                        <Typewriter text="  Engineer, Developer & Aspiring Entrepreneur" styling="text-white text-2xl font-normal mt-2.5 md:text-4xl lg:text-6xl md:mt-8" typingDelay={100} />
                    </div>
                </div>
            }/>
            
        </div>
    )
}

export default Hero