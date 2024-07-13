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
exports.PaymentService = void 0;
const QueriBuilder_1 = require("../../../builder/QueriBuilder");
const config_1 = __importDefault(require("../../config"));
const payment_model_1 = require("./payment.model");
const stripe_1 = __importDefault(require("stripe"));
const paymentIntent = (amounts) => __awaiter(void 0, void 0, void 0, function* () {
    const amount = amounts * 100;
    const stripes = new stripe_1.default(config_1.default.client_secrete);
    const paymentIntent = yield stripes.paymentIntents.create({
        amount,
        currency: "usd",
    });
    return paymentIntent;
});
const createPayment = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield payment_model_1.Payments.create(payload);
    return result;
});
const getPayment = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const searchField = ["userId", "productId", "paymentId"];
    const PaymentQuery = new QueriBuilder_1.QueryBuilder(payment_model_1.Payments.find(), query)
        .search(searchField)
        .filter()
        .sort();
    const result = yield PaymentQuery.modelQuery;
    return result;
});
const getSinglePayment = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield payment_model_1.Payments.findById(id);
    return result;
});
const updatePayment = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield payment_model_1.Payments.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    });
    return result;
});
exports.PaymentService = {
    createPayment,
    getPayment,
    getSinglePayment,
    updatePayment,
    paymentIntent
};
