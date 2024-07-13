"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const category_router_1 = require("../module/categorys/category.router");
const plants_router_1 = require("../module/plants/plants.router");
const payment_router_1 = require("../module/payments/payment.router");
const router = (0, express_1.Router)();
const RouteModule = [
    {
        path: "/category",
        route: category_router_1.CategoryRoute,
    },
    {
        path: "/plants",
        route: plants_router_1.PlanteRouter,
    },
    {
        path: "/payment",
        route: payment_router_1.PaymentRouter,
    },
];
RouteModule.forEach((rout) => router.use(rout.path, rout.route));
exports.default = router;
