<template>
    <div>
        <div class="mb-2 w-11/12 sm:w-9/12 mr-auto ml-auto">
            <module-title :title="$t('Rank.rich')" :total="totalAddress"></module-title>
        </div>
        <div
            class=" mb-4 w-11/12 sm:w-9/12 mr-auto ml-auto rounded-lg shadow-lg border bg-white border-ligthborder dark:bg-black200 dark:border-border100 dark:shadow">
            <rank-list-table :dataList="rankListDatas" :loadStatus="rankListLoadStatus" />
            <div class="">
                <h-pagination @changePageSize="toRankFirstPage" @toFirstPage="toRankFirstPage" @toPrePage="toRankPrePage"
                    @toNextPage="toRankNextPage" @toLastPage="toRankLastPage" :pageSize="rankCurrentPage"></h-pagination>
            </div>
        </div>
    </div>
</template>


<script>

import ModuleTitle from '@/components/public/ModuleTitle'
import HPagination from '@/components/public/HPagination'
import RankListTable from '@/components/child/RankListTable'
import { rankList } from '@/request/rank';
import { numberFormat } from '../../utils/format'
export default {
    name: "Rank",
    components: { RankListTable, ModuleTitle, HPagination, },
    data() {
        return {
            rankListDatas: [],
            rankListLoadStatus: 'loading',
            rankPageSize: 10,
            rankCurrentPage: 1,
            totalPage: 1,
            totalAddress: ''
        }
    },
    mounted() {
        this.getRankList()
    },
    methods: {
        numberFormat,

        getRankList() {
            this.rankListLoadStatus = 'loading'
            rankList({ pageSize: this.rankPageSize, page: this.rankCurrentPage }).then(res => {
                if (res.data.length !== 0) {
                    this.rankListDatas = res.data
                    this.rankListLoadStatus = 'finished'
                } else {
                    this.rankListLoadStatus = 'empty'
                }
                // this.totalAddress = this.$t('moduleTitle.totalRanks', { count: numberFormat(res.total) })
                this.totalAddress = res.total
                this.totalPage = res.totalPage
                this.rankCurrentPage = res.page
            })
        },
        toRankFirstPage(selectedPageSize) {
            console.log('第一页')
            this.rankPageSize = selectedPageSize
            this.rankCurrentPage = 1
            this.rankListDatas = []
            this.getRankList()

        },
        toRankPrePage(selectedPageSize) {
            if (this.rankCurrentPage === 1) {
                return
            }
            this.rankPageSize = selectedPageSize
            this.rankCurrentPage = this.rankCurrentPage - 1
            this.rankListDatas = []
            this.getRankList()
        },
        toRankNextPage(selectedPageSize) {
            console.log(this.rankCurrentPage, this.totalPage)

            if (this.rankCurrentPage >= this.totalPage) {
                return
            }
            this.rankPageSize = selectedPageSize
            this.rankCurrentPage = this.rankCurrentPage + 1
            this.rankListDatas = []
            this.getRankList()
        },
        toRankLastPage(selectedPageSize) {
            console.log(this.rankCurrentPage, this.totalPage)
            if (this.rankCurrentPage >= this.totalPage) {
                return
            }
            this.rankPageSize = selectedPageSize
            this.rankCurrentPage = this.rankCurrentPage + 1
            this.rankListDatas = []
            this.getRankList()
        },
    }
}
</script>

<style></style>