import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/Welcome.vue'),
  },
  {
    path: '/products',
    component: () => import('../views/Products.vue'),
  },
  {
    path: '/cart',
    component: () => import('../views/Cart.vue'),
  },
  {
    path: '/about',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/check',
    component: () => import('../views/BuyerInfo.vue'),
  },
  {
    path: '/success',
    component: () => import('../views/Success.vue'),
  },
  {
    path: '/ordersheet',
    component: () => import('../views/Ordersheet.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
