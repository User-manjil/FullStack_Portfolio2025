import React from 'react'
import TitleSection from '../Reusable/TitleSection'

const Contact = () => {
  const dataContact = [
    {title : "Email" , data:"aryalmanzeel1@gmail.com"},
    {title : "Linkedin" , data:"aryalmanzeel1@gmail.com"},
    {title : "Github" , data:"aryalmanzeel1@gmail.com"},
    {title : "Location" , data:"aryalmanzeel1@gmail.com"},
  ]
  return (
    <div className='mt-10'>
      <div className="flex flex-col w-1/2">
        <TitleSection/>
        <div className="flex">

          <div className=' w-full border border-(--muted2) px-10 py-10'>
              
          </div>



        </div>
      </div>
      <div className="flex"></div>




      
    </div>
  )
}

export default Contact
