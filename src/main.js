import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
import axios from 'axios'
import './assets/css/style.less'
import './assets/font/iconfont.css'


import mavonEditor from 'mavon-editor'

import "element-ui/lib/theme-chalk/index.css"
import 'mavon-editor/dist/css/index.css'

//import "./axios"
import "./permission"
require('./Mock')
Vue.use(Element)
Vue.use(mavonEditor)
import {parseTime} from './utils'
Vue.filter('parseTime', (v) => parseTime(v,'{y}-{m}-{d}'))
Vue.config.productionTip = false
Vue.config.devtools = true
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
