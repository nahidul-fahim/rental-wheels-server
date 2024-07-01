import { Request, Response } from "express";
import { UserServices } from "./user.service";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";



// create new user
const createNewUser = catchAsync(async (req: Request, res: Response) => {
    const studentData = req.body;
    const result = await UserServices.createUserIntoDb(studentData);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "User registered successfully",
        data: result
    })
})


export const UserController = { createNewUser };