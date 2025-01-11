<script setup lang="ts">
import { ref } from 'vue';
import { RouterView } from 'vue-router'
import { useTheme, type ThemeInstance } from 'vuetify';
import { COLOR_THEMES } from './constants/themes.constants';
import { NAV_BAR_ITEMS } from './constants/navigationBarItems.constants';
import { useI18n } from 'vue-i18n';
import { LOCALES } from './constants/locales.constants';

const isSidebarOpen = ref(false);
const theme: ThemeInstance = useTheme();
const { locale } = useI18n();
const navBarItems = NAV_BAR_ITEMS.map(item => ({...item, title: 'message.'+item.title }));

function toggleSideBar(): void {
  isSidebarOpen.value = !isSidebarOpen.value;
}

function toggleTheme(): void {
  theme.global.name.value =
    theme.global.name.value === COLOR_THEMES.DARK
      ? COLOR_THEMES.LIGHT
      : COLOR_THEMES.DARK;
}

function toggleLocale(): void {
  locale.value = locale.value === LOCALES.EN ? LOCALES.RU : LOCALES.EN;
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
      <v-list-item v-for="item in navBarItems" :key="item" :title=$t(item.title)
        @click="$router.push({ path: item.routerPath })"></v-list-item>
      <div class="app-change-theme-container">
        <v-btn @click="toggleTheme">{{ $t('message.changeTheme') }}</v-btn>
        <v-btn @click="toggleLocale">{{ $t('message.changeLocale') }}</v-btn>
      </div>
    </v-navigation-drawer>
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<style scoped>
.app-change-theme-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 2rem;
}
</style>