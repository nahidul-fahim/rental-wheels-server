import { Router } from "express";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "../user/user.constant";
import validateRequest from "../../middlewares/validateRequest";
import { BookingValidation } from "./booking.validation";
import { CarBooking } from "./booking.controller";


const router = Router();


// book a car
router.post(
    "/",
    auth(USER_ROLE.user),
    validateRequest(BookingValidation.carBookingValidationSchema),
    CarBooking.bookACar
)

// get user's bookings
router.get(
    "/my-bookings",
    auth(USER_ROLE.user),
    CarBooking.getUsersBookings
)



export const CarBookingRoutes = router;