import React from "react";
import Marquee from "../Reusable/Marquee";
import TitleSection from "../Reusable/TitleSection";
import ProjectCard from "../Reusable/ProjectCard";
import BlogCard from "../Reusable/BlogCard";

const Home = () => {
  const stats = [
    { value:' 40+', text: "Projects" },
    { value: 2, text: "yrs experience" },
    { value: "98%", text: "Satisfaction" },
  ];

  return (
    <div className="flex-col w-full flex ">
      <div className="bg-(--bg) w-full h-fit pt-40 pb-5 max-w-6xl  mb-15">
        
        <div className="flex font-[Bricolage Grotesque] text-[12px] px-3 py-1 rounded-full items-center gap-2 border border-(--border) font-medium text-(--muted2) tracking-wider w-fit">
          <div className="flex bg-green-400 w-2 h-2 rounded-full"></div>
          OPEN TO NEW WORK
        </div>

        {/* Title */}
        <div className="flex flex-col font-[Syne] text-(--text) text-[120px] leading-[120px] font-black max-w-6xl">
          <span>BUILDING</span>

          <span className="text-transparent [-webkit-text-stroke:2px_white]">
            DIGITAL
          </span>

          <span className="text-(--lime)">WORLDS.</span>
        </div>

        <div className="flex justify-between py-5 items-center">
          <div className="flex w-1/2 text-xl">
            <p className="text-(--muted2)">
              I'm <strong className="text-(--text) font-[poppins]">Manjil Aryal</strong> — a web
              developer who crafts fast, functional, and visually striking
              digital experiences that people actually remember.
            </p>
          </div>

          <div className="flex gap-5">
            <button className="bg-(--lime) font-medium px-5 h-10">
              VIEW MY WORK <span className="rotate-x-6">→</span>
            </button>
            <button className="font-medium border border-(--border) duration-300 hover:-translate-y-1 hover:border-white h-10 px-5 text-(--muted2) hover:text-(--text)">
              START A PROJECT →
            </button>
          </div>
        </div>
      </div>

      <Marquee   />

      {/* Stats Section */}
      <section className="flex items-center justify-center mx-auto my-40 p-4">
        <div className="flex items-center justify-center mx-auto">
          {stats.map((el, i) => (
            <div
              key={i}
              className="flex flex-col border border-(--border)  hover:bg-(--bg2) ease-(--ease-smooth) duration-75 rounded-sm py-10 px-20 font-[Syne] font-black items-center text-7xl text-(--lime)"
            >
              {el.value}
              <span className="text-sm text-(--muted2) font-medium font-[poppins]">{el.text}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        {/* // featured work section */}
      <TitleSection  subTitle='FEATURED WORK' bigTitle="SELECTED PROJECTS" buttonContent="ALL PROJECTS" hasBtn={true} link='/work'/>
      <div className="grid sm:grid-cols-2 grid-cols-1  my-10">
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>

      </div>

      </section>

      
    

      <section>
          <TitleSection subTitle="FROME THE BLOG" bigTitle="Thoughts &
Insights"  buttonContent="ALL ARTICLES" hasBtn={true} link='/blog' />
          <div className="flex mt-10 flex-col gap-0 rounded-2xl border border-(--border2)">  
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
          </div>
      </section>
      <section className=" mt-50 mb-40 items-center justify-center">
         <div className="flex w-full text-center justify-center text-(--lime) text-xs font-medium gap-2 font-[poppins]  items-center">
        <div className="flex w-10  h-[1px] bg-(--lime)  "></div> LET'S BUILD TOGETHER
            </div>
            <div className=" text-(--text) font-[Syne] font-black text-8xl text-center">
              Got an <span className="text-(--lime)">idea?</span>
              Let's make it real.
            </div>
            <div className="flex text-(--muted2) justify-center text-center w-full  mt-10 items-center">
              Whether it's a startup MVP, a rebrand, or a complex web app — I'm ready to build something remarkable.
            </div>
            <div className="flex w-full  justify-center mt-10  items-center">
              <button className="bg-(--lime) text-(--bg) px-8 py-4 font-medium">Start a Conversation </button>
            </div>
            <div className="flex mx-auto text-(--text) font-[Syne] relative w-fit  text-center justify-center mt-10 hover:text-(--lime) cursor-pointer  ">
             
              <p className=" w-fit after:w-full font-bold text-4xl after:content-[''] after:h-1 after:bg-(--lime) after:absolute after:left-0 after:bottom-[0]">
                manjil.dev@gmail.com
              </p>
            </div>
      </section >
    </div>
  );
};

export default Home;