<template>
    <div class="w-full pb-4 bg-lightsecond dark:bg-black300">
        <div>
            <div class="w-11/12 mr-auto ml-auto py-5 mb-4 sm:w-9/12 border-b border-ligthborder dark:border-border100">
                <second-title :title="$t('Tx.txInfo')" />
            </div>
        </div>

        <div class="mb-4">
            <div
                class="w-11/12 sm:w-9/12 mr-auto ml-auto rounded-lg shadow-lg border bg-white border-ligthborder dark:bg-black200 dark:border-border100 dark:shadow">
                <h-loading :loadStatus="tranInfoLoadStatus" />

                <div v-if="tranInfoLoadStatus === 'finished'">
                    <transaction-details :transactionInfo="transactionInfo"></transaction-details>
                </div>
            </div>
        </div>

        <div class="mb-4" v-if="dataDetails.length !== 0">

            <div
                class="w-11/12 sm:w-9/12 mr-auto ml-auto rounded-lg shadow-lg border bg-white border-ligthborder dark:bg-black200 dark:border-border100 dark:shadow">
                <div class="px-4 pt-4">
                    <second-title title="内部转账" />
                </div>
                <div class="pt-2 px-4">
                    <div v-for="(item, index) in dataDetails" :key="index"
                        class="text-sm font-bold py-2 border-b border-ligthborder  text-lightitemtitle dark:text-btndisable dark:border-border100">
                        <div class="">{{ $t('Tx.from') }}:
                            <span
                                class="font-normal pl-2 text-clickable transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:scale-110">
                                {{
                                    addressFormat(item.from)
                                }}</span>
                        </div>
                        <div class="">{{ $t('Tx.to') }}: <span
                                class="font-normal pl-2 text-clickable transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:scale-110">
                                {{
                                    addressFormat(item.to) }}</span>
                        </div>
                        <div class="">For: {{ item.amount }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HLoading from "@/components/public/HLoading"

import HPagination from '@/components/public/HPagination'
import ModuleTitle from '@/components/public/ModuleTitle'
import SecondTitle from '@/components/public/SecondTitle'
import TransactionDetails from '@/components/child/TransactionDetails'
import { txDetails, txInfo } from '@/request/home'
import { timeFormat, addressFormat, amountFormat } from '@/utils/format'

export default {
    components: { SecondTitle, HPagination, ModuleTitle, TransactionDetails, HLoading },
    name: "Tx",
    data() {
        return {
            txid: '',
            block_hash: '',
            from: '',
            to: '',
            amount: '',
            free: '',
            transtime: '',
            nonce: '',
            dpos_in: '',
            dpos_out: '',
            client_in: '',
            client_out: '',
            dataDetails: [],
            transactionInfo: {},
            tranInfoLoadStatus: 'loading'
        }
    },
    created() {
        this.txid = this.$route.params.txid
        this.getTxinfo()
        this.getTXDetails()
    },
    methods: {
        timeFormat, addressFormat, amountFormat,
        getTXDetails() {
            let params = {
                txid: this.txid
            };
            txDetails(params).then(res => {
                console.log(res)
                this.dataDetails = res
                this.transactionInfo.transTotal = res.length
            });
        },
        getTxinfo() {
            let params = {
                txid: this.txid,
            };
            txInfo(params).then(res => {
                console.log('tx', res)
                this.transactionInfo.block_hash = res.block_hash
                this.transactionInfo.from = res.from
                this.transactionInfo.to = res.to
                this.transactionInfo.amount = res.amount
                this.transactionInfo.fee = res.fee
                this.transactionInfo.nonce = res.nonce
                this.dpos_in = res.dpos_in
                this.dpos_out = res.dpos_out
                this.client_in = res.client_in
                this.client_out = res.client_out
                this.transactionInfo.transtime = res.transtime
                this.tranInfoLoadStatus = 'finished'
                this.$store.commit('getTXInfo', this.transactionInfo)
            });
        }
    },
}
</script>

<style>
.word {
    color: #612591;

}
</style>