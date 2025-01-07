import { dishApiService } from "@/api/dish/dishApi.service";
import type { DishModel } from "./dishModel.typings";
import { mapDishApiToDishModel, mapDishModelToApi } from "./dishModelMappers";

export const dishModelService = {
    getDishes(): Promise<DishModel[]> {
        return dishApiService.getDishes().then(dishes => dishes.map(dish => mapDishApiToDishModel(dish)));
    },

    getDish(id: DishModel['id']): Promise<DishModel> {
        return dishApiService.getDish(id).then(mapDishApiToDishModel);
    },

    createDish(dish: DishModel): Promise<DishModel> {
        return dishApiService.createDish(mapDishModelToApi(dish)).then(mapDishApiToDishModel);
    },

    updateDish(id: DishModel['id'], dish: Partial<Omit<DishModel, 'id'>>): Promise<DishModel> {
       return dishApiService.updateDish(id, {...dish, cooking_time: dish?.cookingTime}).then(mapDishApiToDishModel);
    },

    deleteDish(id: DishModel['id']): Promise<boolean> {
        return dishApiService.deleteDish(id);
    },
}