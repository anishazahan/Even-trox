import React from 'react'
import './speaker.css'
import img from '../../../assets/img/speaker-1.jpg'
import banner from '../../../assets/img/speaker-bg.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const SpeakerSection = () => {
  return (
    <>

       <div className="speaker-bg py-24 relative">
            <p className="uppercase left-1/2 right-0 transform -translate-x-1/2 -translate-y-1/2 text-center absolute z-20 mx-auto text-white tracking-[5px] ">features</p>
            <h2 className="text-[45px] left-1/2 mt-14 right-0 transform -translate-x-1/2 -translate-y-1/2  absolute z-20 mx-auto text-center text-white font-semibold tracking-wide">Todays Performers</h2>
     
         {/* <div className="absolute bg-black/10 inset-0 z-10 "></div> */}

         <div className="z-20 lg:gap-x-7 gap-y-10  mt-40 max-w-6xl left-0  mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

            <div className="relative w-full h-full md:w-300px md:h-300px border-[12px] border-white   rounded-full group overflow-hidden">
                <img className='rounded-full lg:w-full lg:h-full duration-500 overflow-hidden absolute group-hover:scale-105 ' src={img} alt="" />
                <div className="absolute inset-0 rounded-full duration-500 hover:bg-secondary/60 w-full h-full group flex flex-col justify-center items-center ">
                    <h2 className='text-xl hidden group-hover:block font-semibold text-center text-white'>Darley Maker</h2>
                    <p className='text-white hidden group-hover:block uppercase text-center  text-sm'>Event manager</p>
                </div>
            </div>
            <div className="">
                <img className='rounded-full border-[12px] border-white' src={img} alt="" />
            </div>
            <div className="">
                <img className='rounded-full border-[12px] border-white' src={img} alt="" />
            </div>
            <div className="">
                <img className='rounded-full border-[12px] border-white' src={img} alt="" />
            </div>
            <div className="">
                <img className='rounded-full border-[12px] border-white' src={img} alt="" />
            </div>
            <div className="">
                <img className='rounded-full border-[12px] border-white' src={img} alt="" />
            </div>
            <div className="">
                <img className='rounded-full border-[12px] border-white' src={img} alt="" />
            </div>
            <div className="">
                <img className='rounded-full border-[12px] border-white' src={img} alt="" />
            </div>
            
         </div>

       </div>






       


     


    </>
  )
}

export default SpeakerSection