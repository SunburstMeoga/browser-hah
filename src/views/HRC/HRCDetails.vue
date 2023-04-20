<template>
    <div>
        <div>
            <div class="mb-2 w-11/12 mr-auto ml-auto sm:mb-4 sm:w-9/12 ">
                <module-title :title="tokenInfo.name"></module-title>
            </div>
        </div>
        <div
            class="text-sm w-11/12 mr-auto ml-auto sm:mb-8 sm:w-9/12 sm:flex justify-between items-start text-lightitemtitle dark:text-btndisable mb-4">
            <div
                class="mb-4 rounded-lg px-3 py-2 sm:w-0.48 sm:mb-0  shadow-lg border bg-white border-ligthborder dark:bg-black200 dark:border-border100 dark:shadow">
                <div class="font-black text-base pb-2 mb-2 border-b border-ligthborder dark:border-border100">
                    {{ $t('hrc20.overview') }}</div>
                <div class="flex justify-start items-center mb-2">
                    <div class="font-bold pr-4 sm:w-1/4 ">{{ $t('common.address') }}:</div>
                    <div class="text-sm cursor-pointer text-clickable transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:scale-110"
                        @click="toAddress(tokenInfo.addr)">{{ addressFilter(tokenInfo.addr)
                        }}</div>
                </div>
                <div class="flex justify-start items-center mb-2">
                    <div class="font-bold pr-4 sm:w-1/4 ">{{ $t('hrc20.name') }}:</div>
                    <div class="text-sm">{{ tokenInfo.name }}</div>
                </div>
                <div class="flex justify-start items-center">
                    <div class="font-bold pr-4 sm:w-1/4 ">{{ $t('hrc20.decimals') }}:</div>
                    <div class="text-sm">{{ tokenInfo.decimals }}</div>
                </div>
            </div>
            <div
                class="rounded-lg  px-3 py-2 sm:w-0.48 shadow-lg border bg-white border-ligthborder dark:bg-black200 dark:border-border100 dark:shadow">
                <div class="font-black text-base pb-2 mb-2 border-b border-ligthborder dark:border-border100">
                    {{ $t('hrc20.profileSummary') }}</div>

                <div class=" flex justify-start items-center mb-2">
                    <div class="font-bold pr-4 sm:w-1/4 ">{{ $t('hrc20.owner') }}:</div>
                    <div class="text-sm cursor-pointer text-clickable transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:scale-110"
                        @click="toAddress(tokenInfo.owner)">{{
                            addressFilter(tokenInfo.owner) }}</div>
                </div>
                <div class="flex justify-start items-center mb-2">
                    <div class="font-bold pr-4 sm:w-1/4 ">{{ $t('hrc20.symbol') }}:</div>
                    <div class="text-sm">{{ tokenInfo.symbol }}</div>
                </div>
                <div class="flex justify-start items-center">
                    <div class=" font-bold pr-4 sm:w-1/4 ">{{ $t('hrc20.totalSupply') }}:</div>
                    <div class="text-sm">{{ tokenInfo.totalSupply }}</div>
                </div>
            </div>
        </div>
        <div v-if="tokenInfo.balance">

            <div class="mb-4 sm:mb-6 w-11/12 mr-auto ml-auto rounded-lg shadow-lg border sm:w-9/12 bg-white border-ligthborder dark:bg-black200 dark:border-border100 dark:shadow"
                style="box-shadow:0 0.5rem 1.2rem rgba(82, 85, 92, .15);">
                <div class="flex justify-between items-center sm:justify-start px-2 py-2">
                    <div class="font-bold text-lightitemtitle dark:text-btndisable sm:pr-4">{{ $t('Rank.balance') }}:</div>
                    <div class="text-lighttable dark:text-white200">{{ tokenInfo.balance }} {{ tokenInfo.symbol }}</div>

                </div>
            </div>
        </div>
        <div class="mb-2 sm:mb-4 w-11/12 sm:w-9/12 mr-auto ml-auto">
            <module-title :title="'HRC20' + $t('common.tx')" :total="totalTrade"></module-title>
        </div>
        <div class="mb-4 sm:mb-6 w-11/12 mr-auto ml-auto rounded-lg shadow-lg border sm:w-9/12 bg-white border-ligthborder dark:bg-black200 dark:border-border100 dark:shadow"
            style="box-shadow:0 0.5rem 1.2rem rgba(82, 85, 92, .15);">
            <token-trans-table :dataList="dataList" :loadStatus="tokenTableLoadStatus" />
            <div>
                <h-pagination @changePageSize="toTXFirstPage" @toFirstPage="toTXFirstPage" @toPrePage="toTXPrePage"
                    @toNextPage="toTXNextPage" @toLastPage="toTXLastPage" :totalPage="totalPage"
                    :currentPage="txCurrentPage" @toTargetPage="toTradeTargetPage" />
            </div>
        </div>
    </div>
