import { Request, Response } from "express";
import { CategoryService } from "./category.services";
import sendResponse from "../../ultils/sendRespons";
import httpStatus from "http-status";
import catchAsync from "../../ultils/CatchAsync";

const postCategory = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const result = await CategoryService.createCategory(data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Plants Category is created succesfully",
    data: result,
  });
});
const getSingleCategory = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await CategoryService.getSingleCategory(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Plants Category is fetch succesfully",
    data: result,
  });
});
const getAllCategory = catchAsync(async (req: Request, res: Response) => {
  const query = req.query;
  const result = await CategoryService.getCategory(query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Plants Category is fetch succesfully",
    data: result,
  });
});
const updateCategory = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const { id } = req.params;
  const result = await CategoryService.updateCategory(id, data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Plants Category is updated succesfully",
    data: result,
  });
});
const deleteCategory = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await CategoryService.deleteCategory(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Plants Category is deleted succesfully",
    data: result,
  });
});

export const CategoryController = {
  postCategory,
  getAllCategory,
  getSingleCategory,
  updateCategory,
  deleteCategory,
};
