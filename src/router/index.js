import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/home',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: 'welcome',
        component: () => import('../views/Welcome.vue'),
      },
      {
        path: 'products',
        component: () => import('../views/Products.vue'),
      },
      {
        path: 'cart',
        component: () => import('../views/Cart.vue'),
      },
      {
        path: 'about',
        component: () => import('../views/About.vue'),
      },
      {
        path: 'check',
        component: () => import('../views/BuyerInfo.vue'),
      },
      {
        path: 'success',
        component: () => import('../views/Success.vue'),
      },
      {
        path: 'ordersheet',
        component: () => import('../views/Ordersheet.vue'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/admin',
    component: () => import('../views/Dashboard/Admin.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/Dashboard/AdminProducts.vue'),
      },
      {
        path: 'orders',
        component: () => import('../views/Dashboard/AdminOrders.vue'),
      },
      {
        path: 'coupons',
        component: () => import('../views/Dashboard/AdminCoupons.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
