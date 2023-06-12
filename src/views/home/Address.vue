<template>
    <div class="w-full pb-4 bg-lightsecond dark:bg-black300">
        <div>
            <div class="w-11/12 mr-auto ml-auto py-5 mb-4 sm:w-9/12 border-b border-ligthborder dark:border-border100">
                <second-title :title="$t('Address.addressInfo')" />
            </div>
        </div>

        <div class="mb-4">
            <div
                class="w-11/12 sm:w-9/12 mr-auto ml-auto rounded-lg  shadow-lg border bg-white border-ligthborder dark:bg-black200 dark:border-border100 dark:shadow">
                <h-loading :loadStatus="addressInfoLoadStatus" />
                <div v-if="addressInfoLoadStatus === 'finished'">
                    <address-details-card :addressInfo="addressInfo"></address-details-card>
                </div>
            </div>
        </div>

        <div>
            <div
                class="w-11/12 sm:w-9/12 mr-auto ml-auto rounded-lg pt-2 shadow-lg border bg-white border-ligthborder dark:bg-black200 dark:border-border100 dark:shadow">
                <div class="border-b border-ligthborder dark:border-border100">
                    <!-- <div class="pl-2">
                        <module-title :title="$t('common.address') + $t('Block.tx')" :total="totalTrade" />
                    </div> -->
                    <div class="flex justify-start items-center">
                        <div class="cursor-pointer border-clickable py-2 px-2 mr-2 text-black dark:text-white300 transition duration-300 ease-in-out transform hover:text-clickable font-bold sm:text-xl"
                            :class="currentData === index ? 'border-b-4 text-clickable' : ''"
                            @click="handleTab(item, index)" v-for="(item, index) in 2" :key="index">{{ index === 0 ?
                                $t('Address.transactions') :
                                'HRC20-Token' + $t('Block.tx') }}</div>
                    </div>
                    <div class="pl-2 py-1 text-sm text-lightmoreword dark:text-black100">
                        {{ $t('moduleTitle.totalData', { count: totalTrade }) }}
                    </div>
                </div>
                <div v-show="currentData === 0">
                    <h-loading :loadStatus="addressTranListLoadStatus" />
                    <div v-if="addressTranListLoadStatus === 'finished'">
                        <div v-for="(item, index) in txListDatas" :key="index"
                            class="w-11/12 mr-auto ml-auto py-2 sm:w-full sm:px-3  border-b border-ligthborder dark:border-border100">
                            <address-transaction-card :transactionInfo="item" />
                        </div>
                    </div>
                </div>
                <div v-show="currentData === 1">
                    <h-loading :loadStatus="addressTranListLoadStatus" />
                    <div v-if="addressTranListLoadStatus === 'finished'">
                        <div v-for="(item, index) in txListDatas" :key="index"
                            class="w-11/12 mr-auto ml-auto py-2 sm:w-full sm:px-3  border-b border-ligthborder dark:border-border100">
                            <HRC-transaction-card :transactionInfo="item" />
                        </div>
                    </div>
                </div>
                <div>
                    <h-pagination @changePageSize="toTXFirstPage" @toFirstPage="toTXFirstPage" @toPrePage="toTXPrePage"
                        @toNextPage="toTXNextPage" @toLastPage="toTXLastPage" :currentPage="txCurrentPage"
                        :totalPage="totalPage" @toTargetPage="toTradeTargetPage"></h-pagination>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HLoading from "@/components/public/HLoading"

import HPagination from '@/components/public/HPagination'
import AddressDetailsCard from '@/components/child/AddressDetailsCard'
import AddressTransactionCard from '@/components/child/AddressTransactionCard'
import HRCTransactionCard from "@/components/child/HRCTransactionCard"

import ModuleTitle from '@/components/public/ModuleTitle'
import SecondTitle from '@/components/public/SecondTitle'
import { TXList, balanceInfo, hrc20txns } from '@/request/home'
import { numberFormat } from '@/utils/format'

