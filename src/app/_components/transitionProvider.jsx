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
          className="h-screen w-screen fixed bg-[#4af5de]  z-50 pixel"
          animate={{ width: '0vw' }}
          exit={{ width: '140vw' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />

        <motion.div
          className="h-screen w-screen fixed bg-[#4af5de] z-30 left-0 pixel"
          initial={{ width: '140vw' }}
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
