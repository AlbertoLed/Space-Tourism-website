import data from "../data.json"
import { Destination, CrewMember, Technology } from "./utils"
import imgMoon from "./assets/destination/image-moon.png"
import imgMars from "./assets/destination/image-mars.png"
import imgEuropa from "./assets/destination/image-europa.png"
import imgTitan from "./assets/destination/image-titan.png"
import imgDouglas from "./assets/crew/image-douglas-hurley.png"
import imgMark from "./assets/crew/image-mark-shuttleworth.png"
import imgVictor from "./assets/crew/image-victor-glover.png"
import imgAnousheh from "./assets/crew/image-anousheh-ansari.png"
import imgLaunchLandscape from "./assets/technology/image-launch-vehicle-landscape.jpg"
import imgLaunchPortrait from "./assets/technology/image-launch-vehicle-portrait.jpg"
import imgSpaceportLandscape from "./assets/technology/image-spaceport-landscape.jpg"
import imgSpaceportPortrait from "./assets/technology/image-spaceport-portrait.jpg"
import imgCapsuleLandscape from "./assets/technology/image-space-capsule-landscape.jpg"
import imgCapsulePortrait from "./assets/technology/image-space-capsule-portrait.jpg"

export const moon: Destination = {
    name: data.destinations[0].name,
    description: data.destinations[0].description,
    distance: data.destinations[0].distance,
    travel: data.destinations[0].travel,
    image: imgMoon,
}
export const mars: Destination = {
    name: data.destinations[1].name,
    description: data.destinations[1].description,
    distance: data.destinations[1].distance,
    travel: data.destinations[1].travel,
    image: imgMars,
}
export const europa: Destination = {
    name: data.destinations[2].name,
    description: data.destinations[2].description,
    distance: data.destinations[2].distance,
    travel: data.destinations[2].travel,
    image: imgEuropa,
}
export const titan: Destination = {
    name: data.destinations[3].name,
    description: data.destinations[3].description,
    distance: data.destinations[3].distance,
    travel: data.destinations[3].travel,
    image: imgTitan,
}

export const douglas: CrewMember =  {
    name: data.crew[0].name,
    role: data.crew[0].role,
    bio: data.crew[0].bio,
    image: imgDouglas,
}
export const mark: CrewMember =  {
    name: data.crew[1].name,
    role: data.crew[1].role,
    bio: data.crew[1].bio,
    image: imgMark,
}
export const victor: CrewMember =  {
    name: data.crew[2].name,
    role: data.crew[2].role,
    bio: data.crew[2].bio,
    image: imgVictor,
}
export const anousheh: CrewMember =  {
    name: data.crew[3].name,
    role: data.crew[3].role,
    bio: data.crew[3].bio,
    image: imgAnousheh,
}

export const technologies: Technology[] = [
    {
        id: 1,
        ...data.technology[0],
        images: {
            landscape: imgLaunchLandscape,
            portrait: imgLaunchPortrait,
        },
    },
    {
        id: 2,
        ...data.technology[1],
        images: {
            landscape: imgSpaceportLandscape,
            portrait: imgSpaceportPortrait,
        },
    },
    {
        id: 3,
        ...data.technology[2],
        images: {
            landscape: imgCapsuleLandscape,
            portrait: imgCapsulePortrait,
        },
    },
]