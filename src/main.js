import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './routes'
import KeenUI from 'keen-ui'
import 'keen-ui/dist/keen-ui.min.css'

Vue.use(VueRouter)
Vue.use(KeenUI)

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
