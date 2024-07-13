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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlantsServices = void 0;
const QueriBuilder_1 = require("../../../builder/QueriBuilder");
const plants_model_1 = require("./plants.model");
const createPlantsInToDb = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield plants_model_1.Plants.create(payload);
    return result;
});
const getPlants = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const queryPlants = new QueriBuilder_1.QueryBuilder(plants_model_1.Plants.find(), query);
    const result = yield queryPlants.modelQuery;
    return result;
});
const getSinglePlant = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield plants_model_1.Plants.findById(id);
    return result;
});
const updatePlant = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield plants_model_1.Plants.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    });
    return result;
});
const deletePlant = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield plants_model_1.Plants.findByIdAndUpdate(id, { isDelete: true }, { new: true, runValidators: true });
    return result;
});
exports.PlantsServices = {
    createPlantsInToDb,
    getPlants,
    getSinglePlant,
    updatePlant,
    deletePlant,
};
