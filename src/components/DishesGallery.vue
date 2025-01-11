<script setup lang="ts">
import type { DishModel } from '@/model/dish/dishModel.typings.ts';
import { ref, watch } from 'vue';

interface Props {
    dishes: DishModel[];
}
const input = defineProps<Props>();

const searchedDish = ref(null);
const filteredDishes = ref(input.dishes);


watch(searchedDish, (searchedDish) => {
    filteredDishes.value = searchedDish ? input.dishes.filter(dish => dish.name.includes(searchedDish)) : input.dishes;
})

function getCardVariant(index: number): 'tonal' | 'flat' {
    return index % 2 == 0 ? 'tonal' : 'flat';
}
</script>

<template>
    <v-autocomplete v-model=searchedDish class="dishes-gallery-search" clearable :label="$t('message.findByName')"
        :items="dishes.map(dish => dish.name)"></v-autocomplete>
    <div class="dishes-gallery">
        <v-card class="dishes-gallery__item" :variant="getCardVariant(index)"
            v-for="(dish, index) in searchedDish ? filteredDishes : dishes" :key="dish">
            <v-card-item>
                <v-card-title>
                    {{ dish.name }}
                </v-card-title>
                <v-card-subtitle>{{ dish.cookingTime }}</v-card-subtitle>
            </v-card-item>
            <v-card-text>{{ dish.description }}</v-card-text>
        </v-card>
    </div>
</template>

<style scoped>
.dishes-gallery-search {
    width: 34%;
    margin: 2rem auto;
}

.dishes-gallery {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
}
</style>