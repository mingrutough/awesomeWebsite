import Vue from 'vue';
import Router from 'vue-router';
import login from '@/components/login/login';
import notFound from '@/components/404';

import websiteHome from '@/components/website/layout/appLayout';
import manageHome from '@/components/manage/manageIndex';

import website from './website';
import manage from './manage';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'websiteHome',
      redirect: '/home',
      component: websiteHome,
      children: website,
    },
    {
      path: '/manage',
      name: 'manage',
      component: manageHome,
      children: manage,
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path: '*',
      name: '404',
      component: notFound,
    },
  ],
});
