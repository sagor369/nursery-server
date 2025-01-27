"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRoute = void 0;
const express_1 = require("express");
const category_controller_1 = require("./category.controller");
const RequestValidation_1 = require("../../middelware/RequestValidation");
const category_validation_1 = require("./category.validation");
const router = (0, express_1.Router)();
router.post("/create-category", (0, RequestValidation_1.RequestValidation)(category_validation_1.categoryValidation), category_controller_1.CategoryController.postCategory);
router.get("/", category_controller_1.CategoryController.getAllCategory);
router.get("/:id", category_controller_1.CategoryController.getSingleCategory);
router.patch("/:id", category_controller_1.CategoryController.updateCategory);
router.delete("/:id", category_controller_1.CategoryController.deleteCategory);
exports.CategoryRoute = router;
