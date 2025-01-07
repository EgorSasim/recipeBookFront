import type { DishApi } from "@/api/dish/dishApi.typings";
import type { DishModel } from "./dishModel.typings";

export function mapDishApiToDishModel(dish: DishApi): DishModel {
    return {...dish, cookingTime: dish.cooking_time}
} 

export function mapDishModelToApi(dish: DishModel): DishApi {
    return {...dish, cooking_time: dish.cookingTime};
}