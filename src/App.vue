<template>
  <div id="app" class="bg-lightsecond dark:bg-black500">
    <e-top-bar></e-top-bar>
    <div class="sm:min-h-screen">
      <router-view></router-view>
    </div>
    <e-footer-bar></e-footer-bar>
  </div>
</template>

<script>
import eTopBar from '@/components/public/eTopBar'
import eFooterBar from "@/components/public/eFooterBar"

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
    localStorage.setItem('chainID','1688288')
    // document.documentElement.classList.add('dark');
  }
}
</script>

<style>
body {
  height: 100vh;
  padding-bottom: 30px;
}
* {
  font-family: 'Comfortaa';
}
</style>
