'use client' // Components are client-side, not server-side
import Image from "@/node_modules/next/image"

//import Image from "next/image"
import Typewriter from "@/effects/Typewriter"
import VantaBackground from "@/effects/VantaBackground"

const Hero = () => {
    return (
        <div className="">
            <VantaBackground children={
                <div className="container mx-auto py-20 md:py-20 lg:py-32 flex flex-row justify-around items-center bg-black/75">
                    <div className="w-2/3">
                        <p className="text-white text-2xl font-bold md:text-4xl lg:text-6xl" >Hi, I am Ryan Teo</p>
                        <p className="text-gray-300 text-xl font-bold md:text-xl lg:text-xl mt-8 w-3/4" >
                            I am a Year 2 NUS Computer Engineering, with a 2nd major in the Innovation & Design Programme.
                            I am always on the lookout for opportunities to bring innovative ideas to life and develop technology solutions that make a real difference.
                            If you are interested in collaborating or just want to chat, don't hesitate to reach out!
                        </p>
                    </div>
                    <Image
                        src="/assets/personal_pic.jpg" 
                        alt="Personal photo of myself!" 
                        width= {300} 
                        height={300} 
                        style={{borderRadius: "50%"}}
                    />
                </div>
            }/>
            
        </div>
    )
}

export default Hero