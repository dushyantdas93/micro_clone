import React from 'react'
import { FaYoutube } from "react-icons/fa6";
import { FaXbox } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLongArrowAltUp } from "react-icons/fa";

function six() {
  return (
    <div className='bg-white'>
    <div className="flex gap-5 items-center  py-20  md:container md:mx-auto relative">
        <h1 className="text-xl font-semibold capitalize pl-6">follow microsoft</h1>
     <div className="flex gap-5">
    
     <FaXbox  size="30"/>
     <FaXTwitter  size="30"/>
     <FaYoutube  size="30"/>
     </div>
        <a href="" className="underline text-white   capitalize mt-2 absolute right-4 bottom-4 bg-gray-500 flex font-semibold rounded-sm px-2 py-1">back to top <FaLongArrowAltUp className=""/></a>
    
    
        
    
    </div>
    </div>
  )
}

export default six