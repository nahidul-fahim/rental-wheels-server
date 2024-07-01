import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import auth from "../../middlewares/auth";
import { CarValidation } from "./car.validation";
import { CarController } from "./car.controller";
import { USER_ROLE } from "../user/user.constant";


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

// delete a car
router.delete(
    "/:id",
    auth(USER_ROLE.admin),
    CarController.deleteCar
)

router.put(
    "/test",
    CarController.returnCar
)

// return a car
router.put(
    "/return",
    auth(USER_ROLE.admin),
    validateRequest(CarValidation.carReturnValidationSchema),
    CarController.returnCar
)


export const CarRoutes = router;