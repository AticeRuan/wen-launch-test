'use client'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import Navbar from './navbar'
import { usePathname } from 'next/navigation'

const TransitionProvider = ({ children }) => {
  const pathName = usePathname()
  return (
    <AnimatePresence mode="sync">
      {' '}
      <div key={pathName} className="w-screen h-auto bg-transparent">
        <motion.div
          className="h-screen w-screen fixed to-[#4af5de] via-[#4af5de] from-[#410dff] bg-gradient-to-l left-0  rounded-r-[100px] z-50 "
          animate={{ width: '0vw' }}
          exit={{ width: '180vw' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
        <motion.div
          className="fixed m-auto top-0 bottom-0 left-0 right-0 text-5xl md:text-8xl cursor-default w-fit h-fit uppercase font-bold hidden md:block z-30 text-black"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1.3, ease: 'easeOut' }}
        >
          Loading......
        </motion.div>
        <motion.div
          className="h-screen w-screen fixed  from-[#4af5de]  via-[#4af5de] to-[#410dff] bg-gradient-to-l  z-30 right-0 rounded-l-[100px]"
          initial={{ width: '180vw' }}
          animate={{ width: '0vw', transition: { delay: 0.8 } }}
        />

        <div className="">
          <Navbar />
        </div>
        <div className=" md:h-auto z-20">{children}</div>
      </div>
    </AnimatePresence>
  )
}

export default TransitionProvider
