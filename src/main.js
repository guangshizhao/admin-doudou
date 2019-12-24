import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import LayHeader from '@/components/layout/LayHeader.vue'
import Vuetify from 'vuetify'

import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/index.css'

import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
/* 解决路由重复报错 */
import Router from 'vue-router'
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(Vuetify)
Vue.use(VXETable)
/**
 * @description 生产环境关掉提示
 */
Vue.config.productionTip = false

// 全局组件
Vue.component('LayHeader', LayHeader)
// 滚动条
new Vue({
  vuetify: new Vuetify({
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#2c3e50',
          secondary: '#1abc9c',
          accent: '#2980b9',
          error: '#e74c3c',
          action: '#23DB2A'
        }
        /*  dark: {
          primary: '#fff'
        } */
      }
    }
  }),
  router,
  store,
  render: h => h(App)
}).$mount('#app')
