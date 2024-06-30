/* eslint-disable @typescript-eslint/no-unused-vars */
import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { User } from "../user/user.model";
import { TSignInUser } from "./auth.interface";
import { comparePassword, generateToken } from "./auth.utils";
import config from "../../config";


// sign in user
const signInUser = async (payload: TSignInUser) => {
    const user = await User.findOne({ email: payload.email }).select("+password");
    if (!user) {
        throw new AppError(httpStatus.NOT_FOUND, "User not found!")
    }

    // checking password
    const isPasswordMatched = comparePassword(payload.password, user.password);
    if (!isPasswordMatched) {
        throw new AppError(httpStatus.FORBIDDEN, "Password is incorrect!")
    }


    const jwtPayload = {
        userId: user?._id,
        userEmail: user?.email,
        userRole: user?.role,
    }

    // generate access token
    const accessToken = generateToken(
        jwtPayload,
        config.jwt_access_secret as string,
        config.jwt_access_expires_in as string
    )


    const { password, ...others } = user.toObject();
    return { others, accessToken };
}


export const AuthServices = { signInUser };