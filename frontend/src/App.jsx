import React from 'react'
import Navbar from './Components/Reusable/Navbar'
import { Route, Routes } from 'react-router'
import Home from './Components/Pages/Home'
import Work from './Components/Pages/Work'

const App = () => {
  return (
    <div className='w-full mx-auto flex max-w-6xl '>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/work' element={<Work/>} />
      </Routes>
    </div>
  )
}

export default App
