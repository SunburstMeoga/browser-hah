<template>
  <div id="app">
    <e-top-bar></e-top-bar>
    <router-view></router-view>
    <!--<e-footer-bar></e-footer-bar> -->
  </div>
</template>

<script>
import eTopBar from '@/components/public/eTopBar.vue'
import eFooterBar from "@/components/public/eFooterBar.vue"
export default {
  components: {
    eTopBar,
    eFooterBar
  }
}
</script>

<style>
body {
  height: 100vh;
  background: #ebf0f6;
}
</style>
