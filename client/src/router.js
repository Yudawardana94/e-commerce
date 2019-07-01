import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Admin from './views/adminPage.vue'
import User from './views/userPage.vue'
import Shop from './views/shop.vue'
import item from './views/itemPage.vue'
import myCart from './views/myCart.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
    },
    {
      path: '/user',
      name: 'user',
      component: User,
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop,
      children: [
        {
          path: ':id',
          component: item
        }
      ]
    },
    {
      path: '/myCart',
      name: 'myCart',
      component: myCart
    }
  ],
});
