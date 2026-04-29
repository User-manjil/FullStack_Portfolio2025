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
    <div className='mt-10 w-full flex'>
      <div className="flex flex-col w-1/2">
        <TitleSection/>
        <div className="flex flex-col mt-10 ">

          
             {dataContact.map((el, index) => {
  return (
    <div key={index} className='w-full group hover:border-(--lime)  hover:translate-x-1 duration-200 flex border my-2 rounded-md border-(--muted2) px-0 py-5'> 
      <div className="flex border  border-(--muted2) mx-4">Email </div>
      <div className="flex flex-col">
        <div className="text-(--muted2) text-xs">{el.title.toUpperCase()}</div>
        <div className="font-[Syne] font-bold text-(--text)">
          {el.data}
        </div>
      </div>
    </div>
  )
})}
        



        </div>
      </div>
      <div className="flex  mt-10 flex-col">
        <div className="flex  text-(--lime) after:absolute -after:left-0 after:bottom-[50%] after:w-10 after:h-0.5  after:bg-(--lime) text-xs font-medium relative"> SEND A MESSAGE</div>
          <div className="flex">
            <input className='w-full border border-(--muted2) outline outline-(--muted2)  hover:outline-(--lime) text-(--text) font-[Syne] rounded-sm px-3 py-2' type="text" />
            <input className='w-full border border-(--muted2) outline outline-(--muted2)  hover:outline-(--lime) text-(--text) font-[Syne] rounded-sm px-3 py-2' type="text" />
            </div>
            <div className="flex flex-col">
              <input className='w-full border border-(--muted2) outline outline-(--muted2)  hover:outline-(--lime) text-(--text) font-[Syne] rounded-sm px-3 py-2' type="text" />
              <input className='w-full border border-(--muted2) outline outline-(--muted2)  hover:outline-(--lime) text-(--text) font-[Syne] rounded-sm px-3 py-2' type="text" /> 
              <input className='w-full border border-(--muted2) outline outline-(--muted2)  hover:outline-(--lime) text-(--text) font-[Syne] rounded-sm px-3 py-2' type="text" />
              <input className='w-full border border-(--muted2) outline outline-(--muted2)  hover:outline-(--lime) text-(--text) font-[Syne] rounded-sm px-3 py-2' type="text" />
              </div>

      </div>




      
    </div>
  )
}

export default Contact
