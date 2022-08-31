import Vue from 'vue'
import App from './App.vue'
import router from './router'
<<<<<<< HEAD
import VueAnalytics from 'vue-analytics'
import BootStrapVue from 'bootstrap-vue'
=======
// import VueAnalytics from 'vue-analytics'
>>>>>>> 93ce76b14aa21a53011c6dfd586a2e03f7017405
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

// Config for Vue analytics
// Vue.use(VueAnalytics, {
//   id: ''
// });

Vue.use(BootStrapVue);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
