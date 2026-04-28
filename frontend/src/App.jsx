import React from 'react'
import Navbar from './Components/Reusable/Navbar'
import { Route, Routes } from 'react-router'
import Home from './Components/Pages/Home'
import Work from './Components/Pages/Work'
import Footer from './Components/Reusable/Footer'
import Blog from './Components/Pages/Blog'
import Contact from './Components/Pages/Contact'

const App = () => {
  return (
    <div className='w-full mx-auto flex flex-col max-w-6xl '>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/work' element={<Work/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
