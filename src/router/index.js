import { createRouter, createWebHistory } from 'vue-router'
import Main_forms from '@/views/Main_layout/Main-forms.vue'
// import Accountform from '@/components/Account_Form.vue'
import Login from "@/views/Login/Login.vue";



const routes = [

  {
    path:'/',
    redirect:(() => { return { path: '/login' } }), //路由重定向

  },
  {
    path:'/HomePage',
    component:Main_forms,
    children:[
    ]
  },

  {
    path:"/login" ,
    name:"login",
    component: Login,
  },

  {
    path: '/forminformation', 
    name: 'forminformation',
    components: {two:() => import('../views/Form_information.vue')},
    children:[
      {
        path:'/formAddaccount',
        name:'formAddaccount',
        component: () => import('../views/Form_Addaccount.vue')
      },
    ]
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
