import Vue from 'vue';
import VueRouter from 'vue-router';

import store from '@/store';
import Dash from '@/components/Dashboard/Dash';
import Search from '@/views/Search';
import Result from '@/views/Result';
import Home from '@/views/Home.vue';
import Login from '@/views/Login';
import Profile from '@/views/Profile';
import Register from '@/views/Register';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: "Home",
    component: Home,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/dashboard',
    name: 'Dash',
    component: Dash,
    meta: {requiresAuth: true},
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {requiresAuth: true},
  },
  {
    path: '/search',
    name: 'search',
    component: Search
  },
  {
    path: '/result',
    name: 'result',
    component: Result
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isAuthenticated) {
      next();
      return;
    }
    next('/login');
  } else {
    next();
  }
});

export default router;
