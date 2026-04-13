import React from 'react'
import Navbar from './Components/Reusable/Navbar'
import { Route, Routes } from 'react-router'
import Home from './Components/Pages/Home'
import Work from './Components/Pages/Work'
import Footer from './Components/Reusable/Footer'

const App = () => {
  return (
    <div className='w-full mx-auto flex flex-col max-w-6xl '>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/work' element={<Work/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
