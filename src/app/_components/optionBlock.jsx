import React from 'react'
import Option from './option'

const OptionBlock = () => {
  return (
    <div className="  flex flex-col gap-4 items-center justify-center w-fit ">
      {/* heading */}
      <div className="flex gap-1 flex-col">
        <h2 className="uppercase text-[1.5rem] md:text-[3rem]">
          Gamble for free
        </h2>
        <h2 className="uppercase text-[2rem] md:text-[4rem] text-[#4af5d3] ">
          Earn points
        </h2>
      </div>
      <div>
        {/* options */}
        <div className="flex flex-col justify-center w-30 gap-2 hover:">
          <Option text="Click  lauch APP" />
          <Option text="Connect your wallet" />
          <Option text="Enter your invite code" />
        </div>
        {/* buttons */}
        <div className="flex gap-7 mt-4">
          <div className="md:w-32 h-9 w-20 ring-1 bg-[rgba(74,245,211,0.25)] border-[1px] border-[#4af5de] shadow-md flex items-center justify-center  uppercase rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer font-medium">
            <span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[rgba(74,245,211,0.25)]  top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span class="relative text-white md:text-xs text-[0.6rem]">
              Launch app
            </span>
          </div>

          <div className="md:w-32 h-9 w-20 ring-1 bg-[rgba(65,13,255,0.25)] border-[1px] border-[#410dff] shadow-md flex items-center justify-center md:text-xs text-[0.6rem] uppercase rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer font-medium">
            <span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[rgba(65,13,255,0.25)] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span class="relative text-white md:text-xs text-[0.6rem]e">
              Learn more
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OptionBlock
