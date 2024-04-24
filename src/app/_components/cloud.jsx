'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
Image
const Cloud = () => {
  const cloudSize = {
    xs: {
      width: '640px',
      height: '152px',
      negativeWidth: '-640px',
    },

    sm: {
      width: '1944px',
      height: '463px',
      negativeWidth: '-1944px',
    },
    lg: {
      width: '1944px',
      height: '463px',
      negativeWidth: '-1944px',
    },
    xl: {
      width: '1944px',
      height: '463px',
      negativeWidth: '-1944px',
    },
    twoxl: {
      width: '1944px',
      height: '463px',
      negativeWidth: '-1944px',
    },
  }

  return (
    <div className="overflow-clip z-0 ">
      <motion.div
        className={`absolute top-0  xl:w-[${cloudSize.xl.width}] xl:h-[${cloudSize.xl.height}] w-[${cloudSize.xs.width}] h-[${cloudSize.xs.height}] z-0 `}
        initial={{ x: '150vw' }}
        animate={{ x: '-150vw' }}
        transition={{
          duration: 60,
          repeat: Infinity,

          delay: 30,
        }}
      >
        <Image src="/assets/clouds.png" fill alt="" className="z-0" />
      </motion.div>
      <motion.div
        className="absolute top-0  w-[1944px] h-[463px] z-0 "
        initial={{ x: '150vw' }}
        animate={{ x: '-150vw' }}
        transition={{ duration: 60, repeat: Infinity }}
      >
        <Image src="/assets/clouds.png" fill alt="" className="z-0" />
      </motion.div>
    </div>
  )
}

export default Cloud
