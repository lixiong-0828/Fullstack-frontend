import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/layout/index.vue'),
      
      // 进入【/】模式时，重定向到【index：'../views/index/index.vue'】 。
      redirect:('/index'),

      // 【children】里的，每个组件在【layout/index.vue】的【main】里显示
      children:[
        {
          path: '/index',
          name: 'index',
          component: () => import('../views/index/index.vue'),
        },
        {
          path: '/dept',
          name: 'dept',
          component: () => import('../views/dept/index.vue'),
        },
        {
          path: '/stu',
          name: 'stu',
          component: () => import('../views/stu/index.vue'),
        },
        {
          path: '/class',
          name: 'class',
          component: () => import('../views/class/index.vue'),
        },
                {
          path: '/emp',
          name: 'emp',
          component: () => import('../views/emp/index.vue'),
        }


      ]

      },

        {
          path: '/login',
          name: 'login',
          component: () => import('@/views/login/index.vue')
        },

    




    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
})

export default router
