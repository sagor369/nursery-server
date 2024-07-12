import { TPlantCategory } from "./category.interface";
import { Categorys } from "./category.model";

const createCategory = async (payload: TPlantCategory) => {
  const result = Categorys.create(payload);
  return result;
};
const getCategory = async () => {
  const result = ""
  return result;
};
const getSingleCategory = async (id: string,) => {
  const result = "";
  return result;
};
const updateCategory = async (id: string, payload: Partial<TPlantCategory>) => {
  const result = Categorys.create(payload);
  return result;
};
const deleteCategory = async (id:string) => {
  const result = ""
  return result;
};

export const CategoryService = {
  createCategory,
  getCategory,
  getSingleCategory,
  updateCategory,
  deleteCategory

};
