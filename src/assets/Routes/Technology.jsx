import { useState } from 'react';

import Header from "../../components/Header"
import Techbg from "../../components/Techbg"
import { tech } from "../../data/tech"

import Fotodesk from '../technology/image-launch-vehicle-portrait.jpg'
import Foto from '../technology/image-launch-vehicle-landscape.jpg'

export default function Technology() {

    const [selectedTech, setSelectedTech] = useState(tech[0]);

    const handleClick = (techItem) => {
      setSelectedTech(techItem);
    };

  return (
    <div>
      <Header />
      <Techbg />

      <div className='pt-[90px] flex justify-center md:pt-[140px] md:justify-start md:pl-[30px] lg:pl-[180px] lg:items-center lg:pt-[200px]'>
        <span className='text-TextW text-base font-bold tracking-[2.7px] opacity-[0.25] lg:text-[28px] lg:tracking-[4.725px]'>
          03
        </span>
        <span className='text-[16px] tracking-[2.7px] uppercase font-normal lg:text-[28px] lg:tracking-[4.725px]'>
          <h2 className='text-white pl-[18px]'> SPACE LAUNCH 101 </h2>
        </span>
      </div>

        <picture>
            <source media='(max-width: 999px)' srcSet={selectedTech.images.landscape}  />
            <source media='(min-width: 1000px)' srcSet={selectedTech.images.portrait}  />
            <img className=' bg-cover mx-auto pt-[40px] lg:absolute lg:right-0 2xl:right-[10%]' src={selectedTech.images.portrait} alt="Fotospace" />
        </picture>
      
        <ul className='flex text-TextW justify-center gap-5 py-7 md:py-[60px] lg:absolute lg:block lg:mx-[150px] lg:pt-[125px]'>
            {tech.map((techItem) => (
                <li
                    key={techItem.id}
                    onClick={() => handleClick(techItem)}
                    className={`rounded-full border w-12 h-12 flex items-center justify-center lg:w-[80px] lg:h-[80px] lg:my-5 lg:text-[32px] cursor-pointer ${ selectedTech.id === techItem.id ? 'bg-white text-black' : ''}`}
                >
                    {techItem.number}
                </li>
            ))}
        </ul>

        <div className="text-center lg:text-left lg:mt-[150px] lg:ml-[300px]">
            <h3 className=" text-Bblue text-[14px] tracking-[2.362px] lg:text-[16px] lg:tracking-[2.7px] "> THE TERMINOLOGY… </h3>
            <h4 className=" text-TextW text-[24px] pt-2 md:py-4 lg:text-[56px]"> {selectedTech.name} </h4>
            <p className=" text-Bblue text-[15px] leading-[25px] px-[40px] pt-5 md:pt-0 lg:px-0 lg:text-[18px] lg:leading-[32px] lg:w-[450px] 2xl:w-[600px]"> {selectedTech.description} </p>
        </div>

    </div>
  )
}