export default {
    components: { SecondTitle, HPagination, AddressDetailsCard, ModuleTitle, AddressTransactionCard, HLoading, HRCTransactionCard },
    name: "Address",
    data() {
        return {
            address: '',
            txListDatas: [],
            addressInfo: {},
            rank: '',
            addressInfoLoadStatus: 'loading',
            addressTranListLoadStatus: 'loading',
            txPageSize: 10,
            txCurrentPage: 1,
            totalTrade: 0,
            totalPage: 0,
            currentData: 0
        }

    },

    created() {
        this.address = this.$route.params.address
        this.addressInfo.address = this.address
        this.getBalanceInfo()
        this.getAddressTxList()
        // this.getHRC20Txns()
    },

    watch: {
        $route(to, from) {
            this.address = this.$route.params.address
            this.addressInfo.address = this.address
            this.currentData = 0
            this.getBalanceInfo()
            this.getAddressTxList()
            // this.getHRC20Txns()
        }
    },
    methods: {
        numberFormat,
        toTX(txid) {
            this.$router.push({
                path: '/tx/' + txid
            })
        },
        handleTab(item, index) {
            // if (this.addressInfoLoadStatus === 'loading') return
            this.currentData = index
            this.txCurrentPage = 1
            this.totalTrade = 0
            this.totalPage = 0
            if (index === 0) {
                this.getAddressTxList()
            } else {
                this.getHRC20Txns()
            }
            console.log('currentData', this.currentData)
        },
        getBalanceInfo() {
            this.addressInfoLoadStatus = 'loading'
            balanceInfo({
                address: this.address,
                symbol: 'HAH',
                chainid: parseInt(localStorage.getItem('chainID'))
            }).then(res => {
                this.addressInfo.balance = res.balance
                this.addressInfo.locked = res.locked
                this.addressInfo.nonce = res.nonce
                this.addressInfo.rank = res.rank
                this.addressInfo.token = res.token
                this.addressInfo.tv = res.tv
                this.$store.commit('getAddressInfo', this.addressInfo)
                this.addressInfoLoadStatus = 'finished'
                console.log('this.addressInfo', res);
            });

        },
        getHRC20Txns() {
            this.addressTranListLoadStatus = 'loading'
            hrc20txns({
                address: this.address,
                page: this.txCurrentPage,
                pageSize: this.txPageSize,
                chainid: parseInt(localStorage.getItem('chainID'))
            }).then(res => {
                console.log('hrc20交易', res)
                if (res.data.length !== 0) {
                    this.txListDatas = res.data
                    this.addressTranListLoadStatus = 'finished'
                } else {
                    this.addressTranListLoadStatus = 'empty'
                }
                this.totalTrade = res.total
                this.totalPage = res.totalPage
            }).catch(err => {
                console.log('err', err)
                // this.addressTranListLoadStatus = 'error'
            })
        },
        getAddressTxList() {
            this.addressTranListLoadStatus = 'loading'
            TXList({
                address: this.address,
                page: this.txCurrentPage,
                pageSize: this.txPageSize,
                chainid: parseInt(localStorage.getItem('chainID'))
            }).then(res => {
                console.log('res', res)
                if (res.data.length !== 0) {
                    this.txListDatas = res.data
                    this.addressTranListLoadStatus = 'finished'
                } else {
                    this.addressTranListLoadStatus = 'empty'
                }
                // this.totalTrade = this.$t('moduleTitle.totalTrade', { count: numberFormat(res.total) })
                this.totalTrade = res.total
                this.totalPage = res.totalPage
                console.log(this.txListDatas)
                // this.addressTranListLoadStatus = 'error'
            })
        },
        toTXFirstPage(selectedPageSize) {
            console.log('第一页')
            this.txPageSize = selectedPageSize
            this.txCurrentPage = 1
            this.txListDatas = []
            if (this.currentData === 0) {
                this.getAddressTxList()
            } else {
                this.getHRC20Txns()
            }
        },
        toTXPrePage(selectedPageSize) {
            if (this.txCurrentPage === 1) {
                return
            }
            this.txPageSize = selectedPageSize
            this.txCurrentPage = this.txCurrentPage - 1
            this.txListDatas = []
            if (this.currentData === 0) {
                this.getAddressTxList()
            } else {
                this.getHRC20Txns()
            }
        },
        toTXNextPage(selectedPageSize) {
            this.txPageSize = selectedPageSize
            this.txCurrentPage = this.txCurrentPage + 1
            this.txListDatas = []
            if (this.currentData === 0) {
                this.getAddressTxList()
            } else {
                this.getHRC20Txns()
            }
        },
        toTXLastPage(selectedPageSize) {
            console.log(this.txCurrentPage, this.totalPage)
            if (this.rankCurrentPage >= this.totalPage) {
                return
            }
            this.txPageSize = selectedPageSize
            this.txCurrentPage = this.totalPage
            this.txListDatas = []
            if (this.currentData === 0) {
                this.getAddressTxList()
            } else {
                this.getHRC20Txns()
            }
        },
        toTradeTargetPage(selectedPageSize, targetPage) {
            console.log(targetPage)
            if (targetPage <= 0) {
                return
            }
            this.txPageSize = selectedPageSize
            this.txCurrentPage = targetPage
            this.txListDatas = []
            if (this.currentData === 0) {
                this.getAddressTxList()
            } else {
                this.getHRC20Txns()
            }
        }
    },
}


</script>

<style></style>
