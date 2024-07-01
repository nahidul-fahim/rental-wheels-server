import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { CarBookingServices } from "./booking.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";


// booking a car controller
const bookACar = catchAsync(async (req: Request, res: Response) => {
    const userData = req.user;
    const { carId, ...others } = req.body;
    const formattedBookingData = { car: carId, ...others };
    const result = await CarBookingServices.bookACarIntoDB(formattedBookingData, userData.userId);

    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Car booked successfully",
        data: result
    })
})


// getting all the bookings of a user controller
const getUsersBookings = catchAsync(async (req: Request, res: Response) => {
    const { userId } = req.user;
    const result = await CarBookingServices.getUsersBookingsFromDb(userId);

    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "My Bookings retrieved successfully",
        data: result
    })
})


// getting all the bookings for admin
const getAllBookings = catchAsync(async (req: Request, res: Response) => {
    const query = req?.query;
    const result = await CarBookingServices.getAllBookingsFromDb(query);

    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Bookings retrieved successfully",
        data: result
    })
})


export const CarBooking = {
    bookACar,
    getUsersBookings,
    getAllBookings
}