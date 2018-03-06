import Vue from 'vue';
import Router from 'vue-router';
import login from '@/components/login/login';
import notFound from '@/components/404';
import websiteHome from '@/components/website/lauout/appLayout';
import website from './website';
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'websiteHome',
      component: websiteHome,
      children: website,
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path: '/404',
      name: '404',
      component: notFound,
    },
  ],
});
