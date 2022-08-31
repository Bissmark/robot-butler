import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAnalytics from 'vue-analytics'
import BootStrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

// Config for Vue analytics
Vue.use(VueAnalytics, {
  id: 'UA-1234-5',
  router,
  autoTracking: {
    exception: true
  },
  // debug: {
  //   enabled: !isProd,
  //   sendHitTask: isProd
  // }
});

Vue.use(BootStrapVue);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
