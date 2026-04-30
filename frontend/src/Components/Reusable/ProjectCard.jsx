import React from "react";
import { useNavigate } from "react-router";


const ProjectCard = () => {
  
  const stack = ["SAAS", "REACT", "CSS"];

 

  return (
    <div
      
      className="
         w-[300px]  lg:w-[550px]  mt-5 flex flex-col cursor-pointer group  group-hover:mt-5
        transition-all duration-300
      "
    >
      
      {/* IMAGE / TITLE AREA */}
      <div className="relative h-52 w-full overflow-hidden rounded-t-2xl">
        
        {/* Background with zoom + vignette on hover */}
        <div
          className="
            absolute inset-0 bg-red-900 flex items-center justify-center 
            text-red-500 text-6xl font-[Syne] font-black 
            transition-all duration-500 
            group-hover:scale-105 
            group-hover:brightness-75
            group-hover:shadow-inner
          "
        >
          NEXUS
        </div>

        {/* Button visible on hover */}
        <button
          className="
            absolute bottom-5 left-5 
            bg-[var(--lime)] text-black font-medium text-xs px-4 py-2 rounded-md 
            opacity-0 group-hover:opacity-100 
            transition-all duration-300
          "
        >
          VIEW CASE STUDY
        </button>
      </div>

      {/* DETAILS */}
      <div className="flex flex-col bg-[var(--bg2)]">

        {/* STACK TAGS */}
        <div className="flex px-4 gap-2 mt-3">
          {stack.map((el) => (
            <div
              key={el}
              className="
                px-4 py-1 text-xs border border-[var(--border2)] 
                text-[var(--muted2)] rounded-full group-hover:text-(--lime)
              "
            >
              {el}
            </div>
          ))}
        </div>

        {/* TITLE + DESCRIPTION */}
        <div className="flex flex-col w-full px-4 mt-3">
          <h1 className="font-bold text-2xl text-[var(--text)] font-[Syne]">
            Nexus Dashboard
          </h1>
          <p className="text-[var(--muted)]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima ab
            alias quibusdam!
          </p>
        </div>

        {/* FOOTER */}
        <div
          className="
            flex text-[var(--muted2)] mt-5 py-3 
            border-t border-[var(--border)] px-4 justify-between
            group-hover:text-[var(--lime)] transition-all
          "
        >
          <div className="text-xs">VIEW CASE STUDY <span className=" transform group-hover:translate-4">→</span></div>
          <div className="text-xs">2024</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;