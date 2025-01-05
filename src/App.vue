<script setup lang="ts">
import { ref } from 'vue';
import { RouterView } from 'vue-router'

const isSidebarOpen = ref(false);

function toggleSideBar(): void {
  isSidebarOpen.value = !isSidebarOpen.value;
}

</script>

<template>
  <v-app> 
    <v-app-bar>
      <v-app-bar-nav-icon icon="$vuetify" variant="text" @click.stop="toggleSideBar"></v-app-bar-nav-icon>
      <v-app-bar-title>Recipe book</v-app-bar-title>
    </v-app-bar>
    <v-navigation-drawer  v-model="isSidebarOpen">
      <v-list-item title="Navigation bar" subtitle="Recipe book"></v-list-item>
      <v-divider></v-divider>
      <v-list-item title="Home" @click="$router.push({path: '/'})"></v-list-item>
      <v-list-item title="My Recipes" @click="$router.push({path: '/about'})"></v-list-item>
      <v-list-item title="World kitchens" @click="$router.push({path: '/about'})"></v-list-item>
      <v-list-item title="Ingestion" @click="$router.push({path: '/about'})"></v-list-item>
      <v-list-item title="Settings" @click="$router.push({path: '/about'})"></v-list-item>
      <v-list-item title="About" @click="$router.push({path: '/about'})"></v-list-item>
    </v-navigation-drawer>
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>
