import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AnalyticsView from '../views/AnalyticsView.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/analytics',
    name: '',
    component: AnalyticsView,
    meta: {
      requresAuth: true
    }

  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   // get current user info
//   const currentUser = supabase.auth.user();
//   const requiresAuth = to.matched.some
//   (record => record.meta.requiresAuth);

//   if(requiresAuth && !currentUser) next('sign-in');
//   else if(!requiresAuth && currentUser) next("/");
//   else next();
// })

export default router
