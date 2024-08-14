import { createRouter, createWebHashHistory } from 'vue-router'
import Account_Form from '../components/Account_Form.vue'
import Form_Addaccount from '../components/Account_Form_control/Form_Addaccount.vue'
import Form_information from '../components/Account_Form_control/Form_information.vue'


const router = createRouter({
  history: createWebHashHistory(),
  routes:[
    {
      path: '/',
      name: 'Account',
      component: Account_Form
    },
    {
      path:'/FormAddaccount',
      name:'FormAddaccount',
      Components:Form_Addaccount
    },
    {
      path:'/Forminformation',
      name:'Forminformation',
      Components:Form_information
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  ]
})

// const routes = [
//   {
//     path: '/',
//     name: 'Account',
//     component: Account_Form
//   },
//   {
//     path:'/FormAddaccount',
//     name:'FormAddaccount',
//     Components:Form_Addaccount
//   },
//   {
//     path:'/Forminformation',
//     name:'Forminformation',
//     Components:Form_information
//   },
//   {
//     path: '/about',
//     name: 'about',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
//   }
// ]

export default router
