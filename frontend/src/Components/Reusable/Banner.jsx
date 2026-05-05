import React from "react";
import { useParams } from "react-router";

const Banner = () => {
  const { id } = useParams();
  const techStack = ["SAAS", "REACT", "TYPESCRIPT", "GSAP"];

  return (
    <div className="w-full">
      <div className="relative flex flex-col h-[350px] md:h-[420px] p-1 md:p-12 bg-gradient-to-t from-green-800 to-green-900 overflow-hidden">

        {/* Tech Tags */}
        <div className="flex flex-col md:flex-row gap-2 z-20">
          {techStack.map((el, index) => (
            <div
              key={index}
              className="border border-[var(--border)] rounded-xl text-[var(--muted2)] text-xs font-normal px-3 py-1 bg-black/20 backdrop-blur-sm"
            >
              {el}
            </div>
          ))}
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl z-20 mt-4 font-black font-[Syne] text-white">
          SAAS DASHBOARD
        </h1>

        {/* Giant Background Word */}
        <h1
          className="
          absolute 
          font-black font-[Syne]
          text-green-700
          text-opacity-20
          select-none
          whitespace-nowrap
          tracking-tighter
          z-10
          pointer-events-none
          left-1/2 -translate-x-1/2
          top-10 md:top-0
          text-[90px] 
          md:text-[180px] 
          lg:text-[220px]
        "
        >
          SAAS
        </h1>
      </div>
    </div>
  );
};

export default Banner;