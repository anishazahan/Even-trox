import React from 'react'
import './vedio.css'
import {AiOutlinePlayCircle} from 'react-icons/ai'

const VedioSection = () => {
  return (
    <>

     <div className="vedio-bg -z-10">
     <p className="uppercase left-1/2 right-0 transform -translate-x-1/2 -translate-y-1/2 text-center absolute text-xl font-semibold text-[#ffbc00] z-20 mx-auto  ">WE’RE A LEADING INDUSTRY COMPANY</p>
            <h2 className="text-[45px] left-1/2 mt-14 right-0 transform -translate-x-1/2 -translate-y-1/2  absolute z-20 mx-auto text-center text-white font-semibold tracking-wide mb-10">Todays Performers</h2>

            <h2 className="text-[45px] left-1/2 mt-14 right-0 transform -translate-x-1/2 -translate-y-1/2  absolute z-20 mx-auto text-center text-white font-semibold tracking-wide">Todays Performers</h2>

            <div className="absolute left-1/2  z-20 mt-36  right-0 transform -translate-x-1/2 -translate-y-1/2 ">
                <button className='text-white  rounded-full text-5xl p-8 bg-yellow'><AiOutlinePlayCircle className='animate-ping'></AiOutlinePlayCircle></button>
            </div>
     </div>

    </>
  )
}

export default VedioSection