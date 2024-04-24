import React from 'react'
import Image from 'next/image'
const Logo = () => {
  return (
    <div className="flex">
      <div className="w-4 h-5  ">
        <Image src="/assets/f.png" alt="logo" width="16" height="20" />
      </div>
      <div className="w-4 h-5">
        <Image src="/assets/a.png" alt="logo" width="16" height="20" />
      </div>

      <div className="w-4 h-5  ">
        <Image src="/assets/r.png" alt="logo" width="16" height="20" />
      </div>

      <div className="w-4 h-5  ">
        <Image src="/assets/e.png" alt="logo" width="16" height="20" />
      </div>

      <div className="w-3 h-5 "></div>

      <div className="w-4 h-5  ">
        <Image src="/assets/p.png" alt="logo" width="16" height="20" />
      </div>

      <div className="w-4 h-5  ">
        <Image src="/assets/l.png" alt="logo" width="16" height="20" />
      </div>

      <div className="w-4 h-5 ">
        <Image src="/assets/a.png" alt="logo" width="16" height="20" />
      </div>

      <div className="w-4 h-5 ">
        <Image src="/assets/y.png" alt="logo" width="16" height="20" />
      </div>
    </div>
  )
}

export default Logo
