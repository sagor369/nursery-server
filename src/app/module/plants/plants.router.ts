import { Router } from "express";
import { PlantController } from "./plants.controller";
import { RequestValidation } from "../../middelware/RequestValidation";
import { PlantsValidation } from "./plants.validation";

const router = Router()

router.post("/create-plant",RequestValidation(PlantsValidation), PlantController.postPlants)


export const PlanteRouter = router