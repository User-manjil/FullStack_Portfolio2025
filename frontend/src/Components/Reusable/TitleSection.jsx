import React from 'react'

const TitleSection = () => {
  return (
    <div className='w-full mt-10 flex items-end'>
        <div>
        <div className="flex w-full text-(--lime) text-xs font-medium gap-2 font-[poppins]  items-center">
        <div className="flex w-10  h-[1px] bg-(--lime)  "></div> FEATURED WORK
            </div>
        <div className="flex font-[Syne] text-(--text) font-black text-6xl w-1/2 ">Selected Projects</div>

        </div>
      <div className="flex">
         <button className="font-medium border border-(--border2) h-10 px-5 text-(--muted2) hover:text-(--text)">
              START A PROJECT →
            </button>
      </div>
    </div>
  )
}

export default TitleSection
 