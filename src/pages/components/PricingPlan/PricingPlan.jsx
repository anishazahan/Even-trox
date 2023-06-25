import React from 'react'
import {SlDiamond} from 'react-icons/sl'

const PricingPlan = () => {
  return (
    <>

    <div className="my-28">
    <div className="flex flex-col justify-center  ">
                <p className="uppercase tracking-[5px] text-center ">GET TICKET</p>
            <h2 className="text-[45px]  text-black/90 font-semibold tracking-wide text-center">Choose a Ticket</h2>
                </div>

                <div className="grid grid-cols-3 gap-5 max-w-6xl px-14 mx-auto">

                    <div className="">
                       <div className=" h-[150px] bg-cyan-500"></div>
                       <div className="mx-auto flex justify-center -mt-11">
                        <button className='p-4 border-cyan-600 border-[6px] ring-[12px] rounded-full text-6xl ring-white'><SlDiamond></SlDiamond></button>
                       </div>
                       <div className=" bg-white rounded-t-full">
                        <p>kjdfffffff</p>
                       </div>
                    </div>

                </div>
    </div>
    
    </>
  )
}

export default PricingPlan