import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MyRecipes from '../views/MyRecipesView.vue'
import WorldKitchen from '../views/WorldKitchenView.vue'
import InjestionView from '@/views/InjestionView.vue'
import SettingsView from '@/views/SettingsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/my-recipes',
      name: MyRecipes.name,
      component: () => import('../views/MyRecipesView.vue'),
    },
    {
      path: '/world-kitchen',
      name: WorldKitchen.name,
      component: () => import('../views/WorldKitchenView.vue'),
    },
    {
      path: '/ingestion',
      name: InjestionView.name,
      component: () => import('../views/InjestionView.vue'),
    },
    {
      path: '/settings',
      name: SettingsView.name,
      component: () => import('../views/SettingsView.vue'),
    },
    
  ],
})

export default router
