<template>
    <div>
        <div class="mb-2 sm:mb-4 w-11/12 sm:w-9/12 mr-auto ml-auto">
            <module-title :title="$t('Pending.tx')" />
        </div>
        <div class="mb-4 sm:mb-6 w-11/12 mr-auto ml-auto rounded-lg shadow-lg border sm:w-9/12 bg-white border-ligthborder dark:bg-black200 dark:border-border100 dark:shadow"
            style="box-shadow:0 0.5rem 1.2rem rgba(82, 85, 92, .15);">
            <trade-table :dataList="TXListDatas" :loadStatus="tradeTableLoadStatus" />
            <div>
                <h-pagination @changePageSize="toTXFirstPage" @toFirstPage="toTXFirstPage" @toPrePage="toTXPrePage"
                    @toNextPage="toTXNextPage" @toLastPage="toTXLastPage" :pageSize="txCurrentPage"></h-pagination>
            </div>
        </div>
    </div>
</template>

<script>
import TradeTable from '@/components/child/TradeTable'
import ModuleTitle from '@/components/public/ModuleTitle'
import HPagination from '@/components/public/HPagination'
import { TXList } from '@/request/home'

export default {
    components: { TradeTable, ModuleTitle, HPagination },
    data() {
        return {
            TXListDatas: [],
            tradeTableLoadStatus: 'loading',
            txPageSize: 10,
            txCurrentPage: 1
        }
    },
    created() {
        this.getTXList()
    },
    methods: {
        getTXList() {
            this.tradeTableLoadStatus = 'loading'
            TXList({ pageSize: this.txPageSize, page: this.txCurrentPage }).then(res => {
                if (res.data.length !== 0) {
                    this.TXListDatas = res.data
                    this.tradeTableLoadStatus = 'finished'
                } else {
                    this.tradeTableLoadStatus = 'empty'
                }
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
        toTXLastPage() {

        },
    },

}
</script>


<style></style>