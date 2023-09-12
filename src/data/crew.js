import Douglas from '../assets/crew/image-douglas-hurley.png'
import Mark from '../assets/crew/image-mark-shuttleworth.png'
import Victor from "../assets/crew/image-victor-glover.png"
import Ana from "../assets/crew/image-anousheh-ansari.png"


export const crew = [
    {
        id: '0',
        name: "Douglas Hurley",
        images: { png: Douglas },
        role: "Commander",
        bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
      },
      {
        id: '1',
        name: "Mark Shuttleworth",
        images: { png: Mark },
        role: "Mission Specialist",
        bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
      },
      {
        id: '2',
        name: "Victor Glover",
        images: { png: Victor },
        role: "Pilot",
        bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
      },
      {
        id: '3',
        name: "Anousheh Ansari",
        images: { png: Ana },
        role: "Flight Engineer",
        bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
      }
]

export function getCrew(id) {
  return crew.find((item) => item.id === id);
}
