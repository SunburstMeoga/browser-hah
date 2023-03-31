import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isDark: false,
    blockInfo: {},
    txInfo: {},
    addressInfo: {},
  },
  mutations: {
    changeTheme(state, newVal) {
      state.isDark = newVal
    },
    getBlockInfo(state, newVal) {
      state.blockInfo = newVal
    },
    getTXInfo(state, newVal) {
      state.txInfo = newVal
    },
    getAddressInfo(state, newVal) {
      state.addressInfo = newVal
    }
  },
  actions: {
  },
  modules: {
  }
})
