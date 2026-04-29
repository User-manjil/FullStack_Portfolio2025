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
    <div className='mt-10 w-full flex gap-10'>

      <div className="flex flex-col w-1/2">

        <TitleSection  subTitle="GET IN TOUCH " bigTitle="LET'S BUILD SOMETHING REMARKABLE" hasBtn={false} />
        <div className="flex flex-col mt-10 ">

          
             {dataContact.map((el, index) => {
                  return (
                    <div key={index} className='w-full group hover:border-(--lime) bg-(--bg2)  hover:translate-x-1 duration-200 flex border my-2 rounded-md border-(--border) px-0 py-5'> 
                      <div className="flex border  border-(--border) mx-4">Email </div>
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
      <div className="flex  mt-60 flex-col w-1/2 ">
      <div className="flex items-center">
         <div className="flex   left-0 bottom-[50%] w-10 h-0.5 bg-(--lime)"></div>
        <div className="flex  text-(--lime)    text-xs font-medium relative"> SEND A MESSAGE</div>
          
      </div>
     <div className="flex">
            
            <input className='w-full border border-(--border) outline outline-(--border)  hover:outline-(--lime) text-(--text) font-[Syne] rounded-sm px-3 py-2' type="text" />
            <input className='w-full border border-(--border) outline outline-(--border)  hover:outline-(--lime) text-(--text) font-[Syne] rounded-sm px-3 py-2' type="text" />
            </div>
            <div className="flex flex-col gap-5">
              <input className='w-full border border-(--border) outline outline-(--border)  hover:outline-(--lime) text-(--text) font-[Syne] rounded-sm px-3 py-2' type="text" />
              <input className='w-full border border-(--border) outline outline-(--border)  hover:outline-(--lime) text-(--text) font-[Syne] rounded-sm px-3 py-2' type="text" /> 
              <input className='w-full border border-(--border) outline outline-(--border)  hover:outline-(--lime) text-(--text) font-[Syne] rounded-sm px-3 py-2' type="text" />
              <input className='w-full border border-(--border) outline outline-(--border)  hover:outline-(--lime) text-(--text) font-[Syne] rounded-sm px-3 py-2' type="text" />
              </div>

      </div>




      
    </div>
  )
}

export default Contact
