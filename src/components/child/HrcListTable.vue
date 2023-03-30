<template>
    <div class="border-transparent mb-2 mr-auto ml-auto overflow-x-scroll">
        <div class="border-b min-w-100 border-lightborder dark:border-border100">
            <div class="py-2 flex w-full justify-start">
                <div class="w-60 text-sm ml-4  font-black text-lighttable dark:text-white200"
                    v-for="(item, index) in tableTitleList" :key="index">
                    {{ item.title }}
                </div>
            </div>
            <div class="">

                <div v-for="(item, index) in dataList" :key="index"
                    class="flex justify-start py-3 border-b ml-4  text-sm border-lightborder text-lighttable dark:text-white200 dark:border-border100">

                    <div class="w-60 text-clickable" @click="toAddress(item.addr)">
                        {{ addressFilter(item.addr) }}
                    </div>
                    <div class="w-60 text-sm">
                        {{ item.symbol }}
                    </div>
                    <div class="w-60">
                        {{ item.name }}
                    </div>
                    <div class="w-60 text-sm">
                        {{ item.decimals }}
                    </div>
                    <div class="w-60">
                        {{ item.totalSupply }}
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
                    title: this.$t('hrc20.symbol')
                },
                {
                    title: this.$t('hrc20.name')
                },
                {
                    title: this.$t('hrc20.decimals')
                },
                {
                    title: this.$t('hrc20.totalSupply')
                }
            ]
        }
    },
}
</script>

<style></style>