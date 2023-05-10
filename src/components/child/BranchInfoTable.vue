<template>
    <div class="border-transparent mr-auto ml-auto overflow-x-scroll sm:overflow-auto">
        <h-loading :loadStatus="loadStatus" />
        <div v-if="loadStatus === 'finished'" class="w-11/12 mr-auto ml-auto text-sm sm:hidden">
            <div class="py-3 border-b border-lightborder dark:border-border100" v-for="(item, index) in dataList"
                :key="index">
                <div class="flex justify-start item-center mb-1">
                    <div class="pr-2 text-lighttable dark:text-white200">{{ $t('BlockList.height') }}: </div>
                    <div class="text-clickable" @click="toBlock(item.height)">{{ item.height }}</div>

                </div>
                <div class="flex justify-start item-center mb-1">
                    <div class="pr-2 text-lighttable dark:text-white200">{{ $t('BlockList.address') }}: </div>
                    <div class="text-clickable" @click="toAddress(item.reward_address)">{{
                        addressFilter(item.reward_address) }}</div>
                    <div class="icon iconfont icon-copy text-clickable pl-2" @click="copyContent(item.reward_address)" />
                </div>
                <div class="flex justify-start item-center">
                    <div class="pr-2 text-lighttable dark:text-white200">{{ $t('BlockList.time') }}: </div>
                    <div class="text-lighttable">{{ timeFormat(item.time) }}</div>
                </div>
            </div>
        </div>

        <div v-if="loadStatus === 'finished'"
            class="hidden sm:block border-b h-full min-w-120 border-lightborder dark:border-border100">
            <div class="py-2 flex flex-nowrap w-full justify-start sm:pl-2 sm:py-4">

                <div class="text-sm flex-1 font-black text-lighttable dark:text-white200"
                    v-for="(item, index) in tableTitleList" :key="index">
                    {{ item.title }}
                </div>
            </div>
            <div class="sm:pl-2 sm:pt-2">
                <div v-for="(item, index) in dataList" :key="index"
                    class="flex flex-nowrap w-full justify-start py-3 border-b text-sm border-lightborder text-lighttable dark:text-white200 dark:border-border100">
                    <div class="flex-1">
                        {{ addressFilter(item.fork) }}
                    </div>
                    <div class="flex-1">
                        {{ item.chainid }}
                    </div>
                    <div class="flex-1">
                        {{ item.name }}
                    </div>
                    <div class="flex-1">
                        {{ item.symbol }}
                    </div>
                    <div class="flex-1">
                        {{ item.amount }}
                    </div>
                    <div class="flex-1">
                        {{ item.reward }}
                    </div>
                    <div class="flex-1">
                        {{ item.halvecycle }}
                    </div>
                    <div class="flex-1">
                        {{ addressFilter(item.owner) }}
                    </div>
                    <div class="flex-1">
                        {{ addressFilter(item.createtxid) }}
                    </div>
                    <div class="flex-1">
                        {{ item.createforkheight }}
                    </div>
                    <div class="flex-1">
                        {{ addressFilter(item.parentfork) }}

                    </div>
                    <div class="flex-1">
                        {{ item.forkheight }}
                    </div>
                    <div class="flex-1">
                        {{ item.lastnumber }}
                    </div>
                    <div class="flex-1">
                        {{ addressFilter(item.lastblock) }}

                    </div>
                    <div class="flex-1">
                        {{ item.totaltxcount }}

                    </div>
                    <div class="flex-1">
                        {{ addressFilter(item.moneysupply) }}

                    </div>
                    <div class="flex-1">
                        {{ item.moneydestroy }}

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
                    title: '链HASH'
                },
                {
                    title: '链ID'
                },
                {
                    title: '链名称'
                },
                {
                    title: '链符号'
                },
                {
                    title: '首发数量'
                },
                {
                    title: '出块奖励'
                },
                {
                    title: '衰减周期'
                },
                {
                    title: '创建者地址'
                },
                {
                    title: '创建交易HASH'
                },
                {
                    title: '创建时高度'
                },
                {
                    title: '上级链HASH'
                },
                {
                    title: '当前高度'
                },
                {
                    title: '区块数量'
                },
                {
                    title: '最后区块HASH'
                },
                {
                    title: '交易总数'
                },
                {
                    title: '发行总量'
                },
                {
                    title: '销毁总量'
                },
            ]
        }
    },
}
</script>

<style></style>