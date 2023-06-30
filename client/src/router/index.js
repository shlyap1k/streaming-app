// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: 'register',
        name: 'Регистрация',
        component: () => import('@/views/Register.vue'),
        meta: {
          hideForAuth: true
        }
      },
      {
        path: 'login',
        name: 'Авторизация',
        component: () => import('@/views/Login.vue'),
        meta: {
          hideForAuth: true
        }
      },
      {
        path: 'profile',
        name: 'Профиль',
        component: () => import('@/views/Profile'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'broadcaster',
        name: 'Трансляция',
        component: () => import('@/views/Broadcaster'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'watch/:username',
        name: 'Просмотр',
        component: () => import('@/views/Watcher')
      },
      {
        path: 'posts',
        name: 'Posts List',
        component: () => import(/* webpackChunkName: "home" */ '@/components/PostsList.vue'),
      },

    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
