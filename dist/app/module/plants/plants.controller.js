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
exports.PlantController = void 0;
const plants_services_1 = require("./plants.services");
const CatchAsync_1 = __importDefault(require("../../ultils/CatchAsync"));
const sendRespons_1 = __importDefault(require("../../ultils/sendRespons"));
const http_status_1 = __importDefault(require("http-status"));
const postPlants = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const result = yield plants_services_1.PlantsServices.createPlantsInToDb(data);
    (0, sendRespons_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'plants is created succesfully',
        data: result,
    });
}));
const getAllPlant = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = req.query;
    const result = yield plants_services_1.PlantsServices.getPlants(query);
    (0, sendRespons_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'plants is fetching succesfully',
        data: result,
    });
}));
const getSinglePlant = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield plants_services_1.PlantsServices.getSinglePlant(id);
    (0, sendRespons_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'plants is fetching succesfully',
        data: result,
    });
}));
const updatePlant = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const { id } = req.params;
    const result = yield plants_services_1.PlantsServices.updatePlant(id, data);
    (0, sendRespons_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'plants is updated succesfully',
        data: result,
    });
}));
const deletePlante = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield plants_services_1.PlantsServices.deletePlant(id);
    (0, sendRespons_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'plants is deleted succesfully',
        data: result,
    });
}));
exports.PlantController = {
    postPlants,
    getAllPlant,
    getSinglePlant,
    updatePlant,
    deletePlante
};
