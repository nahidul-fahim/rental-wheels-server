import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { CarValidation } from "./car.validation";
import { CarController } from "./car.controller";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "../User/user.constant";


const router = Router();

// create new car
router.post(
    "/",
    validateRequest(CarValidation.createCarValidationSchema),
    CarController.createNewCar
)

// create new car
router.get(
    "/",
    auth(USER_ROLE.admin),
    CarController.getAllCars
)



export const CarRoutes = router;