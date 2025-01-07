import axios from "axios";
import type { UserApi } from "./userApi.typings";
import { BACKEND_URL } from "@/constants/backendUrl";

const url = BACKEND_URL;

const apiClient = axios.create({
    baseURL: url,
    headers: {
        'Content-Type': 'application/json'
    }
})

const urlRestPart = '/users'; 

export const userApiService = {
    getUsers(): Promise<UserApi[]> {
        return apiClient.get<UserApi[]>(urlRestPart).then(resp => resp.data);
    },

    getUser(id: UserApi['id']): Promise<UserApi> {
        return apiClient.get<UserApi>(`${urlRestPart}/${id}`).then(resp => resp.data);
    },

    createUser(user: UserApi): Promise<UserApi> {
        return apiClient.post<UserApi>(urlRestPart, user).then(resp => resp.data);
    },

    updateUser(id: UserApi['id'], user: Partial<Omit<UserApi, 'id'>>): Promise<UserApi> {
        return  apiClient.put(`${urlRestPart}/${id}`, user).then(resp => resp.data);
    },

    deleteUser(id: UserApi['id']): Promise<boolean> {
        return apiClient.delete<boolean>(`${urlRestPart}/${id}`).then(resp => resp.data);
    },
}