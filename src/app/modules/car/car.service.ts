import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { TCar, TCarReturn } from "./car.interface";
import { Car } from "./car.model";
import { Booking } from "../booking/booking.model";
import mongoose from "mongoose";
import { totalTime } from "./car.utils";

// all queries type
type AllQueriesType = {
    carType?: string;
}

// create new car into db
const createNewCarIntoDb = async (payload: TCar) => {
    const result = await Car.create(payload);
    return result;
}

// get all car from db
const getAllCarsFromDb = async (query: Record<string, unknown>) => {
    const allQueries: AllQueriesType = {};

    // Apply filters if they exist
    if (query.carType) {
        allQueries.carType = query.carType as string;
    }
    const result = await Car.find(allQueries);
    if (result.length === 0) {
        throw new AppError(httpStatus.NOT_FOUND, "No cars found matching the criteria", []);
    }
    return result;
};

// get a single car
const getSingleCarFromDb = async (id: string) => {
    const result = await Car.findById(id);
    if (!result) {
        throw new AppError(httpStatus.NOT_FOUND, "No data found!", [])
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

// return a car and update necessary data
const returnCarIntoDb = async (payload: TCarReturn) => {
    const id = payload?.bookingId;
    const booking = await Booking.isBookingExistsById(id);
    if (!booking) {
        throw new AppError(httpStatus.NOT_FOUND, "Booking not found!")
    }

    const session = await mongoose.startSession();

    try {
        session.startTransaction();

        // update car status
        const updateCarStatus = await Car.findByIdAndUpdate(
            booking?.car,
            { status: 'available' },
            { new: true, session }
        );
        if (!updateCarStatus) {
            throw new AppError(httpStatus.NOT_FOUND, "Failed to return car!");
        }

        // calculate total cost
        const totalBookedTime = await totalTime(
            booking?.startTime as string,
            payload?.endTime as string
        );

        const car = await Car.findById(booking?.car);

        const totalCost = totalBookedTime * (car?.pricePerHour as number);
        const updatedTotalCost = await Booking.findByIdAndUpdate(
            id,
            { totalCost: totalCost, endTime: payload?.endTime },
            { new: true, session }
        )
            .populate('car')
            .populate({ path: 'user', select: '-createdAt -updatedAt' });

        await session.commitTransaction();
        await session.endSession();

        return updatedTotalCost;

    } catch (error) {
        await session.abortTransaction();
        await session.endSession();
        throw new AppError(httpStatus.NOT_FOUND, "Failed to return car")
    }
};


export const CarServices = {
    createNewCarIntoDb,
    getAllCarsFromDb,
    getSingleCarFromDb,
    updateCarIntoDb,
    deleteCarFromDb,
    returnCarIntoDb
};