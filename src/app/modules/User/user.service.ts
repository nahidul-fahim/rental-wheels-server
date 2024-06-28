import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { TUser } from "./user.interface";
import { User } from "./user.model";


const createUserIntoDb = async (payload: TUser) => {
    // checking if the user exists
    const isExistingUser = await User.isUserExistsByEmail(payload.email)
    if (isExistingUser) {
        throw new AppError(httpStatus.CONFLICT, "The user already exists!")
    }
    const newUser = await User.create(payload);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...others } = newUser.toObject();
    return others;
}


export const UserServices = { createUserIntoDb };