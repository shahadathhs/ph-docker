import { Router } from "express";
import { LogsRoutes } from "../modules/logs/logs.routes";

type TModuleRoutes = {
  path: string;
  route: Router;
};

const router = Router();

const moduleRoutes: TModuleRoutes[] = [
  {
    path: "/logs",
    route: LogsRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

const appRoutes = router;

export default appRoutes;
