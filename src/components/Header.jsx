import React from 'react'
import logo from '../assets/shared/logo.svg'
import Navbar from './Navbar'

export default function Header() {
  return (
    <header className='absolute w-full px-6 pt-8 sm:pt-0 sm:px-0 flex place-content-between sm:items-center lg:pt-10 '>
      <img className=' w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] sm:ml-7' src={logo} alt="" />
      <div className='hidden lg:block border border-[#fff] opacity-[0.2515] w-[473px] ml-[170px] absolute z-50'></div>
      <Navbar />
    </header>
  )
}
