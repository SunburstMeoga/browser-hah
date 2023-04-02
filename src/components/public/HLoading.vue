<template>
    <div v-if="loadStatus !== 'finished'"
        class="text-lighticon dark:text-grayicon w-full h-full flex flex-col justify-center items-center pt-10 pb-10">
        <div>
            <div class="icon iconfont mb-2 text-4xl sm:text-6xl"
                :class="loadStatus === 'loading' ? 'icon-loading2 animate-spin' : 'icon-wushuju'" />
        </div>
        <div>
            {{ loadStatus === 'loading' ? 'Loading' : 'Not data' }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        loadStatus: {
            type: String,
            default: 'loading'
        }
    }
}
</script>

<style></style>