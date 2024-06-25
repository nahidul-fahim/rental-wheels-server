import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AuthServices } from "./auth.service";

// sing in user controller
const signInController = catchAsync(async (req, res) => {
    const result = await AuthServices.signInUser(req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "User fetched successfully!",
        data: result
    })
})


export const AuthController = { signInController };