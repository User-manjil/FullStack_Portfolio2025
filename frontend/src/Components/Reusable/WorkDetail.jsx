import React from 'react'
import { Link, useParams } from 'react-router'
import Banner from './Banner'

const WorkDetail = () => {
  const { id } = useParams()

  // Example project data (you can expand this later)
  const projects = [
    {
      id: "1",
      title: "Portfolio Website",
      details: {
        Client: "TechFlow Inc.",
        Year: "2024",
        Duration: "4 months",
        Role: "Lead Developer"
      }
    },  
    {
      id: "2",
      title: "E-commerce Platform",
      details: {
        Client: "ShopEase",
        Year: "2023",
        Duration: "6 months",
        Role: "Frontend Developer"
      }
    }
  ]

  // Find project by ID
//   const project = projects.find(p => p.id === id)
  const project = projects.find(p => p.id == 1)

  if (!project) {
    return <div className="text-center mt-20 text-(--text)">Project Not Found</div>
  }

  return (
    <div className='w-full mt-10 text-[var(--text)] max-w-6xl mx-auto px-4'>

      {/* Banner */}
      <Banner />

      {/* Back Button */}
      <div className='my-4 text-[var(--muted2)] font-[Syne] font-bold'>
        <Link to="/work">← Back to Work</Link>
      </div>

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-black font-[Syne] mb-6">
        {project.title}
      </h1>

      {/* Details Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border border-[var(--border)] p-5 rounded-lg">
        
        {Object.entries(project.details).map(([key, value], index) => (
          <div key={index} className='bg-[var(--bg2)] p-4 rounded-md'>
            
            <div className="text-xs text-[var(--muted2)] font-[Syne]">
              {key}
            </div>

            <div className="font-[Syne] font-bold text-[var(--text)] mt-1">
              {value}
            </div>

          </div>
        ))}

      </div>

      <div className="flex">
            

      </div>




    </div>
  )
}

export default WorkDetail