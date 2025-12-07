import React from 'react'
import Logo from './Logo'

function Header() {
  return (
    <div className='w-full h-[10vh] flex items-center justify-center p-2 gap-5'>
      <div>
        <button className=''>Home</button>
      </div>
      <div className=''>
        <Logo />
      </div>
      <div>Process</div>
    </div>            
  )
}

export default Header