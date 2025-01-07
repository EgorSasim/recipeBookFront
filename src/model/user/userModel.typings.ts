import type { userModelService } from "./userModel.service";

export interface UserModel {
    id: number;
    name: string;
}

export type UserModelService = typeof userModelService;