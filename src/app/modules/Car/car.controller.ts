import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { CarServices } from "./car.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";


// create new car controller
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


// get all car controller
const getAllCars = catchAsync(async (req: Request, res: Response) => {
    const result = await CarServices.getAllCarsFromDb();

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Cars retrieved successfully",
        data: result
    })
})



export const CarController = {
    createNewCar,
    getAllCars,
};