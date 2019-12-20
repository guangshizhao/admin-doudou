import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import LayHeader from '@/components/layout/LayHeader.vue'
import Vuetify from 'vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
Vue.use(Vuetify)

// 第三方UI引用
/**
 * @description 生产环境关掉提示
 */
Vue.config.productionTip = false

// 全剧组件
Vue.component('LayHeader', LayHeader)
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
        },
        dark: {
          primary: '#fff'
        }
      }
    }
  }),
  router,
  store,
  render: h => h(App)
}).$mount('#app')
