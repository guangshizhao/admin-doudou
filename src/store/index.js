import Vue from 'vue'
import Vuex from 'vuex'
import user from './module/user'
import routerList from '@/router/routers'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    routerList
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user
  }
})
