import React from 'react'
import { useParams } from 'react-router'

const Banner = () => {
    const {id} = useParams();
    const techStack = ['SAAS', 'REACT', 'TYPESCRIPT','GSAP']
  return (
    <div className='w-full  '>
      
        <div className="flex flex-col relative bg-linear-to-t h-70 p-10 from-green-800 to-green-900 ">
            <div className="flex gap-1">
        {techStack.map((el,index)=>{return <div key={index} className='border z-10 border-(--border) rounded-xl text-(--muted2) text-xs font-normal px-2 py-0.5'>{el}</div>})}
      </div>
           <h1 className='text-3xl   z-20   font-black font-[Syne]'>SAAS DASHBOARD</h1>
           <h1 className='text-[200px] left-[10%] absolute z-1 font-black mx-auto  text-green-700 text-(--muted2) font-[Syne]'> SAAS </h1>
        </div>
      

      
      
      

    </div>
  )
}

export default Banner
