<template>
    <div class="border-transparent mr-auto ml-auto overflow-x-scroll sm:overflow-auto">
        <h-loading :loadStatus="loadStatus" />
        <div v-if="loadStatus === 'finished'" class="w-11/12 mr-auto ml-auto text-sm sm:hidden">
            <div class="py-3 border-b border-lightborder dark:border-border100" v-for="(item, index) in dataList"
                :key="index">
                <div class="flex justify-start item-center mb-1">
                    <div class="pr-2 text-lighttable dark:text-white200">{{ $t('Block.blockNumber') }}: </div>
                    <div class="text-clickable" @click="toBlock(item.height, item.number)">{{ item.number }}</div>
                </div>
                <div class="flex justify-start item-center mb-1">
                    <div class="pr-2 text-lighttable dark:text-white200">{{ $t('BlockList.height') }}: </div>
                    <div class="text-lighttable">{{ item.height }} </div>
                </div>
                <div class="flex justify-start item-center mb-1">
                    <div class="pr-2 text-lighttable dark:text-white200">{{ $t('Block.blockSlot') }}: </div>
                    <div class="text-lighttable">{{ item.slot }} </div>
                </div>
                <div class="flex justify-start item-center mb-1">
                    <div class="pr-2 text-lighttable dark:text-white200">{{ $t('Block.blockHASH') }}: </div>
                    <div class="text-lighttable">{{ addressFilter(item.hash) }}</div>
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
                    <div class="w-60 cursor-pointer hover:font-extrabold text-clickable transition duration-300 ease-in-out transform hover:-translate-y-0.5  "
                        @click="toBlock(item.height, item.number)">
                        {{ item.number }}
                    </div>
                    <div class="w-60">
                        {{ item.height }}
                    </div>
                    <div class="w-60">
                        {{ item.slot }}
                    </div>
                    <div class="w-60">
                        {{ addressFilter(item.hash) }}
                    </div>
                    <div class="w-60 text-sm flex justify-start items-center">
                        <div class="cursor-pointer hover:font-extrabold text-clickable transition duration-300 ease-in-out transform hover:-translate-y-0.5 "
                            @click="toAddress(item.reward_address)">
                            {{ addressFilter(item.reward_address) }}
                        </div>
                        <div class="cursor-pointer icon iconfont icon-copy text-clickable pl-2"
                            @click="copyContent(item.reward_address)" />
                    </div>
                    <div class="w-60">
                        {{ item.reward_money }}
                    </div>
                    <div class="w-60">
                        {{ item.txs }}
                    </div>
                    <div class="w-60">
                        {{ timeFormat(item.time) }}
                    </div>
                    <div class="w-60">
                        {{ addressFilter(item.prev_hash) }}
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
        toBlock(height, number) {
            this.$router.push({
                path: '/block/' + height,
                query: {
                    number: number
                }
            })
        }
    },
    computed: {
        tableTitleList() {
            return [
                {
                    title: this.$t('Block.blockNumber')
                },
                {
                    title: this.$t('BlockList.height')
                },
                {
                    title: this.$t('Block.blockSlot')
                },
                {
                    title: this.$t('Block.blockHASH')
                },
                {
                    title: this.$t('BlockList.address')
                },
                {
                    title: this.$t('BlockList.reward')
                },
                {
                    title: this.$t('BlockList.amount')
                },
                {
                    title: this.$t('BlockList.time')
                },
                {
                    title: this.$t('BlockList.previousBlock')
                },
            ]
        }
    },
}
</script>

<style></style>