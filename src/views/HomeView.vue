<script setup lang="ts">
import {inject, onMounted, ref, type Ref} from 'vue'
import { dishModelServiceToken } from '@/DITokens/tokens';
import type { DishModel, DishModelService } from '@/model/dish/dishModel.typings.ts';
import DishesGallery from '@/components/DishesGallery.vue';

const dishModelService: DishModelService = inject(dishModelServiceToken) as DishModelService;

const dishes: Ref<DishModel[]> = ref([]);

onMounted(() => dishModelService.getDishes().then(_dishes => dishes.value = _dishes ))

</script>

<template>
  <main>
    <DishesGallery :dishes="dishes"/>
  </main>
</template>
