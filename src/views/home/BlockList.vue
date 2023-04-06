<template>
    <div>
        <div class="mb-2 sm:mb-4 w-11/12 sm:w-9/12 mr-auto ml-auto">
            <module-title :title="$t('BlockList.newBlock')" />
        </div>
        <div class="mb-4 sm:mb-6 w-11/12 mr-auto ml-auto rounded-lg shadow-lg border sm:w-9/12 bg-white border-ligthborder dark:bg-black200 dark:border-border100 dark:shadow"
            style="box-shadow:0 0.5rem 1.2rem rgba(82, 85, 92, .15);">
            <new-block-table :dataList="blockListDatas" :loadStatus="blockTableLoadStatus" />
            <div>
                <h-pagination @changePageSize="toBlockFirstPage" @toFirstPage="toBlockFirstPage" @toPrePage="toBlockPrePage"
                    @toNextPage="toBlockNextPage" @toLastPage="toBlockLastPage" :pageSize="blockCurrentPage" />
            </div>
        </div>
    </div>
</template>

<script>
import NewBlockTable from '@/components/child/NewBlockTable'
import ModuleTitle from '@/components/public/ModuleTitle'
import HPagination from '@/components/public/HPagination'
import { blockList } from '@/request/home'

export default {
    components: { NewBlockTable, ModuleTitle, HPagination },
    data() {
        return {
            blockListDatas: [],
            blockTableLoadStatus: 'loading',
            blockPageSize: 10,
            blockCurrentPage: 1,
            totalPage: 1,
        }
    },
    created() {
        this.getBlockList()
    },
    methods: {
        getBlockList() {
            this.blockTableLoadStatus = 'loading',
                blockList({ pageSize: this.blockPageSize, page: this.blockCurrentPage }).then(res => {
                    console.log('getNewBlock', res)
                    if (res.data.length !== 0) {
                        this.blockListDatas = res.data
                        this.blockTableLoadStatus = 'finished'
                    } else {
                        this.websock.close();
                        this.blockTableLoadStatus = 'empty'
                    }
                    this.totalPage = res.totalPage
                    this.blockCurrentPage = res.page
                }).catch(err => {
                    console.log('load fail:', err)
                })
        },
        toBlockFirstPage(selectedPageSize) {
            console.log('第一页')
            this.blockPageSize = selectedPageSize
            this.blockCurrentPage = 1
            this.blockListDatas = []
            this.getBlockList()

        },
        toBlockPrePage(selectedPageSize) {
            if (this.blockCurrentPage === 1) {
                return
            }
            this.blockPageSize = selectedPageSize
            this.blockCurrentPage = this.blockCurrentPage - 1
            this.blockListDatas = []
            this.getBlockList()
        },
        toBlockNextPage(selectedPageSize) {
            this.blockPageSize = selectedPageSize
            this.blockCurrentPage = this.blockCurrentPage + 1
            this.blockListDatas = []
            this.getBlockList()
        },
        toBlockLastPage(selectedPageSize) {
            if (this.blockCurrentPage > this.totalPage) {
                return
            }
            this.blockPageSize = selectedPageSize
            this.blockCurrentPage = this.totalPage
            this.blockListDatas = []
            this.getBlockList()
        },
    },

}
</script>


<style></style>