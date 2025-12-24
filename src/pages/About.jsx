import React from 'react'

const About = () => {
  return (
    <div className=' mt-20'>
      <button className='text-3xl border-5 text-center px-10 py-2 block mx-auto'>About me</button>

      <p className='text-center pt-10 px-30'>I’m a passionate Frontend Developer focused on creating clean, modern, and responsive websites. I love turning creative ideas into interactive digital experiences using technologies like React, JavaScript, and Tailwind CSS. My goal is to build products that are both functional and visually engaging.</p>
      <img className='flex mx-auto py-10' src="/naqsh.svg" alt="" />

      <div className='grid grid-cols-2 place-items-center'>
        <div className='max-w-xl'>
          <div className='flex  items-center'>
            <img src="/design.svg" alt="" />
            <h3 className='font-bold text-2xl'>DESIGN</h3>
          </div>
          <p>I create intuitive and aesthetic user interfaces that deliver a smooth user experience. My design approach focuses on simplicity, clarity, and usability.</p>
        </div>
        <div className='max-w-xl'>
          <div className='flex  items-center'>
            <img src="/development.svg" alt="" />
            <h3 className='font-bold text-2xl'>DEVELOPMENT</h3>
          </div>
          <p>I build responsive, high-performance websites using modern frontend technologies. From layout to logic, I make sure every component works seamlessly across all devices.</p>
        </div>
        
      </div>
      <div className='max-w-xl mx-auto py-10'>
          <div className='flex  items-center'>
            <img src="/design.svg" alt="" />
            <h3 className='font-bold text-2xl'>MAINTENANCE</h3>
          </div>
          <p>I provide ongoing support and optimization to keep websites fast, secure, and up to date. I ensure long-term performance and smooth functionality for every project.</p>
        </div>
    
    </div>
  )
}

export default About 