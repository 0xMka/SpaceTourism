import { createContext } from "react";
import imgDouglas from "../assets/crew/image-douglas-hurley.webp";
import imgMark from "../assets/crew/image-mark-shuttleworth.webp";
import imgVictor from "../assets/crew/image-victor-glover.webp";
import imgAnousheh from "../assets/crew/image-anousheh-ansari.png";

export const CrewDataContext = createContext("douglas");

export const DATA = {
  page: {
    number: "02",
    title: "Meet your crew",
  },
  douglas: {
    job: "Commander",
    name: "Douglas Hurley",
    description:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    img: imgDouglas,
  },
  mark: {
    job: "Mission Specialist",
    name: "MARK SHUTTLEWORTH",
    description:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    img: imgMark,
  },
  victor: {
    job: "PILOT",
    name: "Victor Glover",
    description:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    img: imgVictor,
  },
  anousheh: {
    job: "Flight Engineer",
    name: "Anousheh Ansari",
    description:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    img: imgAnousheh,
  },
};
