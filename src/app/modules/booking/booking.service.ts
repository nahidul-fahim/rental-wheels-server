import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { TCarBooking } from "./booking.interface";
import { Booking } from "./booking.model";


// book a car services
const bookACarIntoDB = async (payload: TCarBooking, user: string) => {
    const bookingData = {
        ...payload,
        user: user,
    };
    const createdBooking = await Booking.create(bookingData);
    
    if (!createdBooking) {
        throw new AppError(httpStatus.NOT_FOUND, "Failed to create booking")
    }

    const populatedBooking = await Booking.findById(createdBooking._id)
        .populate('car')
        .populate({ path: 'user', select: '-createdAt -updatedAt' })

    return populatedBooking;
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