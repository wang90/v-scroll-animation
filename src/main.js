import Vue from 'vue'
import App from './App.vue'


// import vueRollLoop from './lib/vrool/index.js';
// import vrool from 'vrool'
// Vue.use(vrool)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
