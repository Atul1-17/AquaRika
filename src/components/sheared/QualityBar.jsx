import { ClipboardCheckIcon } from 'lucide-react'
import { Factory } from 'lucide-react';
import { FlaskConical } from 'lucide-react';
import React from 'react'

function QualityBar() {
  return (
    <div className='h-screen w-full md:h-[60vh] mt-20'>
        <div className='w-full h-[20%] flex items-center justify-center flex-col text-2xl font-bold'>
            <h1>PRISTIN PURE <span className='text-yellow-400'>PERFECT</span></h1>
            <h2>QUALITIY CONTROL</h2>
        </div>
        <div className='h-[80%] w-full flex flex-col md:flex-row items-center justify-center md:justify-evenly'>
            <div className='h-[33%] flex items-center justify-center flex-col gap-6'>
                <ClipboardCheckIcon size={90} strokeWidth={1}/>
                <h1>Error-proof quality<br/> constrol checks</h1>
            </div>
            <div className='h-[33%] flex items-center justify-center flex-col gap-6'>
                <FlaskConical size={90} strokeWidth={1}/>
                <h1>Itegrated research and<br/> development facility </h1>

            </div>
            <div className=' h-[33%] flex items-center justify-center flex-col gap-6'>
                <Factory size={90} strokeWidth={1}/>
                <h1>ultra-modern infrastucture with a bottling<br/> capacity of 10 + lakh bottles a day</h1>
            </div>
        </div>
    </div>
  )
}

export default QualityBar