import React from 'react'
import {Link} from 'react-router'
const TitleSection = (props) => {
  
  return (
    <div className='w-full mt-10 flex justify-between items-end'>
        <div>
        <div className="flex w-full text-(--lime) text-xs font-medium gap-2 font-[poppins]  items-center">
        <div className="flex w-10  h-[1px] bg-(--lime)  "></div> {props.subTitle}
            </div>
        <div className="flex font-[Syne] text-(--text) font-black text-6xl w-1/2 ">{props.bigTitle}</div>

        </div>
        {props.hasBtn ?  (
      <div className="flex  ">
        <Link to={props.link}>
           <button  className="font-medium border  border-(--border2) px-5 h-10 text-(--muted2) hover:text-(--text)">
             {props.buttonContent}<span class="mx-1">→</span>
            </button>
        </Link>
        
      </div> ):null}
    </div>
  )
}

export default TitleSection
 