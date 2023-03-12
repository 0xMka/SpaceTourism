import { createContext } from "react";
import imgMobileLAUNCH from "../assets/technology/image-launch-vehicle-landscape.jpg";
import imgDesktopLAUNCH from "../assets/technology/image-launch-vehicle-portrait.jpg";
import imgMobileSPACEPORT from "../assets/technology/image-spaceport-landscape.jpg";
import imgDesktopSPACEPORT from "../assets/technology/image-spaceport-portrait.jpg";
import imgMobileSPACECAPSULE from "../assets/technology/image-space-capsule-landscape.jpg";
import imgDesktopSPACECAPSULE from "../assets/technology/image-space-capsule-portrait.jpg";

export const TechnologyDataContext = createContext("launch");

export const DATA = {
  page: {
    number: "03",
    title: "SPACE LAUNCH 101",
  },
  launch: {
    title: "LAUNCH VEHICLE",
    text: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    imgMobile: imgMobileLAUNCH,
    imgDesktop: imgDesktopLAUNCH,
  },
  spaceport: {
    title: "SPACEPORT",
    text: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    imgMobile: imgMobileSPACEPORT,
    imgDesktop: imgDesktopSPACEPORT,
  },
  spaceCapsule: {
    title: "SPACE CAPSULE",
    text: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    imgMobile: imgMobileSPACECAPSULE,
    imgDesktop: imgDesktopSPACECAPSULE,
  },
};
