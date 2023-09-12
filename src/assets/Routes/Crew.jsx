import { useState } from 'react';
import Header from '../../components/Header';
import Crewbg from '../../components/Crewbg';

import { crew } from '../../data/crew';

export default function Crew() {
  const [selectedMember, setSelectedMember] = useState(crew[0]);

  const handleClick = (member) => {
    setSelectedMember(member);
  };

  return (
    <div>
      <Header />
      <Crewbg />

      <div className='pt-[90px] flex justify-center md:pt-[140px] md:justify-start md:pl-[30px] lg:pl-[180px] lg:items-center'>
        <span className='text-TextW text-base font-bold tracking-[2.7px] opacity-[0.25] lg:text-[28px] lg:tracking-[4.725px]'>
          02
        </span>
        <span className='text-[16px] tracking-[2.7px] uppercase font-normal lg:text-[28px] lg:tracking-[4.725px]'>
          <h2 className='text-white pl-[18px]'> Meet your crew </h2>
        </span>
      </div>

      <section className='lg:grid lg:grid-cols-2 md:grid md:grid-cols-1'>
        <img
          className='mt-[32px] object-cover mx-auto w-[177px] h-[250px]
            md:order-last md:w-auto md:h-[570px] md:bottom-0 md:absolute md:right-0 md:left-0
            lg:order-last lg:relative lg:w-auto lg:h-[685px]
            2xl:h-[725px]'
            src={selectedMember.images.png}
          alt="team"
        />

        <div className='border w-[327px] border-[#383B4B] mx-auto md:hidden'></div>

        <div className='lg:order-first'>
        <ul
            className='flex w-[90px] h-[10px] mx-auto gap-5 py-8
              md:absolute md:bottom-[560px] md:right-0 md:left-0
              lg:bottom-[120px] lg:right-[960px] lg:flex lg:w-[132px] lg:h-[15px]
              2xl:right-[1400px] 2xl:bottom-[200px]'>
            {crew.map((member) => (
               <li
                key={member.id}
                className={`cursor-pointer ${selectedMember === member ? 'opacity-1' : ' opacity-30'}`}
                onClick={() => handleClick(member)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <circle cx="5" cy="5" r="5" fill="white"/>
                </svg>
              </li>
            ))}
          </ul>

          <div className='text-center lg:text-left lg:pl-[170px] lg:pt-[155px]'>
            <h3 className='uppercase text-TextW text-[16px] text-opacity-50 md:pt-[30px] md:text-[24px] lg:text-[32px]'>
              {selectedMember.role}
            </h3>
            <h4 className='uppercase text-TextW text-[24px] pb-4 md:text-[40px] lg:text-[56px]'>
              {selectedMember.name}
            </h4>
            <p className='text-Bblue text-[15px] leading-[25px] px-[50px] md:px-[145px] md:text-[16px] md:leading-[28px] lg:px-0 lg:text-[18px] lg:leading-8 lg:w-[444px] 2xl:w-[600px]'>
              {selectedMember.bio}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}