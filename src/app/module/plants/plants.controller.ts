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
const getAllPlant = catchAsync(
    async(req:Request, res: Response) =>{
        const query = req.query 
        const result = await PlantsServices.getPlants(query)
        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'plants is fetching succesfully',
            data: result,
          });
        }
)
const getSinglePlant = catchAsync(
    async(req:Request, res: Response) =>{
        const {id} = req.params 
        const result = await PlantsServices.getSinglePlant(id)
        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'plants is fetching succesfully',
            data: result,
          });
        }
)
const updatePlant = catchAsync(
    async(req:Request, res: Response) =>{
        const data = req.body 
        const {id} = req.params
        const result = await PlantsServices.updatePlant(id, data)
        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'plants is updated succesfully',
            data: result,
          });
        }
)
const deletePlante = catchAsync(
    async(req:Request, res: Response) =>{
        const {id} = req.params 
        const result = await PlantsServices.deletePlant(id)
        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'plants is deleted succesfully',
            data: result,
          });
        }
)

export const PlantController = {
    postPlants,
    getAllPlant,
    getSinglePlant,
    updatePlant,
    deletePlante
}