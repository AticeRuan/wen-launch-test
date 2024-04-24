import React from 'react'
import Option from './option'

const OptionBlock = () => {
  return (
    <div className="pt-20 flex flex-col gap-4 items-center w-fit absolute top-[187px] z-10 right-[317px]">
      {/* heading */}
      <div>
        <h2 className="uppercase text-[3rem]">Gamble for free</h2>
        <h2 className="uppercase text-[4rem] text-[#4af5d3] mt-[-1rem]">
          Earn points
        </h2>
      </div>
      <div>
        {/* options */}
        <div className="flex flex-col ">
          <Option text="Click  lauch APP" />
          <Option text="Connect your wallet" />
          <Option text="Enter your invite code" />
        </div>
        {/* buttons */}
        <div className="flex gap-7 mt-4">
          <div className="w-32 h-9 ring-1 bg-[rgba(74,245,211,0.25)] border-[1px] border-[#4af5de] rounded-lg shadow-md flex items-center justify-center text-[0.75rem] uppercase">
            Launch app
          </div>
          <div className="w-32 h-9 ring-1 bg-[rgba(65,13,255,0.25)] border-[1px] border-[#410dff] rounded-lg shadow-md flex items-center justify-center text-[0.75rem] uppercase ">
            Learn more
          </div>
        </div>
      </div>
    </div>
  )
}

export default OptionBlock
