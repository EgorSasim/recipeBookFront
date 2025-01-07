import { userApiService } from "@/api/user/userApi.service";
import type { UserModel } from "./userModel.typings";

export const userModelService = {
    getUsers(): Promise<UserModel[]> {
        return userApiService.getUsers();
    },

    getUser(id: UserModel['id']): Promise<UserModel> {
        return userApiService.getUser(id);
    },

    createUser(user: UserModel): Promise<UserModel> {
        return userApiService.createUser(user);
    },

    updateUser(id: UserModel['id'], user: Partial<Omit<UserModel, 'id'>>): Promise<UserModel> {
        return  userApiService.updateUser(id, user);
    },

    deleteUser(id: UserModel['id']): Promise<boolean> {
        return userApiService.deleteUser(id);
    },
}