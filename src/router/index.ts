import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
// import routes from '~pages';
// console.log(routes, 'routes');
const routes: RouteRecordRaw[] = [
  {
    name: '',
    path: '/',
    component: () => import('@/components/Layout/admin/index.vue'),
    redirect: { name: 'home', path: '/home' },
    children: [
      {
        name: 'home',
        path: '/home',
        component: () => import('@/views/admin/index.vue'),
      },
      {
        name: 'bar',
        path: '/admin/echarts/bar',
        component: () => import('@/views/admin/echarts/bar/index.vue'),
      },
      {
        name: 'line',
        path: '/admin/echarts/line',
        component: () => import('@/views/admin/echarts/line/index.vue'),
      },
      {
        name: 'typescript',
        path: '/admin/typescript',
        component: () => import('@/views/admin/typescript/index.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
