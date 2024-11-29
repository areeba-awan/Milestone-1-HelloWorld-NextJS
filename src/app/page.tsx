"use client"
import React from 'react'
import Typewriter from 'typewriter-effect';
const Page = () => {
  return (
    <div className='bg-purple-900 h-screen'>;
      <div className='bg-yellow-400 text-center w-[300px] p-2 mt-60 ml-[39%] rounded-md font-bold text-2xl animate-bounce '>Hello! World Of Next.Js</div>
<div className='text-white font-bold text-2xl ml-[42%]'>
      <Typewriter
  options={{
    strings: ['From GIAIC Student',"Areeba Awan"],
    autoStart: true,
    loop: true,
  }}
/>
</div>

    </div>
  )
}

export default Page