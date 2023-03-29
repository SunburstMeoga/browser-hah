<template>
    <div class="border-transparent mb-2 mr-auto ml-auto overflow-x-scroll">
        <div class="border-b min-w-70 border-ligthborder dark:border-border100">
            <div class="py-2 flex w-full justify-start">
                <div class="w-20 ml-4 text-sm font-black text-lighttable dark:text-white200">
                    #
                </div>
                <div class="w-60 text-sm font-black text-lighttable dark:text-white200"
                    v-for="(item, index) in tableTitleList" :key="index">
                    {{ item.title }}
                </div>
            </div>
            <div class="">
                <div v-for="(item, index) in dataList" :key="index"
                    class="flex justify-start py-3 border-b text-sm border-ligthborder text-lighttable dark:text-white200 dark:border-border100">
                    <div class="w-20 ml-4">
                        {{ index + 1 }}
                    </div>
                    <div class="w-60 text-clickable">
                        {{ addressFilter(item.block_hash) }}
                    </div>
                    <div class="w-60">
                        {{ timeFormat(item.transtime) }}

                    </div>
                    <div class="w-60">
                        {{ item.amount }}

                    </div>
                    <div class="w-60 text-clickable">
                        {{ addressFilter(item.from) }}

                    </div>
                    <div class="w-60 text-clickable">
                        {{ addressFilter(item.to) }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { timeFormat, addressFormat, addressFilter } from '@/utils/format'
export default {
    props: {
        dataList: {
            type: Array,
            default: () => []
        },
    },
    computed: {
        tableTitleList() {
            return [
                {
                    title: this.$t('Pending.hash')
                },
                {
                    title: this.$t('Pending.time')
                },
                {
                    title: this.$t('Pending.amount')
                },
                {
                    title: this.$t('Pending.from')
                },
                {
                    title: this.$t('Pending.to')
                }
            ]
        }
    },
    methods: {
        timeFormat, addressFormat, addressFilter,

    },
}
</script>

<style></style>