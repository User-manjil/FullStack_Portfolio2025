import React from 'react'
import BlogCard from '../Reusable/BlogCard'


const Blog = () => {
  return (
    <div className='flex w-full mt-20'>
        <div className=" w-full flex flex-col">
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
        </div>
      
    </div>
  )
}

export default Blog
