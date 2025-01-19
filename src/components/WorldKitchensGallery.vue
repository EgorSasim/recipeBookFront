<script setup lang="ts">
import { WORLD_KITCHENS_ITEMS } from '@/constants/worldKitchens.constants';

const worldKitchensItems = WORLD_KITCHENS_ITEMS.map(item => ({ ...item, title: 'message.' + item.title }))

function getCardVariant(index: number): 'tonal' | 'flat' {
    return index % 2 == 0 ? 'tonal' : 'flat';
}
</script>

<template>
    <div>
        <v-card class="world-kitchens-gallery__item" :variant="getCardVariant(index)"
            v-for="(item, index) in worldKitchensItems" :key="item" @click="$router.push({ path: item.routePath })">
            <v-card-item>
                <v-card-title>
                    {{ $t(item.title) }}
                </v-card-title>
            </v-card-item>
        </v-card>
    </div>
</template>

<style scoped>
.world-kitchens-gallery__item {
    margin-bottom: 1rem;
    cursor: pointer;
}
</style>