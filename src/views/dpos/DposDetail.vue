<template>
    <div>
        <div>
            <div class="mb-2 w-11/12 mr-auto ml-auto sm:mb-4 sm:w-9/12 ">
                <module-title title="DPOS Details"></module-title>
            </div>
        </div>
        <div class="text-sm w-11/12 mr-auto ml-auto sm:mb-8 sm:w-9/12 text-lightitemtitle dark:text-btndisable mb-4">
            <div
                class="mb-4 rounded-lg px-3 py-2 shadow-lg border bg-white border-ligthborder dark:bg-black200 dark:border-border100 dark:shadow">
                <div class="font-black text-base pb-2 mb-2 border-b border-ligthborder dark:border-border100">概述</div>
                <div class="flex justify-start items-center mb-2">
                    <div class="font-bold pr-4 sm:w-1/4 ">{{ $t('common.address') }}</div>
                    <div class="text-sm text-clickable">{{ addressFilter(DPOSInfo.address) }}</div>
                </div>
                <div class="flex justify-start items-center mb-2">
                    <div class="font-bold pr-4 sm:w-1/4 ">{{ $t('Tx.nodeName') }}</div>
                    <div class="text-sm">{{ DPOSInfo.name }}</div>
                </div>
                <div class="flex justify-start items-center">
                    <div class="font-bold pr-4 sm:w-1/4 ">{{ $t('Tx.voteAmount') }}</div>
                    <div class="text-sm">{{ DPOSInfo.votes }}</div>
                </div>

            </div>

        </div>
        <div class="mb-2 sm:mb-4 w-11/12 sm:w-9/12 mr-auto ml-auto">
            <module-title title="Transfers"></module-title>
        </div>
        <div class="mb-4 sm:mb-6 w-11/12 mr-auto ml-auto rounded-lg shadow-lg border sm:w-9/12 bg-white border-ligthborder dark:bg-black200 dark:border-border100 dark:shadow"
            style="box-shadow:0 0.5rem 1.2rem rgba(82, 85, 92, .15);">
            <dpos-vote-table :dataList="dposlistDetailDatas" :loadStatus="dposTableLoadStatus" />
            <div>
                <h-pagination></h-pagination>
            </div>
        </div>
    </div>
</template>

<script>

import ModuleTitle from '@/components/public/ModuleTitle'
import DposVoteTable from '@/components/child/DPOSVoteTable'
import HPagination from '@/components/public/HPagination'
import { listDelegateDetails, DPOSInfo } from '@/request/dpos'
import { timeFormat, addressFormat, amountFormat, addressFilter } from '@/utils/format'
export default {
    components: { ModuleTitle, DposVoteTable, HPagination },

    data() {
        return {
            dposlistDetailDatas: [],
            dposAddress: '',
            dposTableLoadStatus: 'loading',
            DPOSInfo: {}
        }
    },
    created() {
        this.dposAddress = this.$route.params.dposAddress
        this.getDPOSInfo()
        this.getDelegateDetails()
    },
    methods: {
        timeFormat, addressFormat, amountFormat, addressFilter,
        getVoteType(value) {
            return value === 1 ? this.$t('dposDetail.ordinary') : this.$t('dposDetail.recasting')
        },
        getTranType(type) {
            return type === 'in' ? this.$t('dposDetail.datavote') : this.$t('dposDetail.datawithdrawal')
        },
        getDPOSInfo() {
            DPOSInfo({ address: this.dposAddress }).then(res => {
                console.log('dpos详情', res)
                this.DPOSInfo = res
            }).catch(err => {
                console.log(err)
            })
        },
        getDelegateDetails() {
            listDelegateDetails({ dposAddress: this.dposAddress, }).then(res => {
                this.dposlistDetailDatas = res.data
                if (res.data.length !== 0) {
                    this.dposlistDetailDatas = res.data
                    this.dposlistDetailDatas.map(item => {
                        item.voteType = this.getVoteType(item.vote_type)
                        item.tranType = this.getTranType(item.type)
                    })
                    this.dposTableLoadStatus = 'finished'
                } else {
                    this.dposTableLoadStatus = 'empty'
                }
                console.log('res', res);
            });
        },
    },
}
</script>