import Vue from 'vue'
import App from './App.vue'
import routes from './routes'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router: routes,
  vuetify,
  render: h => h(App)
})
