import React, { useState } from 'react'
import ProjectCard from '../Reusable/ProjectCard'
import TitleSection from '../Reusable/TitleSection'
import { Link } from 'react-router'

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const filters = ['All', 'SAAS', 'Ecommerce', 'WEB APPS']

  return (
    <div className='flex flex-col mt-12 sm:mt-16 lg:mt-20 px-4 sm:px-6 lg:px-0'>

      {/* Title Section */}
      <TitleSection subTitle="PORTFOLIO" bigTitle="Selected Work" hasBtn={false} />

      {/* Subtitle paragraph */}
      <p className='text-(--muted2) text-sm sm:text-base mt-2 max-w-xl leading-relaxed'>
        A curated collection of projects spanning web apps, e-commerce, marketing sites, and experimental interfaces.
      </p>

      {/* Filter Pills */}
      <div className="flex flex-wrap gap-2 mt-5">
        {filters.map((el, index) => (
          <button
            key={index}
            onClick={() => setActiveFilter(el)}
            className={`text-(--muted2) border text-xs rounded-full px-4 py-1.5 transition-all duration-200
              ${activeFilter === el
                ? 'border-(--lime) text-(--lime) bg-(--lime)/10'
                : 'border-(--border) hover:border-(--text) hover:text-(--text)'
              }`}
          >
            {el}
          </button>
        ))}
      </div>

      {/* Divider */}
      <div className="flex mt-5 w-full h-px bg-(--border)" />

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-5 my-8 sm:my-10">
        <Link to={'/work/SAAS'} className="block w-full">
          <ProjectCard />
        </Link>
        <Link to={'/work/SAAS'} className="block w-full">
          <ProjectCard />
        </Link>
        <Link to={'/work/SAAS'} className="block w-full">
          <ProjectCard />
        </Link>
        <Link to={'/work/SAAS'} className="block w-full">
          <ProjectCard />
        </Link>
      </div>

    </div>
  )
}

export default Work