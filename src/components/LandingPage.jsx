import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-2'>
        <div className="textstructure mt-40 px-20">
            {["We Create","Eye Opening","Presentations"].map((items,index)=>(
                <div className="masker">
                    <div className='w-fit flex items-end overflow-hidden'>
                        {index===1&&(<div className='w-[9vw] h-[7vw] rounded-md relative top-5 bg-green-500'></div>)}
                        <h1 className="flex items-center uppercase text-[8vw] h-full leading-[7vw] font-['Founders Grotesk X-Cond-Lt'] font-bold">{items}</h1>
                    </div>
            </div>
            ))}
            
        </div>
        <div className='border-t-2 border-zinc-800 mt-32 flex justify-between items-center py-5 px-20'>
            {['For public and private companies','From the first pitch to IPO'].map((item,index)=>(
                <p className='text-md font-light tracking-tight leading-none'>{item}</p>
            ))}
            <div className="start flex items-center gap-5">
            <div className='px-5 py-2 border-[2px] border-zinc-500 font-light text-md capitalize rounded-full '>
                START THE PROJECT
            </div>
            <div className='w-10 h-10 rounded-full border-[2px] border-zinc-400 flex justify-center items-center'>
                <span className='rotate-[45deg]'><FaArrowUpLong /></span>
            </div>
            </div>
        </div>

    </div>
  )
}

export default LandingPage