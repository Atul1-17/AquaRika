import React from 'react'

function HeroSection() {
  return (
    <div className='h-[90vh] relative w-full flex flex-col md:flex-row lg:flex-row'>
      <div className='w-[100%] h-[50%] md:w-[50%] md:h-[100%] lg:w-[50%] lg:h-[100%] flex items-center justify-center'>
        <div className=' flex flex-col items-start p-4 gap-4 justify-center'>
          <h1 className='text-4xl md:text-6xl lg:text-6xl  leading-normal'>Reinventing the Way<br/> You Drink Water</h1>
          <p>Because Every Sip Should Be Perfect</p>
          <button className='hidden md:flex lg:flex border-2 px-4 py-2 bg-[#1e8bb0] text-white rounded-3xl'>Contact Us</button>
        </div>
      </div>
      <div className='relative w-[100%] h-[100%] md:w-[50%] md:h-[100%] lg:w-[50%] lg:h-[100%]'>
        <div className='h-[80%] w-[65%] md:h-[80%] md:w-[50%] lg:h-[80%] lg:w-[50%] rounded-t-full absolute top-[0%] right-[10%] md:top-[5%] md:right-[10%] border-2'>
          <img className='h-[100%] w-[100%] rounded-t-full' src="/Gemini_Generated_Image_3y493y493y493y49.png" alt="" />
        </div>
        <div className='rounded-full h-40 w-40 md:h-50 md:w-50 lg:h-50 lg:w-50 bg-red-500 absolute bottom-[15%] left-[10%] md:bottom-[10%] md:left-[30%] border-2'>
          <img src="" alt="" />
        </div>
        <button className='flex absolute bottom-[1%] right-[30%] md:hidden lg:hidden border-2 px-4 py-2 bg-[#1e8bb0] text-white rounded-3xl'>Contact Us</button>
      </div>
    </div>
  )
}

export default HeroSection