import { Schema, model } from "mongoose";
import { BookingModel, TCarBooking } from "./booking.interface";


const bookingSchema = new Schema<TCarBooking, BookingModel>({
    car: {
        type: Schema.Types.ObjectId,
        required: [true, "Car ID is required"],
        ref: "Car"
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    status: {
        type: String,
        enum: ["pending", "approved", "cancelled"],
        default: "pending",
        required: true
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
    }
)


bookingSchema.statics.isBookingExistsById = async function (id: string) {
    return await Booking.findById(id)
}



export const Booking = model<TCarBooking, BookingModel>("Booking", bookingSchema)