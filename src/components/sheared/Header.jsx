import React from 'react'
import Logo from './Logo'
import { Menu } from 'lucide-react'

function Header() {
  return (
    <>
    <div className='w-full h-[10vh] md:flex items-center justify-center p-2 gap-5 hidden'>
      <div>
        <button className=''>Home</button>
      </div>
      <div className=''>
        <Logo />
      </div>
      <div>Process</div>
    </div>

    {/* Mobile screen */}
    <div className='w-full h-[10vh] md:hidden flex items-center justify-between bg-[#9bc6d1]'>
      <div className='w-[40%] h-full flex items-center justify-center'>
        <h1 className='text-xl'>AquaRika</h1>
      </div>
      <div className='pr-2'>
        <Menu/>
      </div>
    </div>
    </>
  )
}

export default Header