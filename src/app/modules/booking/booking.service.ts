import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { TCarBooking } from "./booking.interface";
import { Booking } from "./booking.model";
import { Car } from "../car/car.model";
import mongoose from "mongoose";


// book a car services
const bookACarIntoDB = async (payload: TCarBooking, user: string) => {
    const bookingData = {
        ...payload,
        user: user,
    };

    const session = await mongoose.startSession();

    try {
        session.startTransaction();

        const createdBooking = await Booking.create([bookingData], { session });
        if (!createdBooking) {
            throw new AppError(httpStatus.NOT_FOUND, "Failed to create booking")
        }
        const updateCarStatus = await Car.findByIdAndUpdate(
            payload.car,
            { status: 'unavailable' },
            { new: true, session },
        )
        if (!updateCarStatus) {
            throw new AppError(httpStatus.NOT_FOUND, "Failed to book car!")
        }

        await session.commitTransaction();
        await session.endSession();

        const populatedBooking = await Booking.findById(createdBooking[0]._id)
            .populate('car')
            .populate({ path: 'user', select: '-createdAt -updatedAt' })

        return populatedBooking;
    }
    catch (error) {
        await session.abortTransaction();
        await session.endSession();
        throw new AppError(httpStatus.NOT_FOUND, "Failed to book car!")
    }
}


// get user's bookings
const getUsersBookingsFromDb = async (user: string) => {
    const result = await Booking.find({ user })
        .populate('car')
        .populate({ path: 'user', select: '-createdAt -updatedAt' })
    return result;
}


export const CarBookingServices = {
    bookACarIntoDB,
    getUsersBookingsFromDb
}