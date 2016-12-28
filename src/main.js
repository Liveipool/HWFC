// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routes from './router/routes'

// 使用全局样式
import 'bootstrap/dist/css/bootstrap.min.css'
import './style/variables.scss'
import './style/helper.scss'

/* eslint-disable no-new */
Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter(routes)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
