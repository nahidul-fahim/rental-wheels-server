import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { CarServices } from "./car.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";



const createNewCar = catchAsync(async (req: Request, res: Response) => {
    const carData = req.body;
    const result = await CarServices.createNewCarIntoDb(carData);

    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Car created successfully",
        data: result
    })
})



export const CarController = {
    createNewCar
};