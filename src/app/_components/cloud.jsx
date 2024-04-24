'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
Image
const Cloud = () => {
  const cloudSize = {
    xs: {
      width: '1944px',
      height: '463px',
      negativeWidth: '-1944px',
      negativeWidth: '-1944px',
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
  }

  return (
    <>
      <motion.div
        className={`absolute top-0  w-[${cloudSize.xl.width}] h-[${cloudSize.xl.height}] z-0`}
        initial={{ x: cloudSize.xl.width }}
        animate={{ x: cloudSize.xl.negativeWidth }}
        transition={{
          duration: 60,
          repeat: Infinity,

          delay: 35,
        }}
      >
        <Image src="/assets/clouds.png" fill alt="" />
      </motion.div>
      <motion.div
        className="absolute top-0  w-[1944px] h-[463px] z-0"
        initial={{ x: cloudSize.xl.width }}
        animate={{ x: cloudSize.xl.negativeWidth }}
        transition={{ duration: 60, repeat: Infinity }}
      >
        <Image src="/assets/clouds.png" fill alt="" />
      </motion.div>
    </>
  )
}

export default Cloud
