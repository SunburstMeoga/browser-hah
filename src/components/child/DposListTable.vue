<template>
    <div class="border-transparent mb-2 mr-auto ml-auto overflow-x-scroll">
        <div class="border-b min-w-100 border-lightborder dark:border-border100">
            <div class="py-2 flex w-full justify-start">
                <div class="w-20 ml-4 text-sm font-black text-lighttable dark:text-white200">
                    {{ $t('dpos.serialNumber') }}
                </div>
                <div class="w-60 text-sm font-black text-lighttable dark:text-white200"
                    v-for="(item, index) in tableTitleList" :key="index">
                    {{ item.title }}
                </div>
            </div>
            <div class="">

                <div v-for="(item, index) in dataList" :key="index"
                    class="flex justify-start py-3 border-b text-sm border-lightborder text-lighttable dark:text-white200 dark:border-border100">
                    <div class="w-20 ml-4">
                        {{ index + 1 }}
                    </div>
                    <div class="w-60 text-clickable" @click="toAddress(item.address)">
                        {{ addressFilter(item.address) }}
                    </div>
                    <div class="w-60">
                        {{ item.votes }}
                    </div>
                    <div class="w-60">
                        {{ item.name }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { timeFormat, amountFormat, addressFilter } from '@/utils/format'
export default {
    props: {
        dataList: {
            type: Array,
            default: () => []
        },
    },
    methods: {
        timeFormat, amountFormat, addressFilter,
        toAddress(address) {
            this.$router.push({
                path: '/address/' + address
            })
        },
    },
    computed: {
        tableTitleList() {
            return [

                {
                    title: this.$t('dpos.address')
                },
                {
                    title: this.$t('dpos.vote')
                },
                {
                    title: this.$t('dpos.name')
                }
            ]
        }
    },
}
</script>

<style></style>