import { TCarBooking } from "./booking.interface";
import { Booking } from "./booking.model";



// book a car services
const bookACarIntoDB = async (payload: TCarBooking) => {
    const result = await Booking.create(payload);
    return result;
}


export const CarBookingServices = {
    bookACarIntoDB,
}