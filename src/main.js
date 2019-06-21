// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router-index.js'
import Axios from 'axios'
import VueAxios from 'vue-axios'

import './lib/css/iconfont.css'
import './assets/css/base.css'
import './assets/sass/base.scss'

import {LoadingPlugin} from 'vux'

Vue.use(LoadingPlugin)

Vue.config.productionTip = false
Vue.use(VueAxios, Axios)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: c => c(App)
})
