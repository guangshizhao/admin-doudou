import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import LayHeader from '@/components/layout/LayHeader.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// 第三方UI引用
/**
 * @description 生产环境关掉提示
 */
Vue.config.productionTip = false

// 全剧组件
Vue.component('LayHeader', LayHeader)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
