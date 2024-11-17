// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import LoginForm from '@/components/LoginForm.vue';
import ContasAPagar from '@/views/ContasAPagar.vue';

const routes = [
  { path: '/', component: LoginForm, name: 'login' },
  { path: '/contas-a-pagar', component: ContasAPagar, name: 'contas-a-pagar' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
