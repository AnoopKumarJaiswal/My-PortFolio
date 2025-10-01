import React, { useState } from "react";
import { projects } from "../../Constant";

const Work = () =>{
    const [selectProject, setselectProject] = useState(null)
    const handleOpenModel= (project) =>{
       setselectProject(project)
    }

    const handleCloseModel = (project) =>{
        setselectProject(null)
    }
   return (
    <section
    id="work"
    className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
        {/* Section Title */}
        <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white">
                PROJECTS
            </h2>
            <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
            <p className="text-gray-400 mt-4 text-lg font-semibold">A showcase of the projects I have worked on, highliting my skills</p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            {
                projects.map((project) =>(
                    <div
                    key={project.id}
                    onClick={() => handleOpenModel(project)}
                    className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50  hover:-translate-y-2 transition-transform duration-300"
                    >
                     <div className="p-4">
                        <img src={project.image} alt={project.title} className="w-full h-48 object-cover  rounded-xl" />
                     </div>
                     <div className="p-6">
                        <h3 className=" text-2xl font-bold text-white mb-2">
                         {project.title}
                        </h3>
                         <p className="text-gray-500 mb-4 pt-5 line-clamp-3">
                            {project.description}
                        </p>
                        <div className="mb-4">
                          {project.tags.map((tag,index) =>(
                            <span 
                            key={index}
                            className="inline-block  bg-[#251f38] text-xs font-semibold text-purple-500 rounded-fill px-2 py-1 mr-2 mb-2" >
                               {tag}
                            </span>
                          ))}
                        </div>
                     </div>
                    </div>
                ))}
        </div>

        {/* Model container */}
        {selectProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
                <div className="bg-gray-900 rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl overflow-hidden relative">
                    <div className="flex justify-end p-4">
                        <button
                        onClick={handleCloseModel}
                        className="text-white text-3xl font-bold hover:text-purple-500"
                        >
                         &times;
                        </button>
                    </div>
                    <div className="flex flex-col">
                        <div className="w-full flex justify-center bg-gray-900 px-4">
                            <img src={selectProject.image} alt={selectProject.title} className="lg:w-full w-[95%] object-contain rounded-xl shadow-2xl"/>
                        </div>
                        <div className="lg:p-8 p-6">
                          <h3 className="lg:text-3xl font-bold text-white mb-4 text-md">
                            {selectProject.title}
                         </h3>
                         <p className="text-gray-400 mb-6 lg:text-base text-xs">
                            {selectProject.description}
                         </p>
                         <div className="flex flex-wrap gap-2 mb-6">
                            {selectProject.tags.map((tag,index) =>(
                             <span 
                            key={index}
                            className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-fill px-2 py-1" >
                               {tag}
                            </span>
                            ))}
                         </div>
                         <div className="flex gap-4">
                            <a href={selectProject.github} target="_blank" rel="noopener noreferrer" 
                            className="w-1/2 bg-gray-800 hover:bg-purple-800 text-gray-400 lg:px-6 lg:py-2 px-2 py-1 ronded-xl lg:text-xl text-sm font-semibold text-center">
                                View Code
                            </a>

                             <a href={selectProject.webapp} target="_blank" rel="noopener noreferrer" 
                            className="w-1/2 bg-purple-600 hover:bg-purple-800 text-gray-400 lg:px-6 lg:py-2 px-2 py-1 ronded-xl lg:text-xl text-sm font-semibold text-center">
                                View Live
                            </a>
                         </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </section>
   )
}

export default Work