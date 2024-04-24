import React from 'react'
import Image from 'next/image'
const Option = ({ text }) => {
  return (
    <div className="flex items-center gap-2">
      <Image src="/assets/skeleton.png" width="18" height="18" alt="" />
      <p className="text-lg">{text}</p>
    </div>
  )
}

export default Option
