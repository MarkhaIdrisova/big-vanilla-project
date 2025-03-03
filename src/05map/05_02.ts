import {GovernmentBuildingsType, HouseType} from "../02/02_02";

export const getStreetsTitleOfGovermentsBuildings =
    (buildings: Array<GovernmentBuildingsType>) => {
        return buildings.map(b => b.address.street.title)
    }

export const getStreetsTitleOfHouses =
    (houses: Array<HouseType>) => {
        return houses.map(h => h.address.street.title)
    }

    export function createMessage(houses: Array<HouseType>){
    return houses.map(h => `Hello guys from ${h.address.street.title}`)

    }