import { Router } from "express";
import { UserRoutes } from "../modules/User/user.route";


const router = Router();

// all routes
const moduleRoutes = [
    {
        path: "",
        route: UserRoutes
    }
]


// router
moduleRoutes.forEach(route => router.use(route.path, route.route))


export default router;