<template>
    <div>
        <div class="mb-2 w-11/12 sm:w-9/12 mr-auto ml-auto">
            <module-title title="dops"></module-title>
        </div>
        <div
            class=" mb-4 w-11/12 sm:w-9/12 mr-auto ml-auto rounded-lg shadow-lg border bg-white border-ligthborder dark:bg-black200 dark:border-border100 dark:shadow">
            <dpos-list-table :dataList="dposListDatas" :loadStatus="dposListLoadStatus" />
            <div class="">
                <h-pagination @changePageSize="toDposFirstPage" @toFirstPage="toDposFirstPage" @toPrePage="toDposPrePage"
                    @toNextPage="toDposNextPage" @toLastPage="toDposLastPage" :pageSize="dposCurrentPage"></h-pagination>
            </div>
        </div>
    </div>
</template>


<script>
import ModuleTitle from '@/components/public/ModuleTitle'
import HPagination from '@/components/public/HPagination'
import DposListTable from '@/components/child/DposListTable'
import { listDelegate } from '@/request/dpos'
export default {
    components: { DposListTable, ModuleTitle, HPagination, },
    name: "dpos",
    data() {
        return {
            dposListDatas: [],
            dposListLoadStatus: 'loading',
            dposPageSize: 10,
            dposCurrentPage: 1,
        }
    },
    created() {
        this.getListDelegate()
    },
    methods: {
        getListDelegate() {
            this.dposListLoadStatus = 'loading'
            listDelegate({ pageSize: this.dposPageSize, page: this.dposCurrentPage }).then(res => {
                if (res.data.length !== 0) {
                    this.dposListDatas = res.data
                    this.dposListLoadStatus = 'finished'
                } else {
                    this.dposListLoadStatus = 'empty'
                }
                console.log(res)
                this.dposCurrentPage = res.page

            });
        },
        toDposFirstPage(selectedPageSize) {
            console.log('第一页')
            this.dposPageSize = selectedPageSize
            this.dposCurrentPage = 1
            this.dposListDatas = []
            this.getListDelegate()
        },
        toDposPrePage(selectedPageSize) {
            if (this.dposCurrentPage === 1) {
                return
            }
            this.dposPageSize = selectedPageSize
            this.dposCurrentPage = this.dposCurrentPage - 1
            this.dposListDatas = []
            this.getListDelegate()
        },
        toDposNextPage(selectedPageSize) {
            this.dposPageSize = selectedPageSize
            this.dposCurrentPage = this.dposCurrentPage + 1
            this.dposListDatas = []
            this.getListDelegate()
        },
        toDposLastPage() {

        },


    },
}
</script>

<style>
h1,
h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {}

a {
    color: #2d8cf0;
}
</style>