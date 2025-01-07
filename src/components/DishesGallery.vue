<script setup lang="ts">
import type { DishModel } from '@/model/dish/dishModel.typings.ts';

interface Props {
    dishes: DishModel[];
}

const input = defineProps<Props>()

function getCardVariant(index: number): 'tonal' | 'flat' {
    return index %2 == 0 ? 'tonal' : 'flat';
}
</script>

<template>
 <div class="dishes-gallery">
    <v-card class="dishes-gallery__item" :variant="getCardVariant(index)" v-for="(dish, index) in dishes" :key="dish">
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
.dishes-gallery {
    display: grid;
   grid-template-columns: repeat(4, 1fr);
   gap: 1rem;
}

</style>