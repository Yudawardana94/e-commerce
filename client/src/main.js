import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';
import store from './store';
// import axios from 'axios'
// import VueAxios from 'vue-axios'
 
Vue.config.productionTip = false;
// Vue.use(axios)
// Vue.prototype.axios = axios.create({
//   baseURL :'http://localhost:3000'
// })

// Vue.prototype.$http = axios
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
