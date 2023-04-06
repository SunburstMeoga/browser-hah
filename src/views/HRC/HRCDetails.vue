<template>
    <div>
        <div>
            <div class="mb-2 w-11/12 mr-auto ml-auto sm:mb-4 sm:w-9/12 ">
                <module-title :title="tokenInfo?.name"></module-title>
            </div>
        </div>
        <div
            class="text-sm w-11/12 mr-auto ml-auto sm:mb-8 sm:w-9/12 sm:flex justify-between items-center text-lightitemtitle dark:text-btndisable mb-4">
            <div
                class="mb-4 rounded-lg px-3 py-2 sm:w-0.48 sm:mb-0  shadow-lg border bg-white border-ligthborder dark:bg-black200 dark:border-border100 dark:shadow">
                <div class="font-black text-base pb-2 mb-2 border-b border-ligthborder dark:border-border100">概述</div>
                <div class="flex justify-start items-center mb-2">
                    <div class="font-bold pr-4 sm:w-1/4 ">{{ $t('common.address') }}</div>
                    <div class="text-sm text-clickable">{{ addressFilter(tokenInfo.addr) }}</div>
                </div>
                <div class="flex justify-start items-center mb-2">
                    <div class="font-bold pr-4 sm:w-1/4 ">{{ $t('hrc20.name') }}</div>
                    <div class="text-sm">{{ tokenInfo.name }}</div>
                </div>
                <div class="flex justify-start items-center">
                    <div class="font-bold pr-4 sm:w-1/4 ">{{ $t('hrc20.decimals') }}</div>
                    <div class="text-sm">{{ tokenInfo.decimals }}</div>
                </div>

            </div>
            <div
                class="rounded-lg  px-3 py-2 sm:w-0.48 shadow-lg border bg-white border-ligthborder dark:bg-black200 dark:border-border100 dark:shadow">
                <div class="font-black text-base pb-2 mb-2 border-b border-ligthborder dark:border-border100">个人资料摘要</div>

                <div class=" flex justify-start items-center mb-2">
                    <div class="font-bold pr-4 sm:w-1/4 ">{{ $t('hrc20.owner') }}</div>
                    <div class="text-sm text-clickable">{{ addressFilter(tokenInfo.owner) }}</div>
                </div>
                <div class="flex justify-start items-center mb-2">
                    <div class="font-bold pr-4 sm:w-1/4 ">{{ $t('hrc20.symbol') }}</div>
                    <div class="text-sm">{{ tokenInfo.symbol }}</div>
                </div>
                <div class="flex justify-start items-center">
                    <div class=" font-bold pr-4 sm:w-1/4 ">{{ $t('hrc20.totalSupply') }}</div>
                    <div class="text-sm">{{ tokenInfo.totalSupply }}</div>
                </div>
            </div>
        </div>
        <div class="mb-2 sm:mb-4 w-11/12 sm:w-9/12 mr-auto ml-auto">
            <module-title title="Transfers"></module-title>
        </div>
        <div class="mb-4 sm:mb-6 w-11/12 mr-auto ml-auto rounded-lg shadow-lg border sm:w-9/12 bg-white border-ligthborder dark:bg-black200 dark:border-border100 dark:shadow"
            style="box-shadow:0 0.5rem 1.2rem rgba(82, 85, 92, .15);">
            <token-trans-table :dataList="dataList" :loadStatus="tokenTableLoadStatus" />
            <div>
                <h-pagination></h-pagination>
            </div>
        </div>
    </div>
</template>

<script>
import ModuleTitle from '@/components/public/ModuleTitle'
import TokenTransTable from '@/components/child/TokenTransTable'
import HPagination from '@/components/public/HPagination'

import { contractTX, HRC20Details } from '@/request/hrc'
import { amountFormat, timeFormat, addressFilter } from '@/utils/format'
export default {
    components: { ModuleTitle, TokenTransTable, HPagination },
    data() {
        return {
            dataList: [],
            address: '',
            tokenInfo: {},
            tokenTableLoadStatus: 'loading'
        }
    },
    created() {
        this.address = this.$route.params.address
    },
    mounted() {
        this.getContractTX()
        this.getHRC20Details()
    },
    methods: {
        amountFormat, timeFormat, addressFilter,
        toDetails(item) {
            this.$router.push({
                path: '/tx',
                query: {
                    txid: item.txid
                }
            })
        },
        getHRC20Details() {
            HRC20Details({ address: this.address }).then(res => {
                console.log('hrc20详情', res)
                this.tokenInfo = res
            }).catch(err => {
                console.log(err)
            })
        },
        getContractTX() {
            contractTX({ address: this.address, }).then(res => {
                console.log(res)
                if (res.data.length !== 0) {
                    this.dataList = res.data
                    this.tokenTableLoadStatus = 'finished'
                } else {
                    this.tokenTableLoadStatus = 'empty'
                }
            });
            console.log('dataList', this.dataList);
        },
    }
}
</script>