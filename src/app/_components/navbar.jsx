'use client'
import { motion } from 'framer-motion'
import Logo from './logo'
import { useState } from 'react'
import Link from 'next/link'

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

const topVariants = {
  closed: {
    rotate: 0,
  },
  open: {
    rotate: 45,
    backgroundColor: '#4af5de',
  },
}
const centreVariants = {
  closed: {
    opacity: 1,
  },
  open: {
    opacity: 0,
  },
}

const bottomVariants = {
  closed: {
    rotate: 0,
  },
  open: {
    rotate: -45,
    backgroundColor: '#4af5de',
  },
}

const listVariants = {
  closed: {
    x: '100vw',
  },
  open: {
    x: 0,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
}

const listItemVariants = {
  closed: {
    opacity: 0,
    x: -10,
  },
  open: {
    opacity: 1,
    x: 0,
  },
}
const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="w-screen z-30 h-24 flex justify-between items-center bg-transparent fixed px-10 ">
      {/* logo */}
      <Link href="/">
        <Logo />
      </Link>
      {/* desktop screen */}
      <div className="md:flex gap-[5rem] hidden  ">
        {links.map((link, index) => (
          <Link key={index} href={link.url} className="text-white uppercase">
            {link.name}
          </Link>
        ))}
      </div>
      {/* mobile screen */} {/* hamburger */}
      <button
        className="w-10 h-8 flex flex-col justify-between z-50 fixed top-4 right-4 md:hidden "
        onClick={() => setOpen((prev) => !prev)}
      >
        <motion.div
          className="w-10 h-1 bg-[#4af5de] rounded origin-left"
          variants={topVariants}
          animate={open ? 'open' : 'closed'}
        ></motion.div>
        <motion.div
          className="w-10 h-1 bg-[#4af5de]  rounded"
          variants={centreVariants}
          animate={open ? 'open' : 'closed'}
        ></motion.div>
        <motion.div
          className="w-10 h-1 bg-[#4af5de]  rounded origin-left"
          variants={bottomVariants}
          animate={open ? 'open' : 'closed'}
        ></motion.div>
      </button>
      {open && (
        <motion.div
          className="fixed top-0 left-0 w-screen h-screen bg-black  flex flex-col items-center justify-center gap-8 text-4xl z-40"
          variants={listVariants}
          initial="closed"
          animate="open"
        >
          {links.map((link) => (
            <motion.div key={link.url} variants={listItemVariants}>
              <div className="z-40 uppercase text-[#4af5de]">{link.name}</div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  )
}

export default Navbar
