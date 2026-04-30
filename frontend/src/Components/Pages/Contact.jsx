import React, { useState } from 'react'
import TitleSection from '../Reusable/TitleSection'

const Contact = () => {
  
  const dataContact = [
    {title : "Email" , data:"aryalmanzeel1@gmail.com", },
    {title : "Linkedin" , data:"manzeel-aryal"},
    {title : "Github" , data:"User-manjil"},
    {title : "Location" , data:"Kathmandu , Nepal"},
  ]
   const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(form);
    alert("Message Sent!");
  };
  return (
    <div className='my-25  w-full flex flex-col lg:flex-row gap-10'>
  
  {/* LEFT SIDE */}
  <div className="flex flex-col w-full lg:w-1/2">
    
    <div className="flex flex-col font-[Syne] text-(--text) text-3xl sm:text-4xl lg:text-6xl font-black">
      Let's Build Something 
      <span className='text-(--lime)'>Remarkable.</span>

      <p className='text-sm text-(--muted2) font-medium mt-3'>
        Have a project in mind? Looking for a developer who thinks like a designer? 
        I'm currently taking on select projects. Let's talk.
      </p>
    </div>

    <div className="flex flex-col mt-10">
      {dataContact.map((el, index) => (
        <div 
          key={index} 
          className='w-full group hover:border-(--lime) bg-(--bg2) hover:translate-x-1 duration-200 flex border my-2 rounded-md border-(--border) py-5'
        > 
          <div className="border border-(--border) mx-4 w-8 h-8"></div>

          <div className="flex flex-col">
            <div className="text-(--muted2) text-xs">
              {el.title.toUpperCase()}
            </div>
            <div className="font-[Syne] font-bold text-(--text)">
              {el.data}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* RIGHT SIDE (FORM) */}
  <div className="w-full lg:w-1/2">
    
    <p className="text-sm text-(--lime) mt-5 mb-5 font-bold font-[Syne]">
      Send a Message
    </p>

    <div className="space-y-4">

      {/* Responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          name="firstName"
          placeholder="First Name"
          onChange={handleChange}
          className="p-3 rounded w-full bg-(--bg2) text-(--text) placeholder:text-(--muted2)"
        />
        <input
          name="lastName"
          placeholder="Last Name"
          onChange={handleChange}
          className="p-3 rounded w-full bg-(--bg2) text-(--text) placeholder:text-(--muted2)"
        />
      </div>

      <input
        name="email"
        type="email"
        placeholder="Email"
        onChange={handleChange}
        className="p-3 rounded w-full bg-(--bg2) text-(--text) placeholder:text-(--muted2)"
      />

      <select
        name="projectType"
        onChange={handleChange}
        className="rounded w-full px-4 py-2 bg-(--bg2) text-(--text)"
      >
        <option value="">Project Type</option>
        <option>Web Application</option>
        <option>E-Commerce Store</option>
        <option>Portfolio</option>
        <option>SaaS Product</option>
        <option>Consultation</option>
      </select>

      <select
        name="budget"
        onChange={handleChange}
        className="rounded w-full px-4 py-2 bg-(--bg2) text-(--text)"
      >
        <option value="">Budget Range</option>
        <option>below $500</option>
        <option>$1k – $5k</option>
        <option>$5k – $15k</option>
        <option>$15k – $50k</option>
        <option>$50k+</option>
      </select>

      <textarea
        name="message"
        placeholder="Tell me about your project..."
        onChange={handleChange}
        className="p-3 rounded w-full h-32 bg-(--bg2) text-(--text) placeholder:text-(--muted2)"
      />

      <button
        onClick={handleSubmit}
        className="w-full bg-(--lime) py-3 rounded font-medium hover:opacity-90 transition"
      >
        <span className='inline-block hover:translate-x-1 duration-300'>
          Send Message →
        </span>
      </button>
    </div>
  </div>
</div>
   
  )
}

export default Contact
