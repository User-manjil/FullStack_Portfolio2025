import React from "react";
import { Link, useParams } from "react-router";
import Banner from "./Banner";

const WorkDetail = () => {
  const { id } = useParams();

  // Placeholder dynamic data (replace with backend API later)
  const projects = [
    {
      id: "1",
      title: "Portfolio Website — Clean Personal Branding",
      description: `
        This project focused on creating a minimal yet impactful portfolio experience.
        The goal was to highlight personal work, storytelling, and subtle visual interactions 
        that keep users engaged without overwhelming them.

        The approach involved:
        • Building reusable UI components in React  
        • Establishing a strong visual hierarchy using grids and typography  
        • Creating smooth micro-interactions and scroll-based animations  
        • Ensuring fast performance and responsive design  

        The final result is a fast, aesthetic, and highly customizable website 
        suitable for showcasing creative or development work.
      `,
      details: {
        Client: "TechFlow Inc.",
        Year: "2024",
        Duration: "4 months",
        Role: "Lead Developer",
      },
      images: [
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
        "https://images.unsplash.com/photo-1559027615-8d0396f1df6c",
        "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa",
      ],
    },

    {
      id: "2",
      title: "E-commerce Platform — Modern Shopping Experience",
      description: `
        This case study covers the design and development of a scalable e-commerce platform.
        The focus was on smooth navigation, strong product presentation, 
        and an effortless purchase flow.

        Key highlights:
        • Built a dynamic product filtering and search system  
        • Created reusable card layouts and checkout UI  
        • Developed a dashboard for order tracking and inventory management  
        • Implemented secure authentication and cart persistence  

        The final product is optimized, easy to navigate, and built to handle growth.
      `,
      details: {
        Client: "ShopEase",
        Year: "2023",
        Duration: "6 months",
        Role: "Frontend Developer",
      },
      images: [
        "https://images.unsplash.com/photo-1501556466850-7c7a7e36b3d1",
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
      ],
    },

    {
      id: "3",
      title: "Travel App UI — Exploration Made Simple",
      description: `
        This project aimed to redesign an existing travel booking interface to improve clarity,
        reduce cognitive load, and create an exciting visual journey.
        
        The solution was built with:
        • A card-based discovery layout  
        • Smooth transitions between screens  
        • Contextual suggestions to reduce search friction  
        • Meaningful loading states and micro-interactions  

        The UI now feels lighter, faster, and more immersive for the user.
      `,
      details: {
        Client: "FlyGo Travels",
        Year: "2025",
        Duration: "2 months",
        Role: "UI/UX Designer",
      },
      images: [
        "https://images.unsplash.com/photo-1519681393784-d120267933ba",
        "https://images.unsplash.com/photo-1529070538774-1843cb3265df",
        "https://images.unsplash.com/photo-1500048993953-d23a436266cf",
      ],
    },
  ];

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
      <Banner />

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