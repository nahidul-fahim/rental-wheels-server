import { Types } from "mongoose";

export type TCarBooking = {
    car: Types.ObjectId;
    user: Types.ObjectId;
    date: string;
    startTime: string;
    endTime: null | string;
    totalCost: number;
}