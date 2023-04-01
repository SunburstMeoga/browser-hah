<template>
    <div class="border-transparent mr-auto ml-auto overflow-x-scroll sm:overflow-auto">
        <div class="border-b h-full min-w-100 border-lightborder dark:border-border100">
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
                    class="flex justify-start py-3 border-b text-sm border-lightborder text-lighttable dark:text-white200 dark:border-border100">
                    <div class="w-20 ml-4">
                        {{ index + 1 }}
                    </div>
                    <div class="w-60 cursor-pointer hover:font-extrabold text-clickable transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:scale-110 "
                        @click="toBlock(item.height)">
                        {{ item.height }}
                    </div>
                    <div class="w-60 text-sm  cursor-pointer hover:font-extrabold text-clickable transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:scale-110 "
                        @click="toAddress(item.reward_address)">
                        {{ addressFilter(item.reward_address) }}
                    </div>
                    <div class="w-60">
                        {{ item.reward_money }}
                    </div>
                    <div class="w-60">
                        {{ item.txs }}
                    </div>
                    <div class="w-60">
                        {{ addressFilter(item.prev_hash) }}
                    </div>
                    <div class="w-60">
                        {{ timeFormat(item.time) }}
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
    methods: {
        timeFormat, addressFormat, addressFilter,
        toAddress(address) {
            this.$router.push({
                path: '/address/' + address
            })
        },
        //to block details
        toBlock(height) {
            this.$router.push({
                path: '/block/' + height
            })
        }
    }, computed: {
        tableTitleList() {
            return [
                {
                    title: this.$t('BlockList.height')
                },
                {
                    title: this.$t('BlockList.address')
                },
                {
                    title: this.$t('BlockList.reward')
                },
                {
                    title: this.$t('BlockList.amount')
                },
                {
                    title: this.$t('BlockList.previousBlock')
                },
                {
                    title: this.$t('BlockList.time')
                },
            ]
        }
    },
}
</script>

<style></style>