<template>
  <div id="app" class="bg-white dark:bg-black500">
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
  },
  mounted() {
    console.log(window.matchMedia('(prefers-color-scheme: dark)').matches)
    // document.documentElement.classList.add('dark');
  }
}
</script>

<style>
body {
  height: 100vh;
  padding-bottom: 30px;
}
</style>
