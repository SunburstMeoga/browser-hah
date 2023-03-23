<template>
  <div id="app">
    <e-top-bar></e-top-bar>
    <router-view></router-view>
    <e-footer-bar></e-footer-bar>
  </div>
</template>

<script>
import eTopBar from '@/components/public/eTopBar.vue'
import eFooterBar from "@/components/public/eFooterBar.vue"
export default {
  components: {
    eTopBar,
    eFooterBar
  },
  data() {
    return {
      isRouterAlive: true,
      list: []
    }
  },
  methods: {
    reload() {
      console.log("Refresh");
      this.isRouterAlive = false
      this.$nextTick(function () {
        this.isRouterAlive = true
      })
    }
  },
  provide() {
    return {
      reload: this.reload
    }
  }
}
</script>

<style></style>
