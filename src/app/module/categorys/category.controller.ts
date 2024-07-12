import { Request, Response } from "express";
import { CategoryService } from "./category.services";
import sendResponse from "../../ultils/sendRespons";
import httpStatus from "http-status";

const postCategory = async (req: Request, res: Response) => {
  const data = req.body;
  const result = await CategoryService.createCategory(data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Plants Category is created succesfully',
    data: result,
  });
};


export const CategoryController = {
postCategory
}