import { TUser } from "./user.interface";
import { User } from "./user.model";


const createUserIntoDb = async (payload: TUser) => {
    const newUser = await User.create(payload);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...others } = newUser.toObject();
    return others;
}


export const UserServices = { createUserIntoDb };