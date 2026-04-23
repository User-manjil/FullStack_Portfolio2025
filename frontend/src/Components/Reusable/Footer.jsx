import React from 'react'
import { NavLink } from 'react-router';
const Footer = () => {
   const uiLink = [
    { name: "HOME", path: "/" },
    { name: "WORK", path: "/work" },
    { name: "BLOG", path: "/blog" },
    { name: "CONTACT", path: "/contact" },
  ];
  return (
    <div className='w-full flex justify-between'>
      <div className="flex flex-col w-1/4">
        <h1 className='font-[Syne] font-black text-(--text)'>Manjil <span className='text-(--lime)'>.</span></h1>
        <p className='text-(--muted2)'>Web developer building bold digital experiences from Kathmandu, NP.</p>
      </div>
      <div className="flex  gap-10">
        <div className="flex flex-col">
        <div className="flex text-(--text) text-xs font-bold">
              NAVIGATE
        </div>
        <div className="flex flex-col">
            {uiLink.map((el) => (
          <li key={el.name}>
            <NavLink
              to={el.path}
              className={ "text-(--muted2) text-xs"}
              
              
            >
              {el.name}
            </NavLink>
          </li>))}
        </div>
        </div>
        <div className="flex flex-col">
         <div className="flex text-(--text) font-bold text-xs">
              CONNECT
        </div>
          <div className="flex fle">
            <ul className='text text-(--muted2)'>
              <li><a target='_blank'  href="https://github.com/User-manjil">Github</a></li>
              <li><a  target='_blank' href="https://www.instagram.com/ma_manjil/">Instagram</a></li>
              <li><a target='_blank'  href="https://www.linkedin.com/in/manzeel-aryal/">Linkedin</a></li>
            </ul>
          </div>

        </div>
       
      </div>
    </div>
  )
}

export default Footer
