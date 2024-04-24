import React from 'react'
import Image from 'next/image'
import f from '../../../public/assets/f.png'
import Logo from './logo'

const Navbar = () => {
  const links = [
    {
      name: 'About',
      url: '/about',
    },
    {
      name: 'Points',
      url: '/points',
    },
    {
      name: 'Waitlist',
      url: '/waitlist',
    },
  ]
  return (
    <div className="w-screen z-30 h-24 flex justify-between items-center bg-transparent fixed px-10 ">
      {/* logo */}
      <Logo />
      {/* desktop screen */}
      <div className="md:flex gap-[5rem] hidden  ">
        {links.map((link, index) => (
          <div key={index} className="text-white uppercase">
            {link.name}
          </div>
        ))}
      </div>
      {/* mobile screen */}
      <div className="w-screen h-screen"></div>
    </div>
  )
}

export default Navbar
