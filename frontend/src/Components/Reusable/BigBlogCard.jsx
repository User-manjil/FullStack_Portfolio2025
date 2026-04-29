import React from 'react'

const BigBlogCard = () => {
  return (
    <div className='flex flex-col border relative group border-(--border) px-10 py-10 hover:bg-(--bg2)'>
      <div className="after:content-['']
        after:absolute
        after:left-0
        after:top-[30%]
        after:w-1
        after:h-1/2
        after:bg-[var(--lime)]

        after:scale-y-0
        after:origin-center
        after:transition-transform
        after:duration-300
        after:transform

        group-hover:after:scale-y-100"></div>
      <div className="flex text-(--lime) group-hover:transform  group-hover:translate-x-1.5 duration-300 font-[Syne]">Design</div>
      <div className="flex justify-between">

        <div className="flex flex-col group-hover:transform  group-hover:translate-x-1.5 duration-300"> 
            <div className="flex text-(--text) font-[Syne] text-xl font-bold  ">The Art of Meaningful Micro-interactions</div>
            <div className="flex text-(--muted2) text-xs">Micro-interactions are the small moments that make users feel like a product understands them.</div>
            <div className="flex text-(--muted2)  text-xs">7min  April 2026</div>
        </div>
        <div className="flex group-hover:bg-(--lime) group-hover:text-(--bg2) px-10 py-2 h-fit text-(--muted2) border border-(--border) duration-300 font-medium">READ ARTICLE</div>
      </div>
    </div>
  )
}

export default BigBlogCard
