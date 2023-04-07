<template>
    <div class="border-transparent mb-2 mr-auto ml-auto overflow-x-scroll sm:overflow-auto">
        <h-loading :loadStatus="loadStatus" />

        <div v-if="loadStatus === 'finished'" class="w-11/12 mr-auto ml-auto text-sm sm:hidden">
            <div class="py-3 border-b border-lightborder dark:border-border100" v-for="(item, index) in dataList"
                :key="index">
                <div class="flex justify-start item-center mb-1">
                    <div class="pr-2 text-lighttable dark:text-white200">{{ $t('Pending.from') }}: </div>
                    <div class="text-clickable">{{ addressFilter(item.from) }}</div>
                </div>
                <div class="flex justify-start item-center mb-1">
                    <div class="pr-2 text-lighttable dark:text-white200">{{ $t('Pending.to') }}: </div>
                    <div class="text-clickable">{{ addressFilter(item.to) }}</div>
                </div>
                <div class="flex justify-start item-center">
                    <div class="pr-2 text-lighttable dark:text-white200">{{ $t('Pending.amount') }}: </div>
                    <div class="text-clickable">{{ item.amount }}</div>
                </div>
            </div>
        </div>

        <div v-if="loadStatus === 'finished'"
            class="hidden sm:block border-b min-w-70 border-lightborder dark:border-border100">
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
                    <div class="w-60 cursor-pointer hover:font-extrabold text-clickable transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:scale-110"
                        @click="toTX(item.txid)">
                        {{ addressFilter(item.block_hash) }}
                    </div>
                    <div class="w-60">
                        {{ timeFormat(item.transtime) }}

                    </div>
                    <div class="w-60">
                        {{ item.amount }}

                    </div>
                    <div class="w-60 cursor-pointer hover:font-extrabold text-clickable transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:scale-110"
                        @click="toAddress(item.from)">
                        {{ addressFilter(item.from) }}

                    </div>
                    <div class="w-60 cursor-pointer hover:font-extrabold text-clickable transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:scale-110"
                        @click="toAddress(item.to)">
                        {{ addressFilter(item.to) }}
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
        toTX(txid) {
            this.$router.push({
                path: '/tx/' + txid
            })
        },
        toAddress(address) {
            this.$router.push({
                path: '/block/' + address
            })
        }
    },
}
</script>

<style></style>