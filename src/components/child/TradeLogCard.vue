<template>
    <div>
        <div class="text-lightitemtitle dark:text-btndisable py-2 px-4">
            <div class="mb-2 sm:flex justify-start items-center sm:mb-4">
                <div class="font-black text-lightword dark:text-black100">
                    {{ $t('logs.address') }}
                </div>
                <div
                    class="break-all text-sm leading-5 sm:text-base sm:leading-none sm:pl-4 text-lighttable dark:text-white200">
                    {{ logInfo.address }}
                </div>
            </div>
            <div class="mb-2 sm:mb-4">
                <div class="font-black mb-1 text-lightword dark:text-black100">
                    {{ $t('logs.topics') }}
                </div>
                <div class="">
                    <div class="flex justify-start items-stretch mb-2 sm:items-center"
                        v-for="(item, index) in logInfo.topics" :key="index">
                        <div
                            class="flex justify-center items-center w-8 h-8 rounded-full icon iconfont mr-2 bg-lightborder dark:text-white300 dark:bg-border100">
                            {{ index }}
                        </div>
                        <div
                            class="leading-5 text-sm sm:text-base sm:leading-none sm:pl-4 break-all text-lighttable dark:text-white200 ml-2 flex-1">
                            {{ item }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="mb-2 sm:mb-4">
                <div class="font-black mb-2 text-lightword dark:text-black100">{{ $t('logs.data') }}</div>
                <div
                    class="break-all bg-lightborder text-sm dark:text-white300 dark:bg-border100 py-2 px-4 rounded-lg sm:text-base">
                    {{ logInfo.data }}
                </div>
            </div>
            <div class="flex justify-start items-center font-black">
                <div class="text-lightword dark:text-black100">{{ $t('logs.executionStatus') }}</div>
                <div class="pl-2" :class="logInfo.status === '0x01' ? 'text-green-300' : 'text-red-600'">
                    {{ logInfo.status === '0x01' ? $t('status.success') : $t('status.fail') }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        logInfo: {
            type: Object,
            default: () => { }
        }
    }
}
</script>

<style></style>