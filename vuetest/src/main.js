// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en'
import 'jquery'
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import store from './store/store'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
//https://bird.ioliu.cn api 解决跨域问题
axios.defaults.baseURL = 'https://bird.ioliu.cn/v1/?url=https://api.douban.com';

Vue.config.productionTip = false;
Vue.prototype.$http = axios;


Vue.use(ElementUI, { locale });
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
