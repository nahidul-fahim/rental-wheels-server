import { Schema, model } from "mongoose";
import { TCar } from "./car.interface";
import { CarStatus } from "./car.constant";


const carSchema = new Schema<TCar>({
    name: {
        type: String,
        required: [true, "Car name is required"],
        trim: true,
    },
    description: {
        type: String,
        required: [true, "Car description is required"],
        trim: true,
    },
    color: {
        type: String,
        required: [true, "Car color is required"],
        trim: true,
    },
    isElectric: {
        type: Boolean,
        required: [true, "isElectric is required"]
    },
    features: {
        type: [String],
        required: true,
    },
    pricePerHour: {
        type: Number,
        required: [true, "Price per hour is required"]
    },
    status: {
        type: String,
        required: true,
        enum: CarStatus,
        default: 'available'
    },
    isDeleted: {
        type: Boolean,
        required: true,
        default: false,
    }
},
    {
        timestamps: true,
        versionKey: false
    }
)


export const Car = model<TCar>("car", carSchema)