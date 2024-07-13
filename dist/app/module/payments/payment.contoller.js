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
exports.PaymentController = void 0;
const CatchAsync_1 = __importDefault(require("../../ultils/CatchAsync"));
const sendRespons_1 = __importDefault(require("../../ultils/sendRespons"));
const http_status_1 = __importDefault(require("http-status"));
const payment_services_1 = require("./payment.services");
const paymentIntent = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { amount } = req.body;
    const { client_secret } = yield payment_services_1.PaymentService.paymentIntent(amount);
    (0, sendRespons_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Payment is created succesfully",
        data: { client_secret },
    });
}));
const postPayment = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const result = yield payment_services_1.PaymentService.createPayment(data);
    (0, sendRespons_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Payment is created succesfully",
        data: result,
    });
}));
const getAllPayment = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = req.query;
    const result = yield payment_services_1.PaymentService.getPayment(query);
    (0, sendRespons_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Payment is fetch succesfully",
        data: result,
    });
}));
const getSinglePayment = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield payment_services_1.PaymentService.getSinglePayment(id);
    (0, sendRespons_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Payment is fetch succesfully",
        data: result,
    });
}));
const updatePayment = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const { id } = req.params;
    const result = yield payment_services_1.PaymentService.updatePayment(id, data);
    (0, sendRespons_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Payment is updated succesfully",
        data: result,
    });
}));
exports.PaymentController = {
    postPayment,
    getAllPayment,
    getSinglePayment,
    updatePayment,
    paymentIntent,
};
