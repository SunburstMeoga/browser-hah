<template>
    <div class="border-transparent mr-auto ml-auto overflow-x-scroll sm:overflow-auto">
        <h-loading :loadStatus="loadStatus" />
        <div v-if="loadStatus === 'finished'" class="w-11/12 mr-auto ml-auto text-sm sm:hidden">
            <div class="py-3 border-b border-lightborder dark:border-border100" v-for="(item, index) in dataList"
                :key="index">
                <div class="flex justify-start item-center">
                    <div class="pr-2 text-lighttable dark:text-white200">链ID: </div>
                    <div class="text-lighttable">{{ item.chainid }}</div>
                </div>
                <div class="flex justify-start item-center mb-1">
                    <div class="pr-2 text-lighttable dark:text-white200">链HASH: </div>
                    <div class="text-clickable" @click="toBlock(item.fork)">{{ addressFilter(item.fork) }}</div>
                    <div class="icon iconfont icon-copy text-clickable pl-2" @click="copyContent(item.fork)" />
                </div>
                <div class="flex justify-start item-center mb-1">
                    <div class="pr-2 text-lighttable dark:text-white200">链名称: </div>
                    <div class="text-lighttable">{{ item.name }}</div>
                </div>
                <div class="flex justify-start item-center">
                    <div class="pr-2 text-lighttable dark:text-white200">链符号: </div>
                    <div class="text-lighttable">{{ item.symbol }}</div>
                </div>
                <div class="flex justify-start item-center mb-1">
                    <div class="pr-2 text-lighttable dark:text-white200">首发数量: </div>
                    <div class="text-lighttable">{{ item.amount }}</div>
                </div>
                <div class="flex justify-start item-center mb-1">
                    <div class="pr-2 text-lighttable dark:text-white200">出块奖励: </div>
                    <div class="text-lighttable">{{ item.reward }}</div>
                </div>
                <div class="flex justify-start item-center">
                    <div class="pr-2 text-lighttable dark:text-white200">衰减周期: </div>
                    <div class="text-lighttable">{{ item.halvecycle }}</div>
                </div>
                <div class="flex justify-start item-center mb-1">
                    <div class="pr-2 text-lighttable dark:text-white200">创建者地址: </div>
                    <div class="text-clickable" @click="toAddress(item.symbol)">{{
                        addressFilter(item.owner) }}</div>
                    <div class="icon iconfont icon-copy text-clickable pl-2" @click="copyContent(item.owner)" />

                </div>
                <div class="flex justify-start item-center mb-1">
                    <div class="pr-2 text-lighttable dark:text-white200">创建交易HASH: </div>
                    <div class="text-clickable" @click="toAddress(item.createtxid)">{{
                        addressFilter(item.createtxid) }}</div>
                    <div class="icon iconfont icon-copy text-clickable pl-2" @click="copyContent(item.createtxid)" />
                </div>
                <div class="flex justify-start item-center">
                    <div class="pr-2 text-lighttable dark:text-white200">创建时高度: </div>
                    <div class="text-lighttable">{{ item.createforkheight }}</div>
                </div>
                <div class="flex justify-start item-center mb-1">
                    <div class="pr-2 text-lighttable dark:text-white200">上级链HASH: </div>
                    <div class="text-clickable" @click="toAddress(item.createtxid)">{{
                        addressFilter(item.parentfork) }}</div>
                    <div class="icon iconfont icon-copy text-clickable pl-2" @click="copyContent(item.parentfork)" />

                </div>
                <div class="flex justify-start item-center">
                    <div class="pr-2 text-lighttable dark:text-white200">当前高度: </div>
                    <div class="text-lighttable">{{ timeFormat(item.forkheight) }}</div>
                </div>
                <div class="flex justify-start item-center mb-1">
                    <div class="pr-2 text-lighttable dark:text-white200">区块数量: </div>
                    <div class="text-clickable" @click="toBlock(item.symbol)">{{ item.lastnumber }}</div>

                </div>
                <div class="flex justify-start item-center mb-1">
                    <div class="pr-2 text-lighttable dark:text-white200">最后区块HASH: </div>
                    <div class="text-clickable" @click="toAddress(item.lastblock)">{{
                        addressFilter(item.lastblock) }}</div>
                    <div class="icon iconfont icon-copy text-clickable pl-2" @click="copyContent(item.lastblock)" />
                </div>
                <div class="flex justify-start item-center">
                    <div class="pr-2 text-lighttable dark:text-white200">交易总数: </div>
                    <div class="text-lighttable">{{ item.totaltxcount }}</div>
                </div>
                <div class="flex justify-start item-center mb-1">
                    <div class="pr-2 text-lighttable dark:text-white200">发行总量: </div>
                    <div class="text-lighttable">{{ item.moneysupply }}</div>

                </div>
                <div class="flex justify-start item-center mb-1">
                    <div class="pr-2 text-lighttable dark:text-white200">销毁总量: </div>
                    <div class="text-lighttable">{{ item.moneydestroy }}</div>

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
                        {{ item.chainid }}
                    </div>
                    <div class="flex-1 flex items-center justify-start">
                        <div class="cursor-pointer hover:font-extrabold text-clickable transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:scale-110"
                            @click="toAddress(item.fork)">
                            {{ addressFilter(item.fork) }}
                        </div>
                        <div class="cursor-pointer icon iconfont icon-copy text-clickable pl-1"
                            @click="copyContent(item.fork)" />
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
                    <div class="flex-1 flex items-center justify-start">
                        <div class="cursor-pointer hover:font-extrabold text-clickable transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:scale-110"
                            @click="toAddress(item.owner)">
                            {{ addressFilter(item.owner) }}
                        </div>
                        <div class="cursor-pointer icon iconfont icon-copy text-clickable pl-1"
                            @click="copyContent(item.owner)" />
                    </div>
                    <div class="flex-1 flex items-center justify-start">
                        <div class="cursor-pointer hover:font-extrabold text-clickable transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:scale-110"
                            @click="toAddress(item.createtxid)">
                            {{ addressFilter(item.createtxid) }}
                        </div>
                        <div class="cursor-pointer icon iconfont icon-copy text-clickable pl-1"
                            @click="copyContent(item.createtxid)" />
                    </div>
                    <div class="flex-1">
                        {{ item.createforkheight }}
                    </div>
                    <div class="flex-1 flex items-center justify-start">
                        <div class="cursor-pointer hover:font-extrabold text-clickable transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:scale-110"
                            @click="toAddress(item.parentfork)">
                            {{ addressFilter(item.parentfork) }}
                        </div>
                        <div class="cursor-pointer icon iconfont icon-copy text-clickable pl-1"
                            @click="copyContent(item.parentfork)" />
                    </div>
                    <div class="flex-1">
                        {{ item.forkheight }}
                    </div>
                    <div class="flex-1">
                        {{ item.lastnumber }}
                    </div>
                    <div class="flex-1 flex items-center justify-start">
                        <div class="cursor-pointer hover:font-extrabold text-clickable transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:scale-110"
                            @click="toAddress(item.lastblock)">
                            {{ addressFilter(item.lastblock) }}
                        </div>
                        <div class="cursor-pointer icon iconfont icon-copy text-clickable pl-1"
                            @click="copyContent(item.lastblock)" />
                    </div>
                    <div class="flex-1">
                        {{ item.totaltxcount }}

                    </div>
                    <div class="flex-1">
                        {{ item.moneysupply }}

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
                    title: '链ID'
                },
                {
                    title: '链HASH'
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