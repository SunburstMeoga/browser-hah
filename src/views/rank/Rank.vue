<template>
    <div>
        <div class="mb-2 w-11/12 sm:w-9/12 mr-auto ml-auto">
            <module-title :title="$t('Rank.rich')"></module-title>
        </div>
        <div
            class=" mb-4 w-11/12 sm:w-9/12 mr-auto ml-auto rounded-lg shadow-lg border bg-white border-ligthborder dark:bg-black200 dark:border-border100 dark:shadow">
            <rank-list-table :dataList="rankListDatas" />
            <div class="">
                <h-pagination></h-pagination>
            </div>
        </div>
    </div>
</template>


<script>

import ModuleTitle from '@/components/public/ModuleTitle'
import HPagination from '@/components/public/HPagination'
import RankListTable from '@/components/child/RankListTable'
import { rankList } from '@/request/rank';
export default {
    name: "Rank",
    components: { RankListTable, ModuleTitle, HPagination, },
    data() {
        return {
            rankListDatas: [],
            pageSize: 20,
            pagenum: 1,
            total: 0,
        }
    },
    mounted() {
        this.getRankList()
    },
    methods: {
        getRankList() {
            let params = {
                page: this.pagenum,
                pagesize: this.pageSize
            };
            rankList(params).then(res => {
                console.log(res)
                this.rankListDatas = res.data
                this.page = res.pagenum
                this.pageSize = res.pagesize
                this.total = res.total
            });
        },
    }
}
</script>

<style></style>