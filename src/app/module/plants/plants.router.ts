import { Router } from "express";
import { PlantController } from "./plants.controller";
import { RequestValidation } from "../../middelware/RequestValidation";
import { PlantsValidation } from "./plants.validation";

const router = Router()

router.post("/create-plant",RequestValidation(PlantsValidation), PlantController.postPlants)
router.get("/", PlantController.getAllPlant)
router.get("/:id", PlantController.getSinglePlant)
router.patch("/:id", PlantController.updatePlant)
router.delete("/:id", PlantController.deletePlante)


export const PlanteRouter = router