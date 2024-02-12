import React from 'react'
import { motion } from "framer-motion";

function Marquee() {
  return (
    <div className='w-full py-10 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl'>
        <div className="text border-t-2 border-b-2 border-zinc-300 flex gap-10 overflow-hidden whitespace-nowrap mt-[6rem]">
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:'linear', repeat:Infinity,duration:20}} className='text-[24vw] leading-node font-["Founders Grotesk_X-Condensed"] leading-node uppercase font-bold tracking-tighter -mb-[5vw] -mt-[7vw] '>We are Ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:'linear', repeat:Infinity,duration:20}} className='text-[24vw] leading-node font-["Founders Grotesk_X-Condensed"] leading-node uppercase font-bold tracking-tighter -mb-[5vw] -mt-[7vw] '>We are Ochi</motion.h1>
        </div>
    </div>
  )}9
export default Marquee