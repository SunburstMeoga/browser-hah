<template>
    <div class="border-transparent mb-2 mr-auto ml-auto overflow-x-scroll">
        <div class="border-b border-border100 min-w-100">
            <div class="py-2 flex w-full justify-start">
                <div class="w-20 ml-4 text-white200 text-sm font-black">
                    #
                </div>
                <div class="w-60 text-white200 text-sm font-black" v-for="(item, index) in tableTitleList" :key="index">
                    {{ item.title }}
                </div>
            </div>
            <div class="">
                <!-- <div v-for="(item, index) in dataList" :key="index" class="flex justify-start py-3">
                    <div class="w-20 ml-4 text-white200 text-sm">
                        {{ index + 1 }}
                    </div>
                    <div class="w-60 text-white200 text-sm">
                        {{ item.height }}
                    </div>
                    <div class="w-60 text-white200 text-sm truncate">
                        {{ addressFilter(item.reward_address) }}
                    </div>
                    <div class="w-60 text-white200 text-sm">
                        {{ item.reward_money }}
                    </div>
                    <div class="w-60 text-white200 text-sm">
                        {{ item.txs }}
                    </div>
                    <div class="w-60 text-white200 text-sm truncate">
                        {{ addressFilter(item.prev_hash) }}
                    </div>
                    <div class="w-60 text-white200 text-sm">
                        {{ timeFormat(item.time) }}
                    </div>
                </div> -->

                <div v-for="(item, index) in dataList" :key="index"
                    class="flex justify-start py-3 border-b border-border100">
                    <div class="w-20 ml-4 text-white200 text-sm">
                        {{ index + 1 }}
                    </div>
                    <div class="w-60 text-clickable text-sm">
                        {{ item.height }}
                    </div>
                    <div class="w-60 text-white200 text-sm truncate">
                        {{ addressFilter(item.reward_address) }}
                    </div>
                    <div class="w-60 text-white200 text-sm">
                        {{ item.reward_money }}
                    </div>
                    <div class="w-60 text-white200 text-sm">
                        {{ item.txs }}

                    </div>
                    <div class="w-60 text-clickable text-sm truncate">
                        {{ addressFilter(item.prev_hash) }}

                    </div>
                    <div class="w-60 text-white200 text-sm truncate">
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
    data() {
        return {
            tableTitleList: [
                {
                    title: '区块高度'
                },
                {
                    title: '播报方'
                },
                {
                    title: '暴块奖励'
                },
                {
                    title: '交易数量'
                },
                {
                    title: '上一区块'
                },
                {
                    title: '时间'
                },
            ]
        }
    },
    methods: {
        timeFormat, addressFormat, addressFilter
    },
}
</script>

<style></style>