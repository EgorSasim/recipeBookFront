import type { dishModelService } from "./dishModel.service";

export interface DishModel{
    id: number;
    name: string;
    description: string;
    cookingTime: string;
}

export type DishModelService = typeof dishModelService;