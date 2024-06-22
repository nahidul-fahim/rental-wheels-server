import { Schema, model } from "mongoose";
import { TUser } from "./user.interface";


const userSchema = new Schema<TUser>({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        trim: true,
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, "Password must be at least 6 characters long"]
    },
    phone: {
        type: String,
        required: [true, 'Phone is required'],
        trim: true,
    },
    address: {
        type: String,
        required: [true, 'Address is required'],
        trim: true,
    }
}, { timestamps: true });



export const User = model<TUser>('user', userSchema)