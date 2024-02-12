import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-3xl rounded-tr-3xl rounded-tl-3xl text-black'>
        <h1 className='font-["Neue_Montreal"] text-[4vw] leading-[4.5vw] font-medium tracking-tight'>
        Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
        </h1>
        <div className='w-full flex gap-5 border-t-[1px] mt-20 pt-20 border-[#a1b562]'>
            <div className='w-1/2'>
                <h1 className='text-7xl'>Our approach:</h1>
                <button className='flex uppercase gap-10 font-semibold items-center px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white'>
                    read more
                    <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
                </button>
            </div>
            <div className='w-1/2 h-[70vh] rounded-3xl bg-yellow-600'></div>
        </div>
    </div>
  )
}

export default About