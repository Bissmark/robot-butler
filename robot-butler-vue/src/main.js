import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAnalytics from 'vue-analytics'

Vue.config.productionTip = false

// Config for Vue analytics
Vue.use(VueAnalytics, {
  id: ''
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
