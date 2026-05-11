import React from 'react'
import BlogCard from '../Reusable/BlogCard'
import BigBlogCard from '../Reusable/BigBlogCard'
import TitleSection from '../Reusable/TitleSection'
import { Link } from 'react-router'
import { blogPosts } from '../Reusable/assets'
const Blog = () => {
  return (
    <div className='flex flex-col w-full mt-20'>
      <TitleSection subTitle="WRITING" bigTitle="Thoughts & Insights" />
      <p className='text-(--muted2)'>Deep dives into web development, design thinking, performance engineering, and the creative process.</p>
      <div className="flex mt-5 w-full h-px bg-(--border)" />
        <div className=" w-full flex flex-col my-20 rounded-t-">
          {
            blogPosts.map((el, index)=>{
              return <div><Link to={`/blog/${el.id}`}><BigBlogCard  heading={el.title} readtime={el.readTime} description={el.description} /></Link></div>
            })
          }
          
          
        </div>
      
    </div>
  )
}

export default Blog
