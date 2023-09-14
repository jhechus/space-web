import Bgtablet from '../assets/technology/background-technology-tablet.jpg' 
import Bgmobile from '../assets/technology/background-technology-mobile.jpg' 
import Bgdesk from '../assets/technology/background-technology-desktop.jpg' 

export default function Techbg() {
  return (
    <div>
      <picture>
            <source media='(max-width: 639px)' srcSet={Bgmobile}  />
            <source media='(max-width: 1000px)' srcSet={Bgtablet}  />
            <source media='(min-width: 1011px)' srcSet={Bgdesk}  />
            <img className=' w-full -z-20 absolute h-screen' src={Bgmobile} alt="Fondo" />
        </picture>
    </div>
  )
}

