import React from "react";

const BlogCard = () => {
  return (
    <div
      className="
        overflow-hidden
        flex flex-col w-full 
        group p-4 border-b  
        border-[var(--border2)] 
        hover:bg-[var(--bg2)] 
        relative
        bg-[var(--bg)]

        
      "
    >
        <div className="after:content-['']
        after:absolute
        after:left-0
        after:top-[30%]
        after:w-1
        after:h-1/2
        after:bg-[var(--lime)]

        after:scale-y-0
        after:origin-center
        after:transition-transform
        after:duration-300
        after:transform

        group-hover:after:scale-y-100"></div>
      <div className="flex text-xs text-[var(--lime)]">01</div>

      <div className="flex justify-between">
        <div className="flex flex-col">
          <div className="text-xl font-bold text-[var(--text)]">
            The Art of Meaningful Micro-interactions
          </div>
          <div className="text-sm text-[var(--muted2)]">
            7min read · Apr 2025 · Design
          </div>
        </div>

        {/* Arrow icon */}
        <div
          className="
            flex w-10 h-10 p-2 rounded-full items-center justify-center
            text-[var(--muted2)] border border-[var(--border2)]
            transition-all duration-300 ease-linear

            group-hover:bg-[var(--lime)]
            group-hover:text-black
            group-hover:rotate-45
            group-hover:border-0
          "
        >
          ↗
        </div>
      </div>
    </div>
  );
};

export default BlogCard;