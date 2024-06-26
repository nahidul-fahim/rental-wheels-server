import { Types } from "mongoose";

export type TCarStatus = 'available' | 'unavailable'

export type TCar = {
    name: string;
    description: string;
    color: string;
    isElectric: boolean;
    features: string[];
    pricePerHour: number;
    status: TCarStatus;
    isDeleted: boolean;
}

export type TCarReturn = {
    bookingId: Types.ObjectId;
    endTime: string;
}