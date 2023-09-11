import Header from '../../components/Header.jsx'
import Destinationbg from '../../components/Destinationbg.jsx'

import MoonF from '../destination/image-moon.png'

export default function Destinations() {
  return (
    <div>
      < Header />
      < Destinationbg />
      
      <section className='lg:grid lg:grid-cols-2'>
        <div className=' lg:pt-[90px]'>
          <div className=' pt-[90px] flex justify-center md:pt-[136px] md:justify-start md:pl-[30px] lg:pl-[180px] lg:items-center'>
            <span className=' text-TextW text-base font-bold tracking-[2.7px] opacity-[0.25] lg:text-[28px] lg:tracking-[4.725px]'> 01 </span>
            <span className=' text-[16px] tracking-[2.7px] uppercase font-normal lg:text-[28px] lg:tracking-[4.725px]'> <h2 className=' text-white pl-[18px]'> Pick your destination </h2></span>
          </div>

          <img className=' mx-auto mt-[25px] w-[200px] h-[200px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] md:my-10 object-cover lg:mr-0 2xl:w-[520px] 2xl:h-[520px] 2xl:mr-[170px]' src={MoonF} alt="" />
        </div>

        <div className=' lg:pt-[280px] text-center lg:text-left lg:pl-20 lg:top-0'>
          <ul className=' text-TextW flex gap-7 justify-center py-5 text-sm uppercase tracking-[2.362px] md:tracking-[2.7px] lg:justify-start'>
            <li className=' cursor-pointer'> Moon </li>
            <li className=' cursor-pointer'> Mars </li>
            <li className=' cursor-pointer'> europa</li>
            <li className=' cursor-pointer'> Titan </li>
          </ul>

          <h3 className=' uppercase text-TextW text-[56px] lg:text-[100px]'> Moon </h3>
          <p 
          className=' text-Bblue text-[15px] leading-6 px-[30px] 
          md:leading-7 md:px-[110px] 
          lg:text-[18px] lg:leading-8 lg:px-0 lg:w-[444px]'> See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites. </p>

        <div className='my-8 border border-[#383B4B] w-[327px] mx-auto md:my-7 md:w-[573px] lg:w-[444px] lg:mx-0'> </div>

        <section className=' md:flex md:justify-center gap-10 lg:justify-start'>
          <div>
            <h6 className=' text-Bblue text-[14px] tracking-[2.362] md:w-[216px]'>AVG. DISTANCE</h6>
            <h6 className=' text-TextW text-[28px] uppercase md:w-[216px]'>384,400 km</h6>
          </div>

          <div className='pt-4 md:pt-0'>
            <h6 className=' text-Bblue text-[14px] tracking-[2.362] md:w-[216px]'>Est. travel time</h6>
            <h6 className=' text-TextW text-[28px] uppercase md:w-[216px]'>3 days</h6>
          </div>
        </section>
      </div>
     </section>

    </div>
  )
}
