import React from 'react'
import logo from '../../assets/logo.png'
import { HiOutlineMenuAlt2 } from "react-icons/hi";

const Topbar = () => {
  return (
    <div className='flex justify-between md:hidden sticky bg-gray-50 shadow-lg top-0 px-6 py-3 text-gray-600 z-50'>
      <div className="h-8 w-8 flex gap-1 items-center">
        <img src={logo} className='opacity-65 w-full h-full' alt="" />
        <p className='font-bold text-2xl'>sharre!</p>
      </div>
    </div>
  )
}

export default Topbar