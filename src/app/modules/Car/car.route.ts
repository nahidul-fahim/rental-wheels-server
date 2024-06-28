import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { CarValidation } from "./car.validation";
import { CarController } from "./car.controller";
import auth from "../../middlewares/auth";


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
    auth(),
    CarController.getAllCars
)



export const CarRoutes = router;