import { QueryBuilder } from "../../../builder/QueriBuilder";
import { TPlantCategory } from "./category.interface";
import { Categorys } from "./category.model";

const createCategory = async (payload: TPlantCategory) => {
  const result = Categorys.create(payload);
  return result;
};
const getCategory = async (query: Record<string, unknown>) => {
  const searchField = ['name', 'description']
  const CategoryQuery = new QueryBuilder(Categorys.find(), query).search(searchField).filter().sort()
  const result = CategoryQuery.modelQuery
  return result;
};
const getSingleCategory = async (id: string,) => {
  const result = Categorys.findById(id);
  return result;
};
const updateCategory = async (id: string, payload: Partial<TPlantCategory>) => {
  const result = Categorys.findByIdAndUpdate(id, payload, {new:true, runValidators: true});
  return result;
};
const deleteCategory = async (id:string) => {

  const result = Categorys.findByIdAndUpdate(id, {isDelete: true}, {new:true, runValidators: true})
  return result;
};

export const CategoryService = {
  createCategory,
  getCategory,
  getSingleCategory,
  updateCategory,
  deleteCategory

};
