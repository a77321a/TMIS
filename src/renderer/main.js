import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import WebStorage from './common/js/storage'
Vue.use(iView);

window.LocalStorage = new WebStorage();
window.BASE = 'http://tingapi.ting.baidu.com/v1/restserver/ting?format=json&callback=&from=webapp_music&method='
if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
