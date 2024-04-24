import Image from 'next/image'
import OptionBlock from './_components/optionBlock'
import Cloud from './_components/cloud'
export default function Home() {
  return (
    <div className="bg-black w-screen h-screen relative z-20">
      <OptionBlock />
      <div className="absolute right-0 bottom-0 w-[1515px] h-[944px] z-10">
        <Image src="/assets/buildings.png" fill alt="" />
      </div>
      <Cloud />
    </div>
  )
}
