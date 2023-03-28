import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isDark: false
  },
  mutations: {
    changeTheme(state, newVal) {
      state.isDark = newVal
    }
  },
  actions: {
  },
  modules: {
  }
})
