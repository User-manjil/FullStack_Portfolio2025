import React from "react";
import { Link } from "react-router";

const TitleSection = (props) => {
  return (
    <div className="
      w-full mt-10 
      flex flex-col sm:flex-row 
      justify-between sm:items-end 
      gap-5 sm:gap-0
    ">
      
      {/* Left Side Content */}
      <div>
        {/* Subtitle */}
        <div className="flex text-(--lime) text-xs sm:text-sm font-medium gap-2 font-[poppins] items-center">
          <div className="w-8 sm:w-10 h-[1px] bg-(--lime)"></div>
          {props.subTitle}
        </div>

        {/* Title */}
        <div className="
          font-[Syne] text-(--text) font-black 
          text-2xl sm:text-4xl md:text-5xl lg:text-6xl
        ">
          {props.bigTitle}
        </div>
      </div>

      {/* Right Side Button */}
      {props.hasBtn ? (
        <div className="flex sm:justify-end">
          <Link to={props.link}>
            <button
              className="
                font-medium border gap-2 group 
                border-(--border2) flex items-center 
                py-2 px-5 h-10 text-(--muted2) hover:text-(--text)
                text-xs sm:text-sm
              "
            >
              {props.buttonContent}
              <span className="duration-300 group-hover:translate-x-0.5">→</span>
            </button>
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default TitleSection;