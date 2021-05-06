import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import enLocale from 'element-ui/lib/locale/lang/en'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Menu from './components/Menu'
import Footer from './components/Footer'
import moment from 'moment'

Vue.config.productionTip = false
Vue.use(ElementUI, {locale: enLocale, size: 'small'});
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(require('vue-moment'))
Vue.prototype.moment = moment
Vue.filter('dateYMDHMSFormat',function(dateStr,pattern='YYYY-MM-DD HH:mm:ss'){
  return moment(dateStr).format(pattern);
})
Vue.filter('dateYMDFormat',function(dateStr,pattern='YYYY-MM-DD'){
  return moment(dateStr).format(pattern);
})
Vue.filter('dateDMMMYFormat',function(dateStr,pattern='DD MMM YYYY'){
  return moment(dateStr).format(pattern);
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

new Vue({
  router,
  render: h => h(Menu)
}).$mount('#menu')

new Vue({
  router,
  render: h => h(Footer)
}).$mount('#footer')