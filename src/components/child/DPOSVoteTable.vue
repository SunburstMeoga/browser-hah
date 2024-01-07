<template>
    <div class="border-transparent mr-auto ml-auto overflow-x-scroll sm:overflow-auto">
        <h-loading :loadStatus="loadStatus" />
        <div v-if="loadStatus === 'finished'" class="w-11/12 mr-auto ml-auto text-sm sm:hidden">
            <div class="py-3 border-b border-lightborder dark:border-border100" v-for="(item, index) in dataList"
                :key="index">
                <div class="flex justify-start item-center mb-1">
                    <div class="pr-2 text-lighttable dark:text-white200">{{ $t('dpos.address') }}: </div>
                    <div class="text-clickable" @click="toAddress(item.addr)">{{ addressFilter(item.addr) }}</div>
                </div>
                <div class="flex justify-start item-center mb-1">
                    <div class="pr-2 text-lighttable dark:text-white200">{{ $t('dposDetail.amount') }}: </div>
                    <div class="">{{ item.amount }} HAH</div>
                </div>
                <div class=" flex justify-start item-center text-lighttable dark:text-white200">
                    <div class="pr-2">{{ $t('dposDetail.time') }}: </div>
                    <div class="">{{ timeFormat(item.ts) }}</div>
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
                    <div @click="toAddress(item.addr)"
                        class="w-60 cursor-pointer hover:font-extrabold text-clickable transition duration-300 ease-in-out transform hover:-translate-y-0.5 ">
                        {{ addressFilter(item.addr) }}
                    </div>
                    <div class="w-60 text-sm">
                        {{ item.amount }} HAH
                    </div>
                    <div class="w-60 text-sm">
                        {{ timeFormat(item.ts) }}
                    </div>
                    <div class="w-60">
                        {{ item.height }}
                    </div>
                    <div class="w-60">
                        {{ getVoteType(item.vote_type) }}
                    </div>
                    <div class="w-60">
                        {{ getTranType(item.type) }}
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
        },
        getVoteType(value) {
            return value === '1' ? this.$t('dposDetail.ordinary') : this.$t('dposDetail.recasting')
        },
        getTranType(type) {
            return type === 'in' ? this.$t('dposDetail.datavote') : this.$t('dposDetail.datawithdrawal')
        },
    },
    computed: {
        tableTitleList() {
            return [
                {
                    title: this.$t('dpos.address')
                },
                {
                    title: this.$t('dposDetail.amount')
                },
                {
                    title: this.$t('dposDetail.time')
                },
                {
                    title: this.$t('dposDetail.height')
                },
                {
                    title: this.$t('dposDetail.voteType')
                },
                {
                    title: this.$t('dposDetail.tranType')
                }
            ]
        }
    },
}
</script>

<style></style>