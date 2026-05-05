import React from "react";
import { useNavigate } from "react-router";

const ProjectCard = () => {
  const navigate = useNavigate();
  const stack = ["SAAS", "REACT", "CSS"];

  return (
    <div
      onClick={() => navigate("/work/nexus")}
      className="
        w-full sm:w-[300px] md:w-[380px] lg:w-[520px] xl:w-[550px]
        mt-6 flex flex-col cursor-pointer group 
        transition-all duration-300 px-2
      "
    >
      {/* IMAGE / TITLE AREA */}
      <div className="relative h-48 sm:h-52 md:h-56 w-full overflow-hidden rounded-t-2xl">

        {/* Background / Mock Image */}
        <div
          className="
            absolute inset-0 bg-red-900 flex items-center justify-center 
            text-red-500 text-5xl sm:text-6xl font-[Syne] font-black 
            transition-all duration-500 
            group-hover:scale-105 
            group-hover:brightness-75
          "
        >
          NEXUS
        </div>

        {/* Hover Button */}
        <button
          className="
            absolute bottom-4 left-4 
            bg-[var(--lime)] text-black font-medium text-xs sm:text-sm px-4 py-2 rounded-md 
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
        <div className="flex px-4 gap-2 mt-3 flex-wrap">
          {stack.map((el) => (
            <div
              key={el}
              className="
                px-3 py-1 text-xs border border-[var(--border2)] 
                text-[var(--muted2)] rounded-full 
                transition-all duration-300
                group-hover:text-[var(--lime)]
              "
            >
              {el}
            </div>
          ))}
        </div>

        {/* TITLE + DESCRIPTION */}
        <div className="flex flex-col w-full px-4 mt-3">
          <h1 className="font-bold text-xl sm:text-2xl text-[var(--text)] font-[Syne]">
            Nexus Dashboard
          </h1>
          <p className="text-[var(--muted)] text-sm sm:text-base mt-1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima ab
            alias quibusdam!
          </p>
        </div>

        {/* FOOTER */}
        <div
          className="
            flex text-[var(--muted2)] mt-5 py-3 
            border-t border-[var(--border)] px-4 justify-between
            transition-all duration-300 group-hover:text-[var(--lime)]
          "
        >
          <div className="text-xs flex items-center gap-1">
            VIEW CASE STUDY
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </div>
          <div className="text-xs">2024</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;