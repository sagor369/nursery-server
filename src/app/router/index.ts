import { Router } from "express";
import { CategoryRoute } from "../module/categorys/category.router";
import { PlanteRouter } from "../module/plants/plants.router";
import { PaymentRouter } from "../module/payments/payment.router";

const router = Router();

const RouteModule = [
  {
    path: "/category",
    route: CategoryRoute,
  },
  {
    path: "/plants",
    route: PlanteRouter,
  },
  {
    path: "/payment",
    route: PaymentRouter,
  },
];

RouteModule.forEach((rout) => router.use(rout.path, rout.route));
export default router;
