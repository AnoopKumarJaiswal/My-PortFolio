import React from "react"
import { FaLinkedin, FaInstagram, FaTwitter , FaFacebook, FaSnapchat } from "react-icons/fa"

const Footer = () =>{
    // smooth scrool Function
    const handelScroll = (sectionId) =>{
       const section = document.getElementById(sectionId)
       if(section)
       {
        section.scrollIntoView({behavior : "smooth"})
       }
    }
    return (
        <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
            <div className="container mx-auto  text-center">
                <h2 className="text-xl font-semibold text-purple-500">
                    Anoop Kumar Jaiswal
                </h2>

                {/* NAvigation Links */}
                <nav className=" flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
                    {[
                        {name : "About" , id : "about"},
                        {name : "Skills" , id : "skills"},
                        {name : "Project" , id : "work"},
                        {name : "Education" , id : "education"},
                    ].map((item,index) =>(
                        <button 
                        key={index}
                        onClick={() =>handelScroll(item.id)}
                        className="hover:text-purple-500 text-sm sm:text-base my-1"
                        >
                         {item.name}
                        </button>
                    ))}
                </nav>
                
                {/* Social Media Icon*/}
                <div className="flex flex-wrap justify-center space-x-4 mt-6">
                    {[
                        {icon : <FaInstagram />, link :"https://www.youtube.com/watch?v=ypSc8HEurGQ&t=10371s"},
                        {icon : <FaFacebook />, link :"https://www.youtube.com/watch?v=ypSc8HEurGQ&t=10371s"},
                        {icon : <FaSnapchat />, link :"https://www.youtube.com/watch?v=ypSc8HEurGQ&t=10371s"},
                        {icon : <FaLinkedin />, link :"https://www.youtube.com/watch?v=ypSc8HEurGQ&t=10371s"}
                    ].map((item, index) =>(
                        <a 
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110">
                            {item.icon}
                        </a>
                    ))}
                </div>
                {/* CopyRight Text */}
                <p className="text-sm text-gray-400 mt-6">
                    @ 2025 Anoop Kumar Jaiswal. All right reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer