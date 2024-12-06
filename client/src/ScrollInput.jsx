import React, { useRef } from 'react'
import { useEffect } from 'react';

const ScrollInput = () => {

const inputRef = useRef(null);

useEffect(()=>{
    const input = inputRef.current;
    if(input){
        const setInterval(()=>{
            input.
        })
    }
})

  return (
    <div>
        <form class="w-full max-w-sm">
  <div class="flex items-center py-2">
    <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 m-2" type="text" placeholder="Jane Doe" aria-label="Full name"/>
    <button class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
      Sign Up
    </button>
   
  </div>
</form>
    </div>
  )
}

export default ScrollInput