</template>

<script>
import ModuleTitle from '@/components/public/ModuleTitle'
import TokenTransTable from '@/components/child/TokenTransTable'
import HPagination from '@/components/public/HPagination'

import { contractTX, HRC20Details } from '@/request/hrc'
import { numberFormat, addressFilter } from '@/utils/format'
export default {
    components: { ModuleTitle, TokenTransTable, HPagination },
    data() {
        return {
            dataList: [],
            address: '',
            tokenInfo: {},
            tokenTableLoadStatus: 'loading',
            txPageSize: 10,
            txCurrentPage: 1,
            totalTrade: 0,
            totalPage: 0,
            conAddress: ''
        }
    },
    created() {
        this.address = this.$route.params.address
        this.conAddress = this.$route.query.a
    },
    mounted() {
        this.getContractTX()
        this.getHRC20Details()
    },
    methods: {
        numberFormat, addressFilter,
        toAddress(address) {
            this.$router.push({
                path: '/address/' + address
            })
        },
        getHRC20Details() {
            HRC20Details({ address: this.address, a: this.conAddress }).then(res => {
                console.log('hrc20详情', res)
                this.tokenInfo = res
            }).catch(err => {
                console.log(err)
            })
        },
        getContractTX() {
            contractTX({ address: this.address, page: this.txCurrentPage }).then(res => {
                console.log(res)
                if (res.data.length !== 0) {
                    this.dataList = res.data
                    this.tokenTableLoadStatus = 'finished'
                } else {
                    this.tokenTableLoadStatus = 'empty'
                }
                // this.totalTrade = this.$t('moduleTitle.totalTrade', { count: numberFormat(res.total) })
                this.totalTrade = res.total
                this.totalPage = res.totalPage
            });
            console.log('dataList', this.dataList);
        },
        toTXFirstPage(selectedPageSize) {
            console.log('第一页')
            this.txPageSize = selectedPageSize
            this.txCurrentPage = 1
            this.txListDatas = []
            this.getContractTX()
        },
        toTXPrePage(selectedPageSize) {
            if (this.txCurrentPage === 1) {
                return
            }
            this.txPageSize = selectedPageSize
            this.txCurrentPage = this.txCurrentPage - 1
            this.txListDatas = []
            this.getContractTX()
        },
        toTXNextPage(selectedPageSize) {
            this.txPageSize = selectedPageSize
            this.txCurrentPage = this.txCurrentPage + 1
            this.txListDatas = []
            this.getContractTX()
        },
        toTXLastPage(selectedPageSize) {
            console.log(this.txCurrentPage, this.totalPage)
            if (this.rankCurrentPage >= this.totalPage) {
                return
            }
            this.txPageSize = selectedPageSize
            this.txCurrentPage = this.totalPage
            this.txListDatas = []
            this.getContractTX()
        },
        toTradeTargetPage(selectedPageSize, targetPage) {
            console.log(targetPage)
            if (targetPage <= 0) {
                return
            }
            this.txPageSize = selectedPageSize
            this.txCurrentPage = targetPage
            this.txListDatas = []
            this.getContractTX()
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
                this.getContractTX()
            });
        }
    }
}
</script>