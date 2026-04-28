import React from 'react'
import BlogCard from '../Reusable/BlogCard'
import BigBlogCard from '../Reusable/BigBlogCard'
import TitleSection from '../Reusable/TitleSection'

const Blog = () => {
  return (
    <div className='flex flex-col w-full mt-20'>
      <TitleSection />
        <div className=" w-full flex flex-col my-10 rounded-t-">
          
           <BigBlogCard />
           <BigBlogCard />
           <BigBlogCard />
           <BigBlogCard />
        </div>
      
    </div>
  )
}

export default Blog
