import { Request, Response } from "express";
import { PlantsServices } from "./plants.services";
import catchAsync from "../../ultils/CatchAsync";
import sendResponse from "../../ultils/sendRespons";
import httpStatus from "http-status";


const postPlants = catchAsync(
    async(req:Request, res: Response) =>{
        const data = req.body 
        const result = await PlantsServices.createPlantsInToDb(data)
        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'plants is created succesfully',
            data: result,
          });
        }
)

export const PlantController = {
    postPlants
}