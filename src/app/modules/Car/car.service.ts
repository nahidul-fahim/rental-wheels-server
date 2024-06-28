import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { TCar } from "./car.interface";
import { Car } from "./car.model";

// create new car into db
const createNewCarIntoDb = async (payload: TCar) => {
    const result = await Car.create(payload);
    return result;
}

// get all car from db
const getAllCarsFromDb = async () => {
    const result = await Car.find();
    return result;
}

// get a single car
const getSingleCarFromDb = async (id: string) => {
    const result = await Car.findById(id);
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




export const CarServices = {
    createNewCarIntoDb,
    getAllCarsFromDb,
    getSingleCarFromDb,
    updateCarIntoDb
};