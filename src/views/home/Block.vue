<template>
    <div class="w-full pb-4 bg-lightsecond dark:bg-black300">
        <div>
            <div class="w-11/12 mr-auto ml-auto py-5 mb-4 sm:w-9/12 border-b border-ligthborder dark:border-border100">
                <second-title :title="$t('common.block')" :details="'#' + height" />
            </div>
        </div>

        <div class="mb-4">
            <div
                class="w-11/12 sm:w-9/12 mr-auto ml-auto rounded-lg shadow-lg border bg-white border-ligthborder dark:bg-black200 dark:border-border100 dark:shadow">
                <h-loading :loadStatus="blockInfoLoadStatus" />

                <div v-if="blockInfoLoadStatus === 'finished'">
                    <block-details-card :blockInfo="blockInfo"></block-details-card>
                </div>
            </div>
        </div>

        <div>
            <div
                class="w-11/12 sm:w-9/12 mr-auto ml-auto rounded-lg pt-2 shadow-lg border bg-white border-ligthborder dark:bg-black200 dark:border-border100 dark:shadow">
                <div class="pb-2 border-b border-ligthborder dark:border-border100 ">
                    <div class="pl-2">
                        <module-title :title="$t('common.block') + '' + $t('Block.tx')" :total="totalTrade" />
                    </div>
                </div>
                <div>
                    <h-loading :loadStatus="tranLoadStatus" />

                    <div v-if="tranLoadStatus === 'finished'">
                        <div v-for="(item, index) in txListDatas" :key="index"
                            class="w-11/12 mr-auto ml-auto py-2 sm:w-full sm:px-3 border-b border-ligthborder dark:border-border100 ">
                            <block-transaction-card :transactionInfo="item" />
                        </div>
                    </div>

                </div>
                <div>
                    <h-pagination @changePageSize="toTXFirstPage" @toFirstPage="toTXFirstPage" @toPrePage="toTXPrePage"
                        @toNextPage="toTXNextPage" @toLastPage="toTXLastPage" :totalPage="totalPage"
                        :currentPage="txCurrentPage" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HLoading from "@/components/public/HLoading"

import HPagination from '@/components/public/HPagination'
import BlockDetailsCard from '@/components/child/BlockDetailsCard'
import BlockTransactionCard from '@/components/child/BlockTransactionCard'

import ModuleTitle from '@/components/public/ModuleTitle'
import SecondTitle from '@/components/public/SecondTitle'
import { blockInfo, TXList } from '@/request/home'

import { numberFormat } from "../../utils/format"

export default {
    name: "Block",
    components: { SecondTitle, HPagination, BlockDetailsCard, ModuleTitle, BlockTransactionCard, HLoading },
    data() {
        return {

            height: '',
            blockInfo: {},
            transactionInfo: {},
            txListDatas: [],
            tranLoadStatus: 'loading',
            blockInfoLoadStatus: 'loading',
            txPageSize: 10,
            txCurrentPage: 1,
            totalTrade: 0,
            totalPage: 0
        }
    },
    created() {
        this.height = this.$route.params.height
        console.log('height', this.height)
        this.getBlockInfo()
    },
    methods: {
        numberFormat,
        toTX(txid) {
            console.log('sfadfs')
            this.$router.push({
                path: '/tx/' + txid
            })
        },
        getTXList() {
            this.tranLoadStatus = 'loading',
                TXList({ pageSize: this.txPageSize, page: this.txCurrentPage, block_hash: this.blockInfo.hash }).then(res => {
                    console.log('rse', res)
                    if (res.data.length !== 0) {
                        this.txListDatas = res.data
                        this.tranLoadStatus = 'finished'
                    } else {
                        this.tranLoadStatus = 'empty'
                    }
                    // this.totalTrade = this.$t('moduleTitle.totalTrade', { count: numberFormat(res.total) })
                    this.totalTrade = res.total
                    this.totalPage = res.totalPage
                });
        },

        toTXFirstPage(selectedPageSize) {
            console.log('第一页')
            this.txPageSize = selectedPageSize
            this.txCurrentPage = 1
            this.txListDatas = []
            this.getTXList()
        },
        toTXPrePage(selectedPageSize) {
            if (this.txCurrentPage === 1) {
                return
            }
            this.txPageSize = selectedPageSize
            this.txCurrentPage = this.txCurrentPage - 1
            this.txListDatas = []
            this.getTXList()
        },
        toTXNextPage(selectedPageSize) {
            this.txPageSize = selectedPageSize
            this.txCurrentPage = this.txCurrentPage + 1
            this.txListDatas = []
            this.getTXList()
        },
        toTXLastPage() {

        },
        getBlockInfo() {
            let params = {
                param: this.height.toString()
            };
            blockInfo(params).then(res => {
                console.log('getBlockInfo', res)
                this.blockInfo.height = res.height
                this.blockInfo.hash = res.hash
                this.blockInfo.time = res.time
                this.blockInfo.txs = res.txs
                this.blockInfo.prev_hash = res.prev_hash
                this.blockInfo.reward_address = res.reward_address
                this.blockInfo.reward_money = res.reward_money
                this.blockInfo.gasUsed = res.gasUsed
                this.blockInfo.gasLimit = res.gasLimit
                this.blockInfoLoadStatus = 'finished'
                this.$store.commit('getBlockInfo', this.blockInfo)
                this.getTXList()
            });
        }
    },

}


</script>


<style></style>