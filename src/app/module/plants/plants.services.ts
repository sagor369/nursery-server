import { QueryBuilder } from "../../../builder/QueriBuilder";
import { TPlants } from "./plants.interface";
import { Plants } from "./plants.model";

const createPlantsInToDb = async (payload: TPlants) => {
  const result = await Plants.create(payload);
  return result;
};
const getPlants = async (query: Record<string, unknown>) => {
  const searchFields = ["name", "description"]
  const queryPlants = new QueryBuilder(Plants.find(), query)
    .search(searchFields)
    .filter()
    .sort();
    if(query.page){
      queryPlants.paginate()
    }
  const result = await queryPlants.modelQuery;
  return result;
};
const getSinglePlant = async (id: string) => {
  const result = await Plants.findById(id);
  return result;
};
const updatePlant = async (id: string, payload: Partial<TPlants>) => {
  const result = await Plants.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};
const deletePlant = async (id: string) => {
  const result = await Plants.findByIdAndUpdate(
    id,
    { isDelete: true },
    { new: true, runValidators: true }
  );
  return result;
};

export const PlantsServices = {
  createPlantsInToDb,
  getPlants,
  getSinglePlant,
  updatePlant,
  deletePlant,
};
