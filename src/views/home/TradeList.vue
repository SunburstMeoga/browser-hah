<template>
    <div>

        <div class="mb-4 sm:mb-6 w-11/12 mr-auto ml-auto rounded-lg shadow-lg border sm:w-9/12 bg-white border-ligthborder dark:bg-black200 dark:border-border100 dark:shadow"
            style="box-shadow:0 0.5rem 1.2rem rgba(82, 85, 92, .15);">
            <div class="py-2 sm:mb-4 mr-auto ml-auto  border-b border-ligthborder  dark:border-border100">
                <div class="w-11/12 mr-auto ml-auto sm:w-full sm:px-2 sm:py-3">
                    <module-title :title="$t('Pending.tx')" :total="totalTrades" />
                </div>
            </div>
            <trade-table :dataList="TXListDatas" :loadStatus="tradeTableLoadStatus" />
            <div>
                <h-pagination @changePageSize="toTXFirstPage" @toFirstPage="toTXFirstPage" @toPrePage="toTXPrePage"
                    @toNextPage="toTXNextPage" @toLastPage="toTXLastPage" :currentPage="txCurrentPage"
                    :totalPage="totalPage" @toTargetPage="toTradeTargetPage"></h-pagination>
            </div>
        </div>
    </div>
</template>

<script>
import TradeTable from '@/components/child/TradeTable'
import ModuleTitle from '@/components/public/ModuleTitle'
import HPagination from '@/components/public/HPagination'
import { TXList } from '@/request/home'
import { numberFormat } from '../../utils/format'

export default {
    components: { TradeTable, ModuleTitle, HPagination },
    data() {
        return {
            TXListDatas: [],
            tradeTableLoadStatus: 'loading',
            txPageSize: 10,
            txCurrentPage: 1,
            totalPage: 1,
            totalTrades: 0
        }
    },
    created() {
        this.getTXList()
    },
    methods: {
        numberFormat,
        getTXList() {
            this.tradeTableLoadStatus = 'loading'
            TXList({ pageSize: this.txPageSize, page: this.txCurrentPage, chainid: localStorage.getItem('chainID') }).then(res => {
                console.log('getTXList', res)
                if (res.data.length !== 0) {
                    this.TXListDatas = res.data
                    this.tradeTableLoadStatus = 'finished'
                } else {
                    this.tradeTableLoadStatus = 'empty'
                    this.$message.error(this.$t('messageTips.noMore'))
                }
                // this.totalTrades = this.$t('moduleTitle.totalTrade', { count: numberFormat(res.total) })
                this.totalTrades = res.total
                this.totalPage = res.totalPage
                this.txCurrentPage = res.page
            }).catch(err => {
                console.log('load fail:', err)
            })
        },
        toTXFirstPage(selectedPageSize) {
            this.txPageSize = selectedPageSize
            this.txCurrentPage = 1
            this.TXListDatas = []
            this.getTXList()
        },
        toTXPrePage(selectedPageSize) {
            if (this.txCurrentPage === 1) {
                return
            }
            this.txPageSize = selectedPageSize
            this.txCurrentPage = this.txCurrentPage - 1
            this.TXListDatas = []
            this.getTXList()
        },
        toTXNextPage(selectedPageSize) {
            this.txPageSize = selectedPageSize
            this.txCurrentPage = this.txCurrentPage + 1
            this.TXListDatas = []
            this.getTXList()
            console.log('前往下一页', this.blockCurrentPage)
        },
        toTXLastPage(selectedPageSize) {
            console.log(this.txCurrentPage, this.totalPage)
            if (this.txCurrentPage > this.totalPage) {
                return
            }
            this.txPageSize = selectedPageSize
            this.txCurrentPage = this.totalPage
            this.TXListDatas = []
            this.getTXList()
        },
        toTradeTargetPage(selectedPageSize, targetPage) {
            console.log(targetPage)
            if (targetPage <= 0) {
                return
            }
            this.txPageSize = selectedPageSize
            this.txCurrentPage = targetPage
            this.TXListDatas = []
            this.getTXList()
        }
    },

}
</script>


<style></style>