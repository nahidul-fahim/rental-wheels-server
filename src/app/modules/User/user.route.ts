import express from "express";
import { UserController } from "./user.controller";
import validateRequest from "../../middlewares/validateRequest";
import { UserValidation } from "./user.validation";

const router = express.Router();

// create new user
router.post(
    "/auth/signup",
    validateRequest(UserValidation.createUserValidationSchema),
    UserController.createNewUser
)

export const UserRoutes = router;