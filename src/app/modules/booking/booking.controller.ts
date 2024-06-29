import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { CarBookingServices } from "./booking.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";


// booking a car controller
const bookACar = catchAsync(async (req: Request, res: Response) => {
    const result = await CarBookingServices.bookACarIntoDB(req.body);

    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Car booked successfully",
        data: result
    })
})


export const CarBooking = {
    bookACar,
}