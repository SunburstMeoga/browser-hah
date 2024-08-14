<template>
    <div>
        <div class="mb-4 sm:mb-6 w-11/12 mr-auto ml-auto rounded-lg shadow-lg border sm:w-9/12 bg-white border-ligthborder dark:bg-black200 dark:border-border100 dark:shadow"
            style="box-shadow:0 0.5rem 1.2rem rgba(82, 85, 92, .15);">
            <div class="py-3 px-2 mr-auto ml-auto">
                <div class="flex justify-start items-center flex-wrap sm:flex-nowrap px-2">
                    <div class="text-black dark:text-white300 text-base font-bold sm:text-xl pr-3">{{
                        $t('branch.currentBranch')
                    }}:</div>
                    <div class="flex justify-start items-center">
                        <div :class="index === 1 ? 'ml-4' : ''" v-for="(item, index) in branchList" :key="index">
                            <el-radio @input="enabled(item)" v-model="chainid" :label="item.chainid">{{ item.name
                                }}</el-radio>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="mb-4 sm:mb-6 w-11/12 mr-auto ml-auto rounded-lg shadow-lg border sm:w-9/12 bg-white border-ligthborder dark:bg-black200 dark:border-border100 dark:shadow"
            style="box-shadow:0 0.5rem 1.2rem rgba(82, 85, 92, .15);">
            <div class="py-2 sm:mb-4 mr-auto ml-auto border-b border-ligthborder dark:border-border100">
                <div class="w-11/12 mr-auto ml-auto sm:w-full sm:px-2 sm:py-3">
                    <module-title :title="$t('branch.infor')" :total="totalBlocks" />
                </div>
            </div>
            <branch-info-table :dataList="branchList" :loadStatus="blockTableLoadStatus" />
            <div>
                <h-pagination @changePageSize="toBlockFirstPage" @toFirstPage="toBlockFirstPage"
                    @toPrePage="toBlockPrePage" @toNextPage="toBlockNextPage" @toLastPage="toBlockLastPage"
                    :currentPage="blockCurrentPage" :totalPage="totalPage" @toTargetPage="toBlockTargetPage" />
            </div>
        </div>
    </div>
</template>

<script>
import BranchInfoTable from '@/components/child/BranchInfoTable'
import ModuleTitle from '@/components/public/ModuleTitle'
import HPagination from '@/components/public/HPagination'
import { branchList } from '@/request/branch'
import { numberFormat } from '../../utils/format'

export default {
    components: { BranchInfoTable, ModuleTitle, HPagination },
    data() {
        return {
            branchList: [],
            blockTableLoadStatus: 'loading',
            blockPageSize: 10,
            blockCurrentPage: 1,
            totalBlocks: 0,
            totalPage: 0,
            chainid: 0
        }
    },
    created() {
        this.getBranchList()
    },
    methods: {
        numberFormat,
        getBranchList() {
            this.blockTableLoadStatus = 'loading',
                branchList({ pageSize: this.blockPageSize, page: this.blockCurrentPage, chainid: localStorage.getItem('chainID') }).then(res => {
                    this.blockTableLoadStatus = 'finished'
                    console.log('sdfsdf', res)
                    this.branchList = res
                    if (res.data.length !== 0) {
                        this.branchList = res.data
                        this.blockTableLoadStatus = 'finished'
                        if (!localStorage.getItem('chainID')) {
                            localStorage.setItem('chainName', branchList[0].name)
                            localStorage.setItem('chainID', branchList[0].name.chainid)
                            // branchList[0].chedked = true
                            this.$store.commit('getChainId', branchList[0].name.chainid)
                            this.$store.commit('getChainName', branchList[0].name.name)
                            this.chainid = branchList[0].name
                        } else {
                            this.chainid = localStorage.getItem('chainID')

                        }
                        console.log(this.chainid)
                    } else {
                        this.blockTableLoadStatus = 'empty'
                        this.$message.error(this.$t('messageTips.noMore'))
                    }
                    this.totalPage = res.totalPage
                    this.totalBlocks = res.total
                    this.blockCurrentPage = res.page
                }).catch(err => {
                    console.log('load fail:', err)
                })
        },
        enabled(item) {
            console.log(item)
            localStorage.setItem('chainName', item.name)
            localStorage.setItem('chainID', item.chainid)
            this.$store.commit('getChainId', item.chainid)
            this.$store.commit('getChainName', item.name)
            console.log(item.chainid, localStorage.getItem('chainID'), this.$store.state.chainName, item.checked)
        },
        toBlockFirstPage(selectedPageSize) {
            console.log('第一页')
            this.blockPageSize = selectedPageSize
            this.blockCurrentPage = 1
            this.branchList = []
            this.getBranchList()

        },
        toBlockPrePage(selectedPageSize) {
            if (this.blockCurrentPage === 1) {
                return
            }
            this.blockPageSize = selectedPageSize
            this.blockCurrentPage = this.blockCurrentPage - 1
            this.branchList = []
            this.getBranchList()
        },
        toBlockNextPage(selectedPageSize) {
            this.blockPageSize = selectedPageSize
            this.blockCurrentPage = this.blockCurrentPage + 1
            this.branchList = []
            this.getBranchList()
        },
        toBlockLastPage(selectedPageSize) {
            if (this.blockCurrentPage > this.totalPage) {
                return
            }
            this.blockPageSize = selectedPageSize
            this.blockCurrentPage = this.totalPage
            this.branchList = []
            this.getBranchList()
        },
        // toBlockTargetPage() {

        // }
        toBlockTargetPage(selectedPageSize, targetPage) {
            console.log(targetPage)
            if (targetPage <= 0) {
                return
            }
            this.blockPageSize = selectedPageSize
            this.blockCurrentPage = targetPage
            this.branchList = []
            this.getBranchList()
        }
    },

}
</script>


<style></style>