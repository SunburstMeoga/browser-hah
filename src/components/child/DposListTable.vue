<template>
    <div class="border-transparent mb-2 mr-auto ml-auto">
        <h-loading :loadStatus="loadStatus" />

        <div v-if="loadStatus === 'finished'" class="w-11/12 mr-auto ml-auto text-sm sm:hidden">
            <div class="py-3 border-b border-lightborder dark:border-border100" v-for="(item, index) in dataList"
                :key="index">
                <div class="flex justify-start item-center mb-1">
                    <div class="pr-2 text-lighttable dark:text-white200">{{ $t('dpos.address') }}: </div>
                    <div class="text-clickable" @click="toAddress(item.address)">{{ addressFilter(item.address) }}</div>
                </div>
                <div class="flex justify-start item-center mb-1">
                    <div class="pr-2 text-lighttable dark:text-white200">{{ $t('dpos.vote') }}: </div>
                    <div class=""> {{ item.votes }}</div>
                </div>
                <div class="flex justify-start item-center">
                    <div class="pr-2 text-lighttable dark:text-white200">{{ $t('dpos.name') }}: </div>
                    <div class="">{{ item.name }}</div>
                </div>
            </div>
        </div>

        <div v-if="loadStatus === 'finished'"
            class="hidden sm:block border-b min-w-100 border-lightborder dark:border-border100">
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
                    <div class="w-60 cursor-pointer text-clickable transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:scale-110"
                        @click="toAddress(item.address)">
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
                path: '/dpos/details/' + address
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