import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isDark: false,
    blockInfo: {},
    txInfo: {},
    addressInfo: {},
    chainID: "",
    chainName: "",
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
    },
    getChainId(state, newVal) {
      state.chainID = newVal
    },
    getChainName(state, newVal) {
      state.chainName = newVal
    }
  },
  actions: {
  },
  modules: {
  }
})
