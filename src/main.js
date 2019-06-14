// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router-index.js'
import Axios from 'axios'
import VueAxios from 'vue-axios'

import './lib/css/mui.css'
import './lib/css/icons-extra.css'
import './lib/css/iconfont.css'
import './assets/css/base.css'
import './assets/sass/base.scss'

import {Dialog, Swiper, Toast, Scroller} from '@nutui/nutui'

Dialog.install(Vue)
Swiper.install(Vue)
Toast.install(Vue)
Scroller.install(Vue)

Vue.config.productionTip = false
Vue.use(VueAxios, Axios)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
