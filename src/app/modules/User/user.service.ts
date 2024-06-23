import { TUser } from "./user.interface";
import { User } from "./user.model";


const createUserIntoDb = async (payload: TUser) => {
    const newUser = await User.create(payload);
    return newUser;
}


export const UserServices = { createUserIntoDb };