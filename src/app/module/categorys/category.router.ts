import { Router } from "express";
import { CategoryController } from "./category.controller";
import { RequestValidation } from "../../middelware/RequestValidation";
import { categoryValidation } from "./category.validation";


const router = Router()

router.post("/create-category" ,RequestValidation(categoryValidation), CategoryController.postCategory)
router.get("/", CategoryController.getAllCategory)
router.get("/:id", CategoryController.getSingleCategory)
router.patch("/:id", CategoryController.updateCategory)
router.delete("/:id", CategoryController.deleteCategory)


export const CategoryRoute = router