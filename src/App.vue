<template>
  <div id="app" class="bg-white dark:bg-black500">
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
  mounted() {
    // console.log(window.matchMedia('(prefers-color-scheme: dark)').matches)
    this.$i18n.locale = localStorage.getItem('language') || navigator.language || navigator.userLanguage
    console.log(localStorage.getItem('language'), navigator.language || navigator.userLanguage, this.$i18n.locale)
    console.log('this.$i18n.locale', this.$i18n.locale)

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
