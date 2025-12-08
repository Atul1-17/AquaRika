import React from 'react'

function Banner() {
  return (
    <>
    <div className='bg-[#9bc6d1] h-[50vh] w-full md:flex lg:flex hidden'>
        <div className='bg-gray-100 h-[100%] w-[40%] rounded-tr-full flex items-center justify-center'>
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

    {/* mobile screen */}

    <div className='bg-[#9bc6d1] h-[20vh] w-full flex md:hidden'>
        <div className='w-[60%] rounded-tr-full bg-gray-100'>
        </div>
        <div className='absolute'></div>
    </div>
    </>
  )
}

export default Banner