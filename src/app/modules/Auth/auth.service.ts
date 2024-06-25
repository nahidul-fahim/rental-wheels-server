/* eslint-disable @typescript-eslint/no-unused-vars */
import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { User } from "../User/user.model";
import { TSignInUser } from "./auth.interface";
import { comparePassword } from "./auth.utils";



// sign in user
const signInUser = async (payload: TSignInUser) => {
    const user = await User.findOne({ email: payload.email }).select("+password");
    if (!user) {
        throw new AppError(httpStatus.NOT_FOUND, "User not found!")
    }

    // checking password
    const isPasswordMatched = comparePassword(payload.password, user.password);
    if (!isPasswordMatched) {
        throw new AppError(httpStatus.NOT_FOUND, "Password is incorrect!")
    }
    const { password, ...others } = user.toObject();
    return others;
}


export const AuthServices = { signInUser };