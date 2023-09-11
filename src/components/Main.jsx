import bgcel from '../assets/home/background-home-mobile.jpg'
import bgtablet from '../assets/home/background-home-tablet.jpg'
import bgdesk from '../assets/home/background-home-desktop.jpg'

export default function Main() {
  return (
    <div>
        <picture>
            <source media='(max-width: 639px)' srcSet={bgcel}  />
            <source media='(max-width: 1000px)' srcSet={bgtablet}  />
            <source media='(min-width: 1011px)' srcSet={bgdesk}  />
            <img className=' w-full -z-20 absolute h-screen' src={bgcel} alt="Fondo" />
        </picture>

        <div className=' text-center lg:text-left lg:pt-[190px] lg:pl-[170px]'>
          <h2 
            className='pt-[200px] text-Bblue text-base font-normal tracking-[2.7px]
            sm:text-xl sm:tracking-[3.375px]
            lg:text-[28px] lg:tracking-[4,725px] '> SO, YOU WANT TO TRAVEL TO 
          </h2>
          <h1 
            className='py-4  text-TextW text-[80px] font-normal leading-[100px]
            sm:py-6 sm:text-[150px] sm:leading-[150px] 
            lg:leading-none'> SPACE 
          </h1>
          <p 
            className=' px-6 text-Bblue  text-[15px] font-normal leading-[25px]
            sm:px-[152px] sm:text-[16px] sm:leading-[28px]
            lg:text-[18px] lg:leading-[32px] lg:w-[462px] lg:h-[128px] lg:px-0 '>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience! 
          </p>
        </div>

        <div className=' justify-center items-center flex pt-[81px] sm:hidden sm:py-[156px]'>
            <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 150 150" fill="none">
                <circle cx="75" cy="75" r="75" fill="white"/>
                <text x="50%" y="50%" text-anchor="middle" alignment-baseline="middle" font-size="20" fill="#0B0D17">
                Explore
                </text>
            </svg>
        </div>
        

        <div className=' justify-center items-center md:flex sm:pt-[120px] hidden lg:hidden'>
            <svg xmlns="http://www.w3.org/2000/svg" width="242" height="242" viewBox="0 0 150 150" fill="none">
                <circle cx="75" cy="75" r="75" fill="white"/>
                <text x="50%" y="50%" text-anchor="middle" alignment-baseline="middle" font-family="Bellefair" font-size="28" font-style="normal" font-weight="400" fill="#0B0D17" letter-spacing="2" line-height="normal"
                >
                  Explore
                </text>
            </svg>
        </div>

        <div className=' justify-center items-center lg:flex sm:pt-[120px] hidden absolute top-[359px] right-[164px] 2xl:right-[350px] 2xl:top-[300px]'>
            <svg xmlns="http://www.w3.org/2000/svg" width="274" height="274" viewBox="0 0 150 150" fill="none">
                <circle cx="75" cy="75" r="75" fill="white"/>
                <text x="50%" y="50%" text-anchor="middle" alignment-baseline="middle" font-size="32" font-style="normal" font-weight="400" fill="#0B0D17" letter-spacing="2" line-height="normal"
                >
                  Explore
                </text>
            </svg>
        </div>

    </div>
  )
}
