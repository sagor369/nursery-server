import { Router } from "express";
import { CategoryController } from "./category.controller";
import { RequestValidation } from "../../middelware/RequestValidation";
import { categoryValidation } from "./category.validation";


const router = Router()

router.post("/" ,RequestValidation(categoryValidation), CategoryController.postCategory)


export const CategoryRoute = router