<template>
  <div class="" @click="handleViewMore">
    <div
      class="py-2 rounded-b-lg cursor-pointer transition hover:text-clickable flex justify-center items-center text-lightmoreword bg-lightprimary dark:text-black100 dark:bg-black200">
      <div class="text-sm">
        {{ $t('common.more') }}
      </div>
      <div class="icon text-lg pl-2 iconfont icon-arrow-right" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleViewMore() {
      this.$emit('handleViewMore')
    }
  }
}
</script>

<style></style>