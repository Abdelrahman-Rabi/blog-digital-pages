import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import MainLayout from 'layouts/MainLayout.vue';
import HomePage from 'pages/HomePage.vue';
import SinglePostPage from 'pages/SinglePostPage.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { 
        path: '', 
        name: 'home',
        component: HomePage 
      },
      { 
        path: 'post/:id', 
        name: 'singlePost',
        component: SinglePostPage,
        props: true
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
