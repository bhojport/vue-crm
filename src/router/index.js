import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import CRMDashBoard from '@/views/Dashboard.vue'
import CRMUsers from '@/views/Users.vue'
import CRMUserDetails from '@/views/User.vue'
import CRMDetails from '@/views/Details.vue'

const routes = [
  {
    path: '/', component: CRMDashBoard
  },
  {
    path: '/users', component: CRMUsers
  },
  {
    path: '/users/:id', component: CRMUserDetails, name: 'user_detail'
  },
  { // this is different than /users/:id, will be similar contents but for total users
    path: '/details', component: CRMDetails
  }
]

const router = new VueRouter({
  routes,
  linkActiveClass: "",
  linkExactActiveClass: "active",
})

export default router