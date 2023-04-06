<template>
    <div class="border-transparent mr-auto ml-auto overflow-x-scroll sm:overflow-auto">
        <h-loading :loadStatus="loadStatus" />
        <div v-if="loadStatus === 'finished'" class="w-11/12 mr-auto ml-auto text-sm sm:hidden">
            <div class="py-3 border-b border-lightborder dark:border-border100" v-for="(item, index) in dataList"
                :key="index">
                <div class="flex justify-start item-center mb-1">
                    <div class="pr-2 text-lighttable dark:text-white200">{{ $t('Pending.from') }}: </div>
                    <div class="text-clickable">{{ addressFilter(item.topics1) }}</div>
                </div>
                <div class="flex justify-start item-center mb-1">
                    <div class="pr-2 text-lighttable dark:text-white200">{{ $t('Pending.to') }}: </div>
                    <div class="text-clickable">{{ addressFilter(item.topics2) }}</div>
                </div>
                <div class="flex justify-start item-center text-lighttable dark:text-white200">
                    <div class="pr-2">{{ $t('hrc20.quantity') }}: </div>
                    <div class="">{{ amountFormat(item.data) }}</div>
                </div>
            </div>
        </div>
        <div v-if="loadStatus === 'finished'"
            class="hidden sm:block border-b h-full min-w-100 border-lightborder dark:border-border100">
            <div class="py-2 flex w-full justify-start sm:py-4">
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
                        @click="toBlock(item.txid)">
                        {{ addressFilter(item.txid) }}
                    </div>
                    <div class="w-60 text-sm  cursor-pointer hover:font-extrabold text-clickable transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:scale-110 "
                        @click="toAddress(item.topics2)">
                        {{ addressFilter(item.topics2) }}
                    </div>
                    <div class="w-60 text-sm  cursor-pointer hover:font-extrabold text-clickable transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:scale-110 "
                        @click="toAddress(item.topics1)">
                        {{ addressFilter(item.topics1) }}
                    </div>
                    <div class="w-60">
                        {{ item.fun }}
                    </div>
                    <div class="w-60">
                        {{ amountFormat(item.data) }}
                    </div>
                    <div class="w-60">
                        {{ timeFormat(item.ts) }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HLoading from "@/components/public/HLoading"
import { timeFormat, amountFormat, addressFilter } from '@/utils/format'
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
        timeFormat, amountFormat, addressFilter,
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
    },
    computed: {
        tableTitleList() {
            return [
                {
                    title: this.$t('Address.hash')
                },
                {
                    title: this.$t('Pending.to')
                },
                {
                    title: this.$t('Pending.from')
                },
                {
                    title: this.$t('hrc20.method')
                },
                {
                    title: this.$t('hrc20.quantity')
                },
                {
                    title: this.$t('Pending.time')
                },
            ]
        }
    },
}
</script>

<style></style>