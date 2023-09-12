import BurguerMenu from '../assets/shared/icon-hamburger.svg'
import CloseMenu from '../assets/shared/icon-close.svg'
import { useState } from 'react'

import { Link } from 'react-router-dom'

export default function Navbar() {

    const [menuClicked, setmenuClicked] = useState(false)

    const handleClick = () => {
        setmenuClicked( prevState => !prevState)
    }

   
    return (
    <div>

        <nav>
            <div className='cursor-pointer sm:hidden z-10 relative' onClick={handleClick}>
                {menuClicked ? <img src={CloseMenu} /> : <img src={BurguerMenu} />}
            </div>

            <ul className={`${menuClicked ? 'flex' : 'hidden'} bg-[#ffffff] bg-opacity-5 backdrop-blur-[40.7742px] z-[1] py-[118px] w-[254px] h-[667px] absolute right-0 top-[0px] flex-col pl-[32px] font-bold text-[20px] gap-8

            sm:flex sm:flex-row sm:top-0 sm:w-[450px] sm:h-auto sm:relative sm:justify-end sm:gap-5
            lg:w-[830px] lg:gap-[50px] lg:pr-[150px]

            sm:py-10 sm:pr-9
            `}>
                <li className='text-TextW cursor-pointer text-[16px] font-bold leading-normal tracking-[2.7px] sm:text-sm lg:flex lg:gap-1'>
                    <Link to={'/'}>
                        <div className=' lg:flex lg:items-center lg:gap-[5px]'>
                            <span className='sm:hidden lg:flex'>00</span>
                            <span className='text-[16px] font-normal leading-normal tracking-[2.7px] sm:text-sm sm:tracking-[2.3px] lg:tracking-[2.7px]'> HOME </span>
                        </div>
                    </Link>
                </li>

                <li className='text-TextW cursor-pointer text-[16px] font-bold leading-normal tracking-[2.7px] sm:text-sm lg:flex lg:gap-1'>
                    <Link to={'/destinations'}> 
                        <div className=' lg:flex lg:items-center lg:gap-[5px]'>
                            <span className='sm:hidden lg:flex'>01</span>
                            <span className='text-[16px] font-normal leading-normal tracking-[2.7px] sm:text-sm sm:tracking-[2.3px] lg:tracking-[2.7px]'> DESTINATION </span>
                        </div>
                    </Link>
                </li>

                <li className='text-TextW cursor-pointer text-[16px] font-bold leading-normal tracking-[2.7px] sm:text-sm lg:flex lg:gap-1'>
                    <Link to={'/crew'}>
                        <div className=' lg:flex lg:items-center lg:gap-[5px]'>
                            <span className='sm:hidden lg:flex'>02</span>
                            <span className='text-[16px] font-normal leading-normal tracking-[2.7px] sm:text-sm sm:tracking-[2.3px] lg:tracking-[2.7px]'> CREW </span>
                        </div>
                    </Link>
                </li>

                <li className='text-TextW cursor-pointer text-[16px] font-bold leading-normal tracking-[2.7px] sm:text-sm lg:flex lg:gap-1'>
                    <span className='sm:hidden lg:flex'>03</span>
                    <span className='text-[16px] font-normal leading-normal tracking-[2.7px] sm:text-sm sm:tracking-[2.3px] lg:tracking-[2.7px]'> TECHNOLOGY </span>
                </li>
            </ul>
        </nav>

    </div>
  )
}