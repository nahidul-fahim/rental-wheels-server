import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { CarValidation } from "./car.validation";
import { CarController } from "./car.controller";


const router = Router();

// create new car
router.post(
    "/",
    validateRequest(CarValidation.createCarValidationSchema),
    CarController.createNewCar
)



export const CarRoutes = router;