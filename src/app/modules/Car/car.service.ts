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


export const CarServices = {
    createNewCarIntoDb,
    getAllCarsFromDb
};