import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import MenuItems from '../views/MenuItems.vue';

const routes = [
  { path: '/', redirect: '/dashboard' },
  { path: '/dashboard', component: Dashboard },
  { path: '/menu-items', component: MenuItems }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;