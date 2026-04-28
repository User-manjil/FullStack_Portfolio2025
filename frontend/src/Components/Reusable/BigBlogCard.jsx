import React from 'react'

const BigBlogCard = () => {
  return (
    <div className='flex flex-col border group border-(--muted2) px-10 py-10 hover:bg-(--bg2)'>
      <div className="flex text-(--lime) group-hover:transform  group-hover:translate-x-1.5 duration-300 font-[Syne]">Design</div>
      <div className="flex justify-between">

        <div className="flex flex-col group-hover:transform  group-hover:translate-x-1.5 duration-300"> 
            <div className="flex text-(--text) font-[Syne] text-xl font-bold  ">The Art of Meaningful Micro-interactions</div>
            <div className="flex text-(--muted2) text-xs">Micro-interactions are the small moments that make users feel like a product understands them.</div>
            <div className="flex text-(--muted2)  text-xs">7min  April 2026</div>
        </div>
        <div className="flex group-hover:bg-(--lime) group-hover:text-(--bg2) px-10 py-2 h-fit text-(--muted2) border duration-300 font-medium">READ ARTICLE</div>
      </div>
    </div>
  )
}

export default BigBlogCard
