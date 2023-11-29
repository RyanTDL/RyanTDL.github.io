import Image from "@/node_modules/next/image"

const About = () => {
    return (
        <div className="overflow-hidden container mx-auto py-10 md:py-10 lg:py-10 flex flex-col gap-4 lg:gap-8">
            <p className="font-bold text-4xl lg:text-5xl text-center">Introducing Me</p>
            <div className="flex flex-row gap-14">
                <div className="w-3/4 my-auto">
                    <p className="text-md lg:text-2xl">
                        Hey there! My name's Ryan, currently a 2nd year student at NUS, double-majoring in
                        <span className="font-bold"> Computer Engineering</span> and <span className="font-bold">the Innovation & Design Programme (iDP). </span>
                        My life is fueled by a deep passion for technology, especially in the realms of 
                        <span className="font-bold"> robotics, machine learning, and software development. </span>
                        <br/> 
                        <br/> 
                        I'm always on the lookout for opportunities to bring innovative ideas to life and develop technology solutions that make a real difference. 
                        If you're interested in collaborating or just want to chat about tech, 
                        <span className="font-bold"> don't hesitate to reach out!</span>
                    </p>
                </div>
                <div className="w-1/4 my-auto">
                    <Image
                        src="/assets/personal_pic.jpg" 
                        alt="Personal photo of myself!" 
                        width= {500} 
                        height={500} 
                        style={{borderRadius: "10%"}}
                    />
                </div>
            </div>

        </div>
    )
}

export default About