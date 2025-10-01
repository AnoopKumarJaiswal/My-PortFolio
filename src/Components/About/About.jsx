import React from "react";
import { Typewriter } from 'react-simple-typewriter'
import Tilt from "react-parallax-tilt"
import ProfileImage from "../../assets/Profile.png"

const About = () =>{
   return (
    <section 
    id="about"
    className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
        <div className="flex flex-col-reverse md:flex-row justify-between items-center">
            {/* Left side */}
            <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">

            {/* Greeting */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
                Hi, I am
            </h1>
            {/* Name */}
            <h2 className="text-4xl sm:5xl md:text-6xl font-bold text-white mb-4 leading-tight">
                Anoop Jaiswal
            </h2>
            {/* skills Heading with typing Effect */}
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
                <span className="text-white">
                     I am a 
                </span>
                <Typewriter
                    words={[' FullStack Developer', ' Coder', ' UI/UX Designer', ' App Developer']}
                    loop
                    cursor
                    cursorStyle="_"
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={2000}
                    />
            </h3>
            {/* About me paragraph*/}
            <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
             I am a Full-Stack Developer specializing in the MERN stack. I love building responsive, user-friendly applications and continuously learning new technologies to improve my skills. My goal is to create digital products that are both functional and visually engaging.  
            </p>
            {/* Resume Button */}
            <a 
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
                background : "linear-gradient(90deg, #8245ec, #a855f7)",
                boxShadow : '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
            >
                DOWNLOAD CV
            </a>
            </div>
  
            {/* Right side */}
            <div className="md:w-1/2 flex justify-center md:justify-end">
            <Tilt 
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700  rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
            >
            <img className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)] cursor-pointer" src={ProfileImage}alt="Anoop" />
            </Tilt>

            </div>
      </div>

    </section>
)
}

export default About