import React from 'react'
import Logo from './Logo'

function Header() {
  return (
    <div>
      <div className='w-full h-[10vh] flex items-center justify-between p-2'>
        <Logo />
        <div>
          <button className='p-2 bg-[#89ceda] hover:bg-[#39879f] rounded-2xl'>Contact Me</button>
        </div>
      </div>
    </div>
  )
}

export default Header