import React from 'react'
import HeroSection from './components/sheared/HeroSection'

function Home() {
  return (
    <div>
        <HeroSection/>
        <div className='bg-[#9bc6d1] h-[50vh] w-full flex'>
          <div className='bg-white h-[100%] w-[40%] rounded-tr-full flex items-center justify-center'>
          </div>
          <div className='h-[100%] w-[60%] flex flex-col items-center justify-center gap-6'>
            <h1 className='capitalize text-3xl text-white font-bold'>with great power comes great responsibility</h1>
            <div className='w-[40vw]'>
              <p>It is our mission to be the country's 
              premium refreshment product 
              company, focused on delivering a 
              family of flavourful, great-tasting 
              and optimum beverages that 
              delight the customer.
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home