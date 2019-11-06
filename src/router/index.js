import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home'
import Classify from '@/views/classify'
import GoodList from '@/views/goodList'
import GoodsDetail from '@/views/goodsDetail'
import Cart from '@/views/cart'
import Address from '@/views/address'
import AddressEdit from '@/views/addressEdit'
import Me from '@/views/me'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/classify',
    name: 'Classify',
    component: Classify
  },
  {
    path: '/goodList',
    name: 'GoodList',
    component: GoodList
  },
  {
    path: '/goodsDetail',
    name: 'GoodsDetail',
    component: GoodsDetail
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/address',
    name: 'Address',
    component: Address
  },
  {
    path: '/addressEdit',
    name: 'AddressEdit',
    component: AddressEdit
  },
  {
    path: '/me',
    name: 'Me',
    component: Me
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import("../views/test.vue")
  },
  {
    path: '/testCity',
    name: 'TestCity',
    component: () => import("../views/testCity.vue")
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import( /* webpackChunkName: "about" */ '../views/Test2.vue')
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router