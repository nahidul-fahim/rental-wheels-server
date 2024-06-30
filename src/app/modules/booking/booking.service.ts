import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { TCarBooking } from "./booking.interface";
import { Booking } from "./booking.model";


// book a car services
const bookACarIntoDB = async (payload: TCarBooking, user: string) => {
    // const { car, carId, ...others } = payload;
    const bookingData = {
        ...payload,
        user: user
    };
    const createdBooking = (await Booking.create(bookingData)).populate({ path: 'user' });
    if (!createdBooking) {
        throw new AppError(httpStatus.NOT_FOUND, "Failed to create booking")
    }

    // const result = await Booking.findById(createdBooking._id).populate('carId').populate('user')

    return createdBooking;
}


export const CarBookingServices = {
    bookACarIntoDB,
}