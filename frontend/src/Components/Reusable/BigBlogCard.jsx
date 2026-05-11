import React from 'react'
import {  blogPosts } from './assets'
import { useParams } from 'react-router'
const BigBlogCard = (props) => {
  const blogPosts1= blogPosts
  const {id} = useParams()
  console.log(id);
  
  return (
    <div className='flex w-full flex-col border relative group border-(--border) px-10 py-10 hover:bg-(--bg2)'>
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
      <div className="flex text-(--lime) group-hover:transform  group-hover:translate-x-1.5 duration-300 font-[Syne]"></div>
      <div className="flex flex-col sm:flex-row justify-between">

        <div className="flex flex-col group-hover:transform  group-hover:translate-x-1.5 duration-300"> 
            <div className="flex text-(--text) font-[Syne] text-xl font-bold  ">{props.heading}</div>
            <div className="flex text-(--muted2) text-xs">{props.description}</div>
            <div className="flex text-(--muted2)  text-xs">{props.readtime}</div>
        </div>
        <div className="flex group-hover:bg-(--lime) group-hover:text-(--bg2) px-10 py-2 h-fit text-(--muted2) border border-(--border) duration-300 font-medium">READ ARTICLE</div>
      </div>
    </div>
  )
}

export default BigBlogCard
