import DesMobile from '../assets/destination/background-destination-mobile.jpg'
import DesTablet from '../assets/destination/background-destination-tablet.jpg'
import DesDesk from '../assets/destination/background-destination-desktop.jpg'

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
