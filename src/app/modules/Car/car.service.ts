import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { TCar, TCarReturn } from "./car.interface";
import { Car } from "./car.model";
import { Booking } from "../booking/booking.model";
import mongoose from "mongoose";
import { totalTime } from "./car.utils";



// create new car into db
const createNewCarIntoDb = async (payload: TCar) => {
    const result = await Car.create(payload);
    return result;
}

// get all car from db
const getAllCarsFromDb = async () => {
    const result = await Car.find();
    if (!result) {
        throw new AppError(httpStatus.NOT_FOUND, "No data found!")
    }
    return result;
}

// get a single car
const getSingleCarFromDb = async (id: string) => {
    const result = await Car.findById(id);
    if (!result) {
        throw new AppError(httpStatus.NOT_FOUND, "No data found!")
    }
    return result;
}


// update car data
const updateCarIntoDb = async (id: string, payload: Partial<TCar>) => {
    const result = await Car.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true
    });
    return result;
}


// delete a car
const deleteCarFromDb = async (id: string) => {
    const result = await Car.findByIdAndUpdate(
        id,
        { isDeleted: true },
        {
            new: true,
            runValidators: true
        });
    return result;
}







export const CarServices = {
    createNewCarIntoDb,
    getAllCarsFromDb,
    getSingleCarFromDb,
    updateCarIntoDb,
    deleteCarFromDb,
    // returnCarIntoDb
};