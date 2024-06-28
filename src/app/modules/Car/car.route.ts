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
    auth(USER_ROLE.admin),
    validateRequest(CarValidation.createCarValidationSchema),
    CarController.createNewCar
)

// get all cars
router.get(
    "/",
    CarController.getAllCars
)

// get single car
router.get(
    "/:id",
    CarController.getSingleCar
)

// update single car
router.put(
    "/:id",
    auth(USER_ROLE.admin),
    validateRequest(CarValidation.updateCarValidationSchema),
    CarController.updateCar
)



export const CarRoutes = router;