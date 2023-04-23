<template>
    <div class="border-transparent mb-2 mr-auto ml-auto sm:pl-4">
        <h-loading :loadStatus="loadStatus" />

        <div v-if="loadStatus === 'finished'" class="w-11/12 mr-auto ml-auto text-sm sm:hidden">
            <div class="py-3 border-b border-lightborder dark:border-border100" v-for="(item, index) in dataList"
                :key="index">
                <div class="flex justify-start item-center mb-1">
                    <div class="pr-2 text-lighttable dark:text-white200">{{ $t('dpos.address') }}: </div>
                    <div class="text-clickable" @click="toToken(item.addr)">{{ addressFilter(item.addr) }} </div>
                    <div class="cursor-pointer icon iconfont icon-copy text-clickable pl-2"
                        @click="copyContent(item.addr)" />
                </div>
                <div class="flex justify-start item-center mb-1">
                    <div class="pr-2 text-lighttable dark:text-white200">{{ $t('hrc20.symbol') }}: </div>
                    <div class=""> {{ item.symbol }}</div>
                </div>
                <div class="flex justify-start item-center">
                    <div class="pr-2 text-lighttable dark:text-white200">{{ $t('hrc20.totalSupply') }}: </div>
                    <div class="">{{ item.totalSupply }}</div>
                </div>
            </div>
        </div>

        <div v-if="loadStatus === 'finished'"
            class="hidden sm:block border-b min-w-100 border-lightborder dark:border-border100 sm:overflow-x-scroll sm:min-w-full">
            <div class="py-2 flex w-full justify-start">
                <div class="w-60 text-sm font-black text-lighttable dark:text-white200"
                    v-for="(item, index) in tableTitleList" :key="index">
                    {{ item.title }}
                </div>
            </div>
            <div class="">
                <div v-for="(item, index) in dataList" :key="index"
                    class="flex justify-start py-3 border-b text-sm border-lightborder text-lighttable dark:text-white200 dark:border-border100">
                    <div class="w-60  flex justify-start items-center">
                        <div class="cursor-pointer text-clickable transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:scale-110"
                            @click="toToken(item.addr)">
                            {{ addressFilter(item.addr) }}
                        </div>
                        <div class="cursor-pointer icon iconfont icon-copy text-clickable pl-2"
                            @click="copyContent(item.addr)" />
                    </div>
                    <div class="w-60">
                        {{ item.symbol }}
                    </div>
                    <div class="w-60">
                        {{ item.name }}
                    </div>
                    <div class="w-60">
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
        toToken(address) {
            this.$router.push({
                path: '/token/' + address
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