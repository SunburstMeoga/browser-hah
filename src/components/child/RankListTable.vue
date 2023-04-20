<template>
    <div class="border-transparent mb-2 mr-auto ml-auto">
        <h-loading :loadStatus="loadStatus" />

        <div v-if="loadStatus === 'finished'" class="w-11/12 mr-auto ml-auto text-sm sm:hidden">
            <div class="py-3 border-b text-lighttable dark:text-white200 border-lightborder dark:border-border100"
                v-for="(item, index) in dataList" :key="index">
                <div class="flex justify-start item-center mb-1">
                    <div class="pr-2">{{ $t('Rank.address') }}: </div>
                    <div class="text-clickable">{{ addressFilter(item.address) }}</div>
                    <div class="icon iconfont icon-copy text-clickable pl-2" @click="copyContent(item.address)" />
                </div>
                <div class="flex justify-start item-center mb-1">
                    <div class="pr-2 ">{{ $t('Rank.balance') }}: </div>
                    <div class=""> {{ item.balance }} HAH</div>
                </div>
                <div class="flex justify-start item-center">
                    <div class="pr-2">{{ $t('Rank.yield') }}: </div>
                    <div class="">{{ item.yield }}%</div>
                </div>
            </div>
        </div>

        <div v-if="loadStatus === 'finished'"
            class="hidden sm:block border-b border-lightborder dark:border-border100 sm:overflow-x-scroll sm:min-w-full">
            <div class="py-2 flex w-full justify-start">
                <div class="w-40 ml-4 text-sm font-black text-lighttable dark:text-white200">
                    {{ $t('Rank.rank') }}
                </div>
                <div class="w-80 text-sm font-black text-lighttable dark:text-white200"
                    v-for="(item, index) in tableTitleList" :key="index">
                    {{ item.title }}
                </div>
            </div>
            <div class="">
                <div v-for="(item, index) in dataList" :key="index"
                    class="flex justify-start py-3 border-b text-sm border-lightborder text-lighttable dark:text-white200 dark:border-border100">
                    <div class="w-40 ml-4">
                        {{ item.ranking }}
                    </div>
                    <div class="w-80 text-sm flex justify-start items-center">
                        <div class="cursor-pointer hover:font-extrabold text-clickable transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:scale-110"
                            @click="toAddress(item.address)">
                            {{ addressFilter(item.address) }}
                        </div>
                        <div class="cursor-pointer icon iconfont icon-copy text-clickable pl-2"
                            @click="copyContent(item.address)" />
                    </div>
                    <div class="w-80 text-sm">
                        {{ item.balance }} HAH
                    </div>
                    <div class="w-80">
                        {{ item.yield }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HLoading from "@/components/public/HLoading"

import { addressFilter } from '@/utils/format'
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
        addressFilter,
        toAddress(address) {
            this.$router.push({
                path: '/address/' + address
            })
        },
        copyContent(content) {
            navigator.clipboard.writeText(content).then(() => {
                this.$message({
                    message: this.$t('messageTips.copySuccess'),
                    type: 'success'
                });
            }, () => {
                this.$message.error(this.$t('message.fail'));

            });
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