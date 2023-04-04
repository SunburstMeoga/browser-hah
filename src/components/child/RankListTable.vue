<template>
    <div class="border-transparent mb-2 mr-auto ml-auto overflow-x-scroll">
        <h-loading :loadStatus="loadStatus" />

        <div v-if="loadStatus === 'finished'" class="border-b min-w-100 border-lightborder dark:border-border100">
            <div class="py-2 flex w-full justify-start">
                <div class="w-20 ml-4 text-sm font-black text-lighttable dark:text-white200">
                    {{ $t('Rank.rank') }}
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
                        {{ item.ranking }}
                    </div>
                    <div class="w-60 text-clickable transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:scale-110"
                        @click="toAddress(item.address)">
                        {{ addressFilter(item.address) }}
                    </div>
                    <div class="w-60 text-sm">
                        {{ item.balance }} HAH
                    </div>
                    <div class="w-60">
                        {{ item.yield }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HLoading from "@/components/public/HLoading"

import { timeFormat, addressFormat, addressFilter } from '@/utils/format'
export default {
    components: { HLoading },

    props: {
        dataList: {
            type: Array,
            default: () => []
        },
        loadStatus: {
            type: String,
            default: 'loading'
        }
    },
    methods: {
        timeFormat, addressFormat, addressFilter,
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
                    title: this.$t('Rank.address')
                },
                {
                    title: this.$t('Rank.balance')
                },
                {
                    title: this.$t('Rank.yield')
                }
            ]
        }
    },
}
</script>

<style></style>