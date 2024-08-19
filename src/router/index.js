import { createRouter, createWebHistory } from 'vue-router'
import Mainforms from '@/Main-forms.vue'
import Accountform from '@/components/Account_Form.vue'



const routes = [

  {
    path:'/',
    component:Mainforms,
    children:[
      {
        path: '/',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
      },
    ]
  },

  {
    path:'/',
    name:'accountform',
    component:Accountform,
    children:[
      {
        path:'/formAddaccount', 
        name:'formAddaccount',
        Components:()=>import('@/views/Form_Addaccount.vue'),
        children:[
          {
            path:'/forminformation',
            name:'forminformation',
            Components:()=>import('@/views/Form_information.vue')
          },
        ]
      },
    ]
  },



  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // },
  // {
  //   path:'/formAddaccount', 
  //   name:'formAddaccount',
  //   Components:()=>import('@/views/Form_Addaccount.vue'),
  //   children:[
  //     {
  //       path:'/forminformation',
  //       name:'forminformation',
  //       Components:()=>import('@/views/Form_information.vue')
  //     },
  //   ]
  // },
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
