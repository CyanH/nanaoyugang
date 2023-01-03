import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'port',
    component: () => import('@/views/port.vue'), //渔港管理
  },
  {
    path: '/trawler',
    name: 'trawler',
    component: () => import('@/views/trawler.vue'), //渔船管理
  },
  {
    path: '/people',
    name: 'people',
    component: () => import('@/views/people.vue'), //渔民管理
  },
  {
    path: '/catch',
    name: 'catch',
    component: () => import('@/views/catch.vue'), //数字三维
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 }),
});

export default router;
