import { Router } from "express";
import { CategoryRoute } from "../module/categorys/category.router";
import { PlanteRouter } from "../module/plants/plants.router";

const router = Router();

const RouteModule = [
  {
    path: "category",
    route: CategoryRoute,
  },
  {
    path: "plants",
    route: PlanteRouter,
  },
];

RouteModule.forEach((rout) => router.use(rout.path, rout.route));
export default router;
