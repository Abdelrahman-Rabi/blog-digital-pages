// src/router/routes.js
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'), // MainLayout wraps all pages
    children: [
      { path: '', component: () => import('pages/HomePage.vue') }  // HomePage should be here
    ]
  },
  // Other routes...
]

export default routes;
