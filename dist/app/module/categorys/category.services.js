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
exports.CategoryService = void 0;
const QueriBuilder_1 = require("../../../builder/QueriBuilder");
const category_model_1 = require("./category.model");
const createCategory = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield category_model_1.Categorys.create(payload);
    return result;
});
const getCategory = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const searchField = ["name", "description"];
    const CategoryQuery = new QueriBuilder_1.QueryBuilder(category_model_1.Categorys.find(), query)
        .search(searchField)
        .filter()
        .sort();
    const result = yield CategoryQuery.modelQuery;
    return result;
});
const getSingleCategory = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield category_model_1.Categorys.findById(id);
    return result;
});
const updateCategory = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield category_model_1.Categorys.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    });
    return result;
});
const deleteCategory = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield category_model_1.Categorys.findByIdAndUpdate(id, { isDelete: true }, { new: true, runValidators: true });
    return result;
});
exports.CategoryService = {
    createCategory,
    getCategory,
    getSingleCategory,
    updateCategory,
    deleteCategory,
};
