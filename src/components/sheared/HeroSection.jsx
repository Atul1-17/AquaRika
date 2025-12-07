import React from 'react'

function HeroSection() {
  return (
    <div className='h-[90vh] relative w-full flex'>
      <div className=' w-[50%] h-[100%] flex items-center justify-center '>
        <div className=' flex flex-col items-start p-4 gap-4 justify-center'>
          <h1 className='text-6xl leading-normal'>Reinventing the Way<br/> You Drink Water</h1>
          <p>Because Every Sip Should Be Perfect</p>
          <button className='border-2 px-4 py-2 bg-[#1e8bb0] text-white rounded-3xl'>Contact Us</button>
        </div>
      </div>
      <div className='relative w-[50%] h-[100%] '>
        <div className='h-[80%] w-[50%] rounded-t-full absolute top-[5%] right-[10%] border-2'>
          <img className='h-[100%] w-[100%] rounded-t-full' src="/Gemini_Generated_Image_3y493y493y493y49.png" alt="" />
        </div>
        <div className='rounded-full h-50 w-50 bg-red-500 absolute bottom-[10%] left-[30%] border-2'>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  )
}

export default HeroSection