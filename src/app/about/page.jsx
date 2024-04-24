'use client'
import { motion } from 'framer-motion'
const About = () => {
  return (
    <motion.div
      className="h-full w-full bg-black "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <div className="w-screen h-screen flex items-center justify-center bg-black text-[8rem] uppercase">
        About
      </div>
    </motion.div>
  )
}

export default About
