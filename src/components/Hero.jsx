
import React from 'react'
import Button from './Button'

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[700px] w-full mx-auto p-4 "> 
    <div className="flex flex-col gap-4">
      <p>IT'S TIME TO GET</p>
      <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>Transform Your <span className='text-blue-400 '>Body </span> and <span className='text-blue-400 '>Mind</span></h1>
    </div>

    <p className='text-sm md:text-base font-light' > Join our gym app to access personalized workouts, expert guidance, and real progress —<span className='text-blue-400 '> all in one place. </span>
Whether you're a beginner or an athlete, we help you stay motivated, consistent, and strong. <span className='text-blue-400 '>Your goals, your pace, your success.</span> </p>

   <Button func={()=>{
      window.location.href= '/#generate'
   }} text = {"Accept & Begin"}></Button>
    </div>
  )
}
