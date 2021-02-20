import Vue from 'vue'
import App from './App.vue'


import vueRollLoop from './lib/index.js';
Vue.use(vueRollLoop)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
