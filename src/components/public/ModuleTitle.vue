<template>
    <div class="flex justify-start items-baseline">
        <div class="text-black dark:text-white300 text-base font-bold sm:text-xl">
            {{ title }}
        </div>
        <div class="pl-2 text-sm text-lightmoreword dark:text-black100" v-if="total !== 0">
            {{ getTotal }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        total: {
            type: Number,
            default: 0
        }
    },
    computed: {
        getTotal() {
            return this.$t('moduleTitle.totalData', { count: this.total })
        }
    }
}
</script>

<style></style>