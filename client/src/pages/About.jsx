import React from 'react'

export const About = () => {
  return (
    <div className='min-h-screen'>
      <div className='flex items-center justify-center'>
        <h1 className='text-gray-700 text-4xl font-semibold pt-6 font-showcardg'>ABOUT US</h1>
        </div>
        <div className='flex nl:flex-row bg-[#f0f5fe] my-4 nl:mx-4 rounded-lg shadow-lg flex-col'>
          <div className='w-1/2 flex items-center justify-center mx-auto nl:pt-0 pt-6'>
     <img src="paint1.jpeg" alt="" className='h-4/6 rounded-md flex my-auto'/>
          </div>
          <div className='w-1/2 flex flex-col mx-auto'>
         <div className='items-center justify-center'>
         <h1 className='text-center text-3xl text-gray-800 font-semibold font-harlowsi nl:pt-16 p-2'>Our Story</h1>
         <div>
         <p className='text-justify font-mono nl:p-4'>
         Founded on a passion for automotive excellence, AutoArt began with a simple mission: to transform vehicles with superior painting and unmatched craftsmanship. Our journey started over a decade ago in a small garage, where attention to detail and a commitment to quality set us apart. As word spread about our exceptional work, we grew into the trusted name we are today.

At AutoArt, every project is a blend of art and precision. Our team of skilled professionals brings years of experience and a keen eye for detail to each vehicle we touch. We believe in the power of innovation and continually invest in the latest technology and techniques to ensure flawless results.

But our story isn’t just about cars—it’s about our customers. We are dedicated to providing outstanding service, building lasting relationships, and exceeding expectations with every job. Whether it’s a minor touch-up or a complete makeover, we treat every vehicle as if it were our own.

Join us in celebrating the art of automotive beauty. At AutoArt, your vehicle’s transformation is our masterpiece.</p>
         </div>
         </div>
         
         <div className='items-center justify-center'>
         <h1 className='text-center text-3xl text-gray-800 font-semibold font-harlowsi pt-4'>What is Us?</h1>
         <div>
         <p className='text-justify font-mono nl:p-4'>
         AutoArt is more than just an automotive painting service; we are a team of passionate professionals dedicated to the art and science of vehicle transformation. With a deep love for automobiles and a commitment to excellence, we bring unparalleled craftsmanship and attention to detail to every project.</p>
         </div>
         </div>
          </div>
        </div>
    </div>
  )
}
