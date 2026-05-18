import React from "react";
import Marquee from "../Reusable/Marquee";
import TitleSection from "../Reusable/TitleSection";
import ProjectCard from "../Reusable/ProjectCard";
import BlogCard from "../Reusable/BlogCard";
import { Link } from "react-router";
import { blogPosts } from "../Reusable/assets";
import { projectsData } from "../Reusable/assets";
const Home = () => {
  const stats = [
    { value: "10+", text: "Projects" },
    { value: "2", text: "yrs experience" },
    { value: "98%", text: "Satisfaction" },
  ];

  return (
    <div className="flex flex-col w-full">

      {/* HERO SECTION */}
      <div className="hero-grid-bg bg-[var(--bg)] relative mb-10 overflow-hidden w-full pt-32 pb-10  mx-auto px-4">
        <div className="pointer-events-none absolute inset-0 hero-grid-layer" aria-hidden="true"></div>
        <div className="pointer-events-none absolute inset-0 hero-grid-glow" aria-hidden="true"></div>
        <div className="relative z-10 max-w-6xl mx-auto">

        {/* STATUS BADGE */}
        <div className="flex font-[Bricolage Grotesque] text-xs px-3 py-1 rounded-full items-center gap-2 border border-[var(--border)] text-[var(--muted2)] w-fit">
          <div className="w-2 h-2 bg-[var(--lime)] rounded-full"></div>
          OPEN TO NEW WORK
        </div>

        {/* RESPONSIVE TITLE */}
        <div className="flex flex-col font-[Syne] text-[var(--text)] mt-6 leading-tight">
          <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black">
            BUILDING
          </span>

          <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-transparent [-webkit-text-stroke:2px_white]">
            DIGITAL
          </span>

          <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[var(--lime)]">
            WORLDS.
          </span>
        </div>

        {/* HERO SUBTEXT + BUTTONS */}
        <div className="flex flex-col sm:flex-row justify-between py-8 gap-6 sm:gap-0">

          {/* BIO */}
          <div className="flex w-full sm:w-1/2 text-base sm:text-lg md:text-xl">
            <p className="text-[var(--muted2)] leading-relaxed">
              I'm{" "}
              <strong className="text-[var(--text)] font-[Poppins]">
                Manjil Aryal
              </strong>{" "}
              — a web developer who crafts fast, functional, and visually
              striking digital experiences.
            </p>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row sm:justify-end mx-auto my-5 gap-10 sm:gap-4">
            <Link to="/work">
              <button className="bg-[var(--lime)] flex  group cursor-pointer text-black font-medium px-5 py-2 h-10">
                VIEW MY WORK <div className="group-hover:translate-x-1 duration-300"> →</div>
              </button>
            </Link>

            <Link to="/contact">
              <button className="font-medium flex group border border-[var(--border)] hover:border-white hover:text-[var(--text)] duration-300 px-5 py-2 h-10 text-[var(--muted2)]">
                START A PROJECT <div className="group-hover:translate-x-1 duration-300"> →</div>
              </button>
            </Link>
          </div>

        </div>
        </div>
      </div>

      <Marquee />

      {/* STATS */}
      <section className="flex justify-center mx-auto my-20 p-4 max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((el, i) => (
            <div
              key={i}
              className="flex flex-col items-center border border-[var(--border)] hover:bg-[var(--bg2)] duration-200 rounded-md py-8 px-14 font-[Syne]"
            >
              <span className="text-5xl md:text-6xl font-black text-[var(--lime)]">
                {el.value}
              </span>
              <span className="text-sm text-[var(--muted2)] font-[Poppins]">
                {el.text}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="px-4 max-w-6xl mx-auto">
        <TitleSection
          subTitle="FEATURED WORK"
          bigTitle="SELECTED PROJECTS"
          buttonContent="ALL PROJECTS"
          hasBtn={true}
          link="/work"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-10">
        {projectsData.map((el)=>{
          if(el.id%2 == 0){
            return <div><Link to={`/work/${el.id}`}><ProjectCard heading={el.title.slice(0,9)} subTitle={el.title}  subheading={el.description} /></Link></div>
          }
        })}
        
         
        </div>
      </section>

      {/* BLOG SECTION */}
      <section className="px-4 max-w-6xl mx-auto">
        <TitleSection
          subTitle="FROM THE BLOG"
          bigTitle="Thoughts & Insights"
          buttonContent="ALL ARTICLES"
          hasBtn={true}
          link="/blog"
        />

        <div className="flex mt-10 flex-col gap-0 rounded-2xl border border-[var(--border2)]">
         {blogPosts.map((el,index)=>{
            return <div><Link key={index} to={`/blog/${el.id}`}><BlogCard heading={el.title} index={index +1} readtime={el.readTime} /></Link></div>
         })}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="mt-32 mb-32 px-4 text-center max-w-6xl mx-auto">

        <div className="flex justify-center items-center text-[var(--lime)] text-xs font-medium font-[Poppins] gap-2">
          <div className="w-10 h-[1px] bg-[var(--lime)]"></div>
          LET'S BUILD TOGETHER
        </div>

        <h2 className="text-[var(--text)] font-[Syne] font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl mt-4">
          Got an <span className="text-[var(--lime)]">idea?</span>  
          <br className="sm:hidden" />  
          Let's make it real.
        </h2>

        <p className="text-[var(--muted2)] mt-6 max-w-xl mx-auto text-base sm:text-lg">
          Whether it's a startup MVP, a rebrand, or a full web app — I'm ready to build something remarkable.
        </p>

        <div className="mt-10">
          <Link to="/contact">
            <button className="bg-[var(--lime)] text-black px-8 py-4 font-medium">
              Start a Conversation
            </button>
          </Link>
        </div>

        <div className="flex justify-center mt-10">
          <p className="text-[var(--text)] font-[Syne] text-2xl sm:text-4xl font-bold relative cursor-pointer hover:text-[var(--lime)] after:block after:w-full after:h-1 after:bg-[var(--lime)] after:absolute after:left-0 after:-bottom-1 w-fit">
            manjil.dev@gmail.com
          </p>
        </div>
      </section>

    </div>
  );
};

export default Home;
