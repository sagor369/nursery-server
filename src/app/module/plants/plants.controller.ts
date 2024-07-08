import { Request, Response } from "express";
import { PlantsServices } from "./plants.services";


const postPlants = async(req:Request, res: Response) =>{
const data = req.body 
const result = await PlantsServices.createPlantsInToDb(data)
res.send({
    success: true,
    message: 'plant create success',
    data: result 
})
}