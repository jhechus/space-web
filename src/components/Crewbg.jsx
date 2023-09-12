import DesMobile from '../assets/crew/background-crew-mobile.jpg'
import DesTablet from '../assets/crew/background-crew-tablet.jpg'
import DesDesk from '../assets/crew/background-crew-desktop.jpg'

export default function Destinationbg() {
  return (
    <div>
      <picture>
            <source media='(max-width: 639px)' srcSet={DesMobile}  />
            <source media='(max-width: 1000px)' srcSet={DesTablet}  />
            <source media='(min-width: 1011px)' srcSet={DesDesk}  />
            <img className=' w-full -z-20 absolute h-screen' src={DesMobile} alt="Fondo" />
        </picture>
    </div>
  )
}
