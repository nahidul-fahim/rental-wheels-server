import { Schema } from "mongoose";
import { TCar } from "./car.interface";


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
        required: true
    },
    features: {
        type: [String],
        required: true,
    },
    pricePerHour: {
        type: Number,
        required: [true, "Price per hour is required"]
    }
})