import React from 'react'
import HeroSection from './components/sheared/HeroSection'
import Banner from './components/sheared/Banner'
import QualityBar from './components/sheared/QualityBar'

function Home() {
  return (
    <div className='flex flex-col gap-4'>
        <HeroSection/>
        <Banner />
        <QualityBar />
    </div>
  )
}

export default Home