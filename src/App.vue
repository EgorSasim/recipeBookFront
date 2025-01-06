<script setup lang="ts">
import { ref } from 'vue';
import { RouterView } from 'vue-router'
import { useTheme, type ThemeInstance } from 'vuetify';
import { COLOR_THEMES } from './constants/themes.constants';
import { NAV_BAR_ITEMS } from './constants/navigationBarItems.constants';

const isSidebarOpen = ref(false);
const theme: ThemeInstance = useTheme();
const navBarItems = NAV_BAR_ITEMS;

function toggleSideBar(): void {
  isSidebarOpen.value = !isSidebarOpen.value;
}

function toggleTheme(): void {
  theme.global.name.value =
    theme.global.name.value === COLOR_THEMES.DARK
      ? COLOR_THEMES.LIGHT
      : COLOR_THEMES.DARK;
}

</script>

<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-nav-icon icon="$vuetify" variant="text" @click.stop="toggleSideBar"></v-app-bar-nav-icon>
      <v-app-bar-title>Recipe book</v-app-bar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="isSidebarOpen">
      <v-list-item title="Navigation bar" subtitle="Recipe book"></v-list-item>
      <v-divider></v-divider>
      <v-list-item v-for="item in navBarItems" :key="item" :title=item.title @click="$router.push({ path: item.routerPath })"></v-list-item>
      <div class="app-change-theme-container" >
        <v-btn @click="toggleTheme">Change theme</v-btn>
      </div>
    </v-navigation-drawer>
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<style scoped>
.app-change-theme-container {
  width: 100%; display: flex; justify-content: center;
  margin-top: 2rem;
}
</style>