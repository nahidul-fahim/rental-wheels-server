import { Router } from "express";
import { UserRoutes } from "../modules/User/user.route";
import { AuthRoutes } from "../modules/Auth/auth.route";


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
]


// router
moduleRoutes.forEach(route => router.use(route.path, route.route))


export default router;