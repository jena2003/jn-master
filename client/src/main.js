import Vue from 'vue'
import App from './components/App.vue'
import './reset.css'
import './fonts.css'
import VueRouter from 'vue-router'
import routes from './pages.js'
import store from'./store'

console.log(routes);

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  routes 
})

new Vue({
  store,
  render: h => h(App),
  router
}).$mount('#app')

console.log(store.state)

