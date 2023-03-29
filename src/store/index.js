import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isDark: false,
    blockInfo: {}
  },
  mutations: {
    changeTheme(state, newVal) {
      state.isDark = newVal
    },
    getBlockInfo(state, newVal) {
      state.blockInfo = newVal
    }
  },
  actions: {
  },
  modules: {
  }
})
