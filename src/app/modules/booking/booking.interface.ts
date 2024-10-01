import { Model, Types } from "mongoose";

export interface TCarBooking {
    car: Types.ObjectId;
    user: Types.ObjectId;
    status: "pending" | "approved" | "cancelled";
    date: string;
    startTime: string;
    endTime: null | string;
    totalCost: number;
}

export interface BookingModel extends Model<TCarBooking> {
    // checking if the booking exists
    isBookingExistsById(id: Types.ObjectId): Promise<TCarBooking>
}