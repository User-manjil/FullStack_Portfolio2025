import React from 'react'
import ProjectCard from '../Reusable/ProjectCard'
import TitleSection from '../Reusable/TitleSection'

const Work = () => {
  return (
    <div className='flex flex-col mt-20'>
      <TitleSection/>
     <div className="grid sm:grid-cols-2 gap-5 grid-cols-1  my-10">
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>

      </div>
    </div>
  )
}

export default Work
