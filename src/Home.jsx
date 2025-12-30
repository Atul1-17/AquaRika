import React from 'react'
import HeroSection from './components/sheared/HeroSection'
import Banner from './components/sheared/Banner'

function Home() {
  return (
    <div className='flex flex-col gap-4'>
        <HeroSection/>
        <Banner />
    </div>
  )
}

export default Home