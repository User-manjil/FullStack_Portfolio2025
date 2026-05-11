import React from "react";

const BlogCard = (props) => {
  return (
    <div
      className="
        overflow-hidden
        flex flex-col w-full 
        group p-4 md:p-6 border-b  
        border-[var(--border2)] 
        hover:bg-[var(--bg2)] 
        relative
        bg-[var(--bg)]
      "
    >
      {/* Left lime bar animation */}
      <div
        className="
        after:content-['']
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
        group-hover:after:scale-y-100
        "
      ></div>

      <div className="flex text-xs md:text-sm text-[var(--lime)] group-hover:translate-x-1.5 duration-300">
       {props.index}
      </div>

      {/* Content Wrapper */}
      <div className="flex justify-between gap-4 items-start">
        {/* Text Section */}
        <div className="flex flex-col max-w-[80%]">
          <div
            className="
              text-lg md:text-xl font-bold 
              group-hover:translate-x-1.5 duration-300 
              font-[Syne] text-[var(--text)]
            "
          >
            {props.heading}
          </div>

          <div
            className="
              text-xs md:text-sm 
              group-hover:translate-x-1.5 duration-300 
              text-[var(--muted2)]
              mt-1
            "
          >
            {props.readtime} · Apr 2025 · Design
          </div>
        </div>

        {/* Arrow icon */}
        <div
          className="
            flex w-8 h-8 md:w-10 md:h-10 p-2 
            rounded-full items-center justify-center
            text-[var(--muted2)] border border-[var(--border2)]
            transition-all duration-300 ease-linear
            shrink-0

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