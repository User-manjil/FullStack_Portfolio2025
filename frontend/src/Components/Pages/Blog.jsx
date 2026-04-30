import React from 'react'
import BlogCard from '../Reusable/BlogCard'
import BigBlogCard from '../Reusable/BigBlogCard'
import TitleSection from '../Reusable/TitleSection'

const Blog = () => {
  return (
    <div className='flex flex-col w-full mt-20'>
      <TitleSection subTitle="WRITING" bigTitle="Thoughts & Insights" />
      <p className='text-(--muted2)'>Deep dives into web development, design thinking, performance engineering, and the creative process.</p>
      <div className="flex mt-5 w-full h-px bg-(--border)" />
        <div className=" w-full flex flex-col my-20 rounded-t-">
           <BigBlogCard />
           <BigBlogCard />
           <BigBlogCard />
           <BigBlogCard />
        </div>
      
    </div>
  )
}

export default Blog
