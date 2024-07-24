import React from 'react'
import {MdCall} from 'react-icons/md'
import {LuMessagesSquare} from 'react-icons/lu'
import {SiGmail} from 'react-icons/si'

const Contact = () => {
  return (
    <div className='min-h-screen'> 
<div className="flex bg-[#eff1f5] nl:h-80 nl:flex-row flex-col-reverse p-2 m-2 rounded-lg shadow-lg relative">
<div className='w-4/6 my-auto  mx-auto'>
<div className='flex items-center justify-center'>
        <h1 className='text-gray-700 text-4xl font-black pt-6 text-center'>Get in touch</h1>
        </div>
        <div className='pt-2 flex items-center justify-center'>
          <p className='text-gray-800 font-semibold leading-loose text2xl text-center flex mx-auto'>Want to get in touch?We'd love to hear from you. Here's how you can reach us...</p>
        </div>
        <div className='flex nl:flex-row absolute top-72 w-full p-2 invisible nl:visible'>

        <div className='flex flex-col items-center justify-center bg-[#b1bab5] rounded-lg shadow-lg w-2/6 m-2'>
         
          <div className='text-center mx-auto'>
          <MdCall className='h-28 w-28'/>
          </div>
      <div className='text-center '>
      <h1 className='text-center p-2 font-black text-2xl'>Talk to Experts</h1>
      </div>
      <div className='text-center'>
      <h1 className='text-center p-2 font-medium'>Interseted in Autoart? Judt pick up the phone to chat <br />with a member of our team.</h1>
      </div>

      <div className='text-center'>
      <a href={`tel:9495187095`}><h1 className='text-center pt-2 font-medium text-sky-500 mb-4'>+91 9495187095</h1></a>
      </div>
      
        </div>

        <div className='flex flex-col items-center justify-center bg-[#b1bab5] rounded-lg shadow-lg w-2/6 m-2'>
         
         <div className='text-center mx-auto'>
         <LuMessagesSquare className='h-28 w-28'/>
         </div>
     <div className='text-center '>
     <h1 className='text-center p-2 font-black text-2xl'>Message to Experts</h1>
     </div>
     <div className='text-center'>
<h1 className='text-center p-2 font-medium'>Sometimes you need a little hlep from your friends.<br />Or AutoArt. Don't worry... we`re here for you</h1>
</div>

     <div className='text-center p-3'>
     <a href='mailto:autoart@gmail.com'><SiGmail className='h-4 w-4'/></a>
     </div>
     
       </div>
       
        </div>
</div>
<div className='nl:w-2/6 flex nl:justify-end justify-center'>
<img src="cs.jpg" alt="" className='rounded-xl'/>
</div>

</div>
<div className='flex flex-col  p-2 nl:invisible'>

<div className='flex flex-col items-center justify-center bg-[#b1bab5] rounded-lg shadow-lg m-2'>
 
  <div className='text-center mx-auto'>
  <MdCall className='h-28 w-28'/>
  </div>
<div className='text-center '>
<h1 className='text-center p-2 font-black text-2xl'>Talk to Experts</h1>
</div>
<div className='text-center'>
<h1 className='text-center p-2 font-medium'>Interseted in Autoart? Judt pick up the phone to chat <br />with a member of our team.</h1>
</div>

<div className='text-center'>
<a href={`tel:9495187095`}><h1 className='text-center pt-2 font-medium text-sky-500 mb-4'>+91 9495187095</h1></a>
</div>

</div>

<div className='flex flex-col items-center justify-center bg-[#b1bab5] rounded-lg shadow-lg  m-2'>
 
 <div className='text-center mx-auto'>
 <LuMessagesSquare className='h-28 w-28'/>
 </div>
<div className='text-center '>
<h1 className='text-center p-2 font-black text-2xl'>Message to Experts</h1>
</div>
<div className='text-center'>
<h1 className='text-center p-2 font-medium'>Sometimes you need a little hlep from your friends.<br />Or AutoArt. Don't worry... we`re here for you</h1>
</div>

<div className='text-center'>
<a href='mailto:autoart@gmail.com'><SiGmail className='h-4 w-4'/></a>
</div>

</div>

</div>

    </div>
  )
}

export default Contact
