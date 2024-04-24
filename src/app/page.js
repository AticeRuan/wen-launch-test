'use client'
import Image from 'next/image'
import OptionBlock from './_components/optionBlock'
import Cloud from './_components/cloud'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <motion.div
      className="h-full w-full bg-black "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <div className="bg-black w-screen h-screen relative overflow-hidden">
        <Cloud />

        <div className="absolute z-20  p-6 xl:top-[187px] 2xl:right-[70vw] 2xl:top-[30vh] xl:right-[317px] xl:bottom-auto bottom-[calc(450px*944/1515)] right-[calc(50vw-140px)] md:bottom-[calc(800px*944/1515+10vh)] md:right-[calc(50vw-250px)]  bg-[rgba(0,0,0,0.5)] border-[rgba(255,255,255,0.4)] border-[1px] rounded-xl 2xl:border-none 2xl:bg-transparent ">
          <OptionBlock />
        </div>
        <div className="absolute lg:right-auto lg:left-0 xl:left-auto xl:right-0 right-0  bottom-0 md:w-[800px] md:h-[calc(800px*944/1515)] 2xl:w-[2000px] 2xl:h-[1245] lg:w-[1515px] lg:h-[944px] z-10 sm:w-[600px] sm:h-[calc(600px*944/1515)] w-[450px] h-[calc(450px*944/1515)]">
          <Image src="/assets/buildings.png" fill alt="building" />
        </div>
      </div>
    </motion.div>
  )
}
