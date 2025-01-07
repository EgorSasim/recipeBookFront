import axios from "axios";
import type { DishApi } from "./dishApi.typings";
import { BACKEND_URL } from "@/constants/backendUrl";

const url = BACKEND_URL;

const apiClient = axios.create({
    baseURL: url,
    headers: {
        'Content-Type': 'application/json'
    }
})

const urlRestPart = '/dishes';

export const dishApiService = {
    getDishes(): Promise<DishApi[]> {
        return apiClient.get<DishApi[]>(urlRestPart).then(resp => resp.data);
    },

    getDish(id: DishApi['id']): Promise<DishApi> {
        return apiClient.get<DishApi>(`${urlRestPart}/${id}`).then(resp => resp.data);
    },

    createDish(dish: DishApi): Promise<DishApi> {
        return apiClient.post<DishApi>(urlRestPart, dish).then(resp => resp.data);
    },

    updateDish(id: DishApi['id'], dish: Partial<Omit<DishApi, 'id'>>): Promise<DishApi> {
        return  apiClient.put(`${urlRestPart}/${id}`, dish).then(resp => resp.data);
    },

    deleteDish(id: DishApi['id']): Promise<boolean> {
        return apiClient.delete<boolean>(`${urlRestPart}/${id}`).then(resp => resp.data);
    },
}