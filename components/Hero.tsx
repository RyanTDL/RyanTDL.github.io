'use client' // Components are client-side, not server-side

//import Image from "next/image"
import Typewriter from "@/effects/Typewriter"

const Hero = () => {
    return (
        <div>
            <div className="container mx-auto py-32 md:py-60 lg:py-72 text-center border-4 border-cyan-500">
                <Typewriter text="  Hi, I am Ryan!!" styling="text-4xl font-bold md:text-6xl" typingDelay={100} />
                <Typewriter text="  Engineer, Developer & Aspiring Entrepreneur" styling="text-xl font-normal mt-2.5 md:text-4xl md:mt-8" typingDelay={100} />
            </div>
        </div>
    )
}

export default Hero