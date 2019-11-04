import Vue from 'vue'
import App from './App.vue'
// 全局引入iview
import iView from 'iview'
import router from './router'

Vue.use(iView)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
