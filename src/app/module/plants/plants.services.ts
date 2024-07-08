import { TPlants } from "./plants.interface";
import { Plants } from "./plants.model";


const createPlantsInToDb = async(payload: TPlants)=>{
  const result = await Plants.create(payload)
  return result
}


export const PlantsServices = {
    createPlantsInToDb
}