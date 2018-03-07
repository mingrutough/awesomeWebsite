// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import 'normalize.css'; // 消除不同浏览器之间的默认样式差异
import axios from 'axios'; // 基于promise的http库，封装了ajax请求
import iView from 'iview'; // 引入iView
import 'iview/dist/styles/iview.css';// 对应的iView的css文件

import App from './App';
import router from './router';


Vue.use(iView);
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;// 将对象挂载到Vue的原型对象上以方便每个vue组件调用
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
