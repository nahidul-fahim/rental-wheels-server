import { Schema, model } from "mongoose";
import { TCarBooking } from "./booking.interface";


const bookingSchema = new Schema<TCarBooking>({
    car: {
        type: Schema.Types.ObjectId,
        required: [true, "Car ID is required"],
        ref: "Car"
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    date: {
        type: String,
        required: [true, "Date is required"],
        trim: true
    },
    startTime: {
        type: String,
        required: [true, "Start time is required"],
        trim: true
    },
    endTime: {
        type: String,
        default: null,
        trim: true
    },
    totalCost: {
        type: Number,
        default: 0,
        required: true,
        trim: true
    }
},
    {
        timestamps: true,
        versionKey: false
    })



export const Booking = model<TCarBooking>("Booking", bookingSchema)