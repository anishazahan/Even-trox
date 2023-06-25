import React from 'react'
import img1 from '../../../assets/img/1.png'
import {gold,platinum,silver} from './data.js'

const Sponcers = () => {
  return (
    <>
        <div className="max-w-6xl mx-auto px-5 xl:px-0 pt-20">
        <div className="flex flex-col items-start  ">
                <p className="uppercase tracking-[5px] text-center ">CLIENTS
</p>
            <h2 className="text-[45px] mt-2 mb-12 text-black/90 font-semibold tracking-wide text-center">Offcial Sponsors</h2>
                </div>

                <div className="mb-7">
                    <button className='px-8 py-2 text-xl font-bold text-white bg-cyan-700 rounded-xl'>Platinum Sponsors</button>
                    <div className="grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-x-4 mt-8">
                       {
                           platinum.map((item,index)=>{
                            return  <div key={index} className="flex justify-center border shadow-md h-[68%] bg-white ">
                            <img src={item.img} alt="" />
                        </div>
                           })
                       }
                    </div>
                </div>
                <div className="mb-7">
                    <button className='px-8 py-2 text-xl font-bold text-white bg-blue-700 rounded-xl'>Gold Sponsors</button>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
                       {
                           gold.map((item,index)=>{
                            return  <div key={index} className="flex justify-center border shadow-md h-[68%] bg-white ">
                            <img src={item.img} alt="" />
                        </div>
                           })
                       }
                    </div>
                </div>
                <div className="mb-7">
                    <button className='px-8 py-2 text-xl font-bold text-white bg-blue-700 rounded-xl'>Silver Sponsors</button>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
                       {
                           silver.map((item,index)=>{
                            return  <div key={index} className="flex justify-center border shadow-md h-[68%] bg-white ">
                            <img src={item.img} alt="" />
                        </div>
                           })
                       }
                    </div>
                </div>
        </div>
    </>
  )
}

export default Sponcers