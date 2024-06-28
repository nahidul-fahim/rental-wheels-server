import { Router } from "express";
import { UserRoutes } from "../modules/User/user.route";
import { AuthRoutes } from "../modules/Auth/auth.route";
import { CarRoutes } from "../modules/Car/car.route";


const router = Router();

// all routes
const moduleRoutes = [
    {
        path: "",
        route: UserRoutes
    },
    {
        path: "",
        route: AuthRoutes
    },
    {
        path: "/cars",
        route: CarRoutes
    },
]


// router
moduleRoutes.forEach(route => router.use(route.path, route.route))


export default router;