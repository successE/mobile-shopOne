import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'lib-flexible/flexible.js'
import 'vant/lib/index.css';
import '@/assets/styles/override.css'
Vue.use(VueLazyload, {
  error: '/static/images/loading.gif',
  loading: '/static/images/loading.gif'
})

import {
  Button,
  AddressList,
  Area,
  AddressEdit
} from 'vant'
Vue.use(Button).use(AddressList).use(AddressEdit)
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')