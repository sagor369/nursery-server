"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryController = void 0;
const category_services_1 = require("./category.services");
const sendRespons_1 = __importDefault(require("../../ultils/sendRespons"));
const http_status_1 = __importDefault(require("http-status"));
const CatchAsync_1 = __importDefault(require("../../ultils/CatchAsync"));
const postCategory = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const result = yield category_services_1.CategoryService.createCategory(data);
    (0, sendRespons_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Plants Category is created succesfully",
        data: result,
    });
}));
const getSingleCategory = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield category_services_1.CategoryService.getSingleCategory(id);
    (0, sendRespons_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Plants Category is fetch succesfully",
        data: result,
    });
}));
const getAllCategory = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = req.query;
    const result = yield category_services_1.CategoryService.getCategory(query);
    (0, sendRespons_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Plants Category is fetch succesfully",
        data: result,
    });
}));
const updateCategory = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const { id } = req.params;
    const result = yield category_services_1.CategoryService.updateCategory(id, data);
    (0, sendRespons_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Plants Category is updated succesfully",
        data: result,
    });
}));
const deleteCategory = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield category_services_1.CategoryService.deleteCategory(id);
    (0, sendRespons_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Plants Category is deleted succesfully",
        data: result,
    });
}));
exports.CategoryController = {
    postCategory,
    getAllCategory,
    getSingleCategory,
    updateCategory,
    deleteCategory,
};
