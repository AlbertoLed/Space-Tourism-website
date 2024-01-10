import data from "../data.json"
import { Destination } from "./utils"
import imgMoon from "./assets/destination/image-moon.png"
import imgMars from "./assets/destination/image-mars.png"
import imgEuropa from "./assets/destination/image-europa.png"
import imgTitan from "./assets/destination/image-titan.png"

export const moon: Destination = {
    name: data.destinations[0].name,
    description: data.destinations[0].description,
    distance: data.destinations[0].distance,
    travel: data.destinations[0].travel,
    image: imgMoon
}
export const mars: Destination = {
    name: data.destinations[1].name,
    description: data.destinations[1].description,
    distance: data.destinations[1].distance,
    travel: data.destinations[1].travel,
    image: imgMars
}
export const europa: Destination = {
    name: data.destinations[2].name,
    description: data.destinations[2].description,
    distance: data.destinations[2].distance,
    travel: data.destinations[2].travel,
    image: imgEuropa
}
export const titan: Destination = {
    name: data.destinations[3].name,
    description: data.destinations[3].description,
    distance: data.destinations[3].distance,
    travel: data.destinations[3].travel,
    image: imgTitan
}