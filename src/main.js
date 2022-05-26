import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import { Toast, NavBar, Form, Field, Button, Tabbar, TabbarItem, Notify } from 'vant'
import _ from 'lodash'
import './utils/stopBtnRepeat'
Vue.use(Toast)
Vue.use(NavBar)
Vue.use(Form)
Vue.use(Field)
Vue.use(Button)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Notify)
Vue.prototype._ = _
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
