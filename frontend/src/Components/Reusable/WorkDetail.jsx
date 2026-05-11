import React from "react";
import { Link, useParams } from "react-router";
import Banner from "./Banner";
import { projectsData } from "./assets";
const WorkDetail = () => {
  const { id } = useParams();
  const projects = projectsData;
  // Placeholder dynamic data (replace with backend API later)
  

  // Find selected project
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="text-center mt-20 text-[var(--text)] font-[Syne] text-xl">
        Project Not Found
      </div>
    );
  }

  return (
    <div className="w-full mt-10 text-[var(--text)] max-w-6xl mx-auto px-4">

      {/* Banner */}
      <Banner title={project.title} subTitle={project.title.slice(0,8)} />

      {/* Back */}
      <div className="my-4 text-[var(--muted2)] font-[Syne] font-bold">
        <Link to="/work">← Back to Work</Link>
      </div>

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-black font-[Syne] mb-4">
        {project.title}
      </h1>

      {/* Details Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border border-[var(--border)] p-5 rounded-lg">
        {Object.entries(project.details).map(([key, value], index) => (
          <div key={index} className="bg-[var(--bg2)] p-4 rounded-md">
            <div className="text-xs text-[var(--muted2)] font-[Syne] uppercase tracking-wide">
              {key}
            </div>
            <div className="font-[Syne] font-bold text-[var(--text)] mt-1">
              {value}
            </div>
          </div>
        ))}
      </div>

      {/* Description */}
      <div className="mt-10 font-[Poppins] text-lg leading-relaxed whitespace-pre-line">
        {project.description}
      </div>

      {/* Image Gallery */}
      <div className="mt-10 grid md:grid-cols-2 gap-6">
        {project.images.map((img, index) => (
          <div key={index} className="w-full overflow-hidden rounded-lg">
            <img
              src={img}
              alt={`project-${index}`}
              className="w-full h-auto rounded-lg border border-[var(--border)]
              hover:scale-105 transition-all duration-500 object-cover"
              onError={(e) => (e.target.src = "https://via.placeholder.com/800")}
            />
          </div>
        ))}
      </div>

      <div className="h-20" />
    </div>
  );
};

export default WorkDetail;