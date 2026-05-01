import React from 'react'
import { Link } from 'react-router'

const BlogDetail = () => {
  return (
    <div className='max-w-4xl  mx-auto h-90 justify-center  mt-20   '>
        <div className='my-5 text-[var(--muted2)] font-[Syne] font-bold'>
            
        <Link to="/blog">← Back to blog</Link>
        <div className="flex">
            <h1 className='font-[Syne] text-4xl text-(--text) font-black '>The Art of Meaningful Micro-interactions</h1>
            
        </div>
         <div className="flex my-15 w-full h-px bg-(--border)" />
        </div>
        
      
    </div>
  )
}

export default BlogDetail
