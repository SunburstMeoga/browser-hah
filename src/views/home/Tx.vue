<template>
    <div class="w-full pb-4 bg-lightsecond dark:bg-black300">
        <div>
            <div class="w-11/12 mr-auto ml-auto py-5 mb-4 sm:w-9/12 border-b border-ligthborder dark:border-border100">
                <second-title :title="$t('Tx.txInfo')" />
            </div>
        </div>

        <div class="mb-4 sm:mb-10">
            <div
                class="w-11/12 sm:w-9/12 mr-auto ml-auto rounded-lg shadow-lg border bg-white border-ligthborder dark:bg-black200 dark:border-border100 dark:shadow">
                <h-loading :loadStatus="tranInfoLoadStatus" />

                <div v-if="tranInfoLoadStatus === 'finished'">
                    <transaction-details :transactionInfo="transactionInfo"></transaction-details>
                </div>
            </div>
        </div>

        <div class="mb-4 sm:mb-10" v-if="dataDetails.length !== 0">
            <div
                class="w-11/12 sm:w-9/12 mr-auto ml-auto rounded-lg shadow-lg border bg-white border-ligthborder dark:bg-black200 dark:border-border100 dark:shadow">
                <div class="px-4 pt-4">
                    <second-title :title="$t('logs.internalTransfers')" />
                </div>
                <div class="pt-2 px-4">
                    <div v-for="(item, index) in dataDetails" :key="index"
                        class="text-sm font-bold py-2 border-b border-ligthborder  text-lightitemtitle dark:text-btndisable dark:border-border100">
                        <div class="hidden sm:flex justify-start items-center">{{ $t('Tx.from') }}:
                            <span @click="toAddress(item.from)"
                                class="font-normal curpor-pointer pl-2 text-clickable transition duration-300 ease-in-out transform hover:-translate-y-0.5 ">
                                {{
                                    item.from
                                }}</span>
                            <span class="cursor-pointer icon iconfont icon-copy text-clickable pl-2"
                                @click="copyContent(item.from)" />
                        </div>
                        <div class="hidden sm:flex justify-start items-center">{{ $t('Tx.to') }}: <span
                                @click="toAddress(item.to)"
                                class="font-normal curpor-pointer pl-2 text-clickable transition duration-300 ease-in-out transform hover:-translate-y-0.5 ">
                                {{
                                    item.to }}</span>
                            <span class="cursor-pointer icon iconfont icon-copy text-clickable pl-2"
                                @click="copyContent(item.to)" />
                        </div>
                        <div class="sm:hidden">{{ $t('Tx.from') }}:
                            <span @click="toAddress(item.from)"
                                class="font-normal pl-2 text-clickable transition duration-300 ease-in-out transform hover:-translate-y-0.5 ">
                                {{ addressFilter(item.from) }}
                            </span>
                            <span class="cursor-pointer icon iconfont icon-copy text-clickable pl-2"
                                @click="copyContent(item.from)" />
                        </div>
                        <div class="sm:hidden">{{ $t('Tx.to') }}: <span @click="toAddress(item.to)"
                                class="font-normal pl-2 text-clickable transition duration-300 ease-in-out transform hover:-translate-y-0.5 ">
                                {{ addressFilter(item.to) }}</span>
                            <span class="cursor-pointer icon iconfont icon-copy text-clickable pl-2"
                                @click="copyContent(item.to)" />
                        </div>
                        <div class="">For: {{ item.amount }}</div>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="transactionInfo.vote"
            class="w-11/12 sm:w-9/12 mb-4 sm:mb-10 mr-auto ml-auto rounded-lg shadow-lg border bg-white border-ligthborder dark:bg-black200 dark:border-border100 dark:shadow">
            <div class="px-4 py-4 border-b border-ligthborder dark:border-border100">
                <second-title :title="$t('dpos.vote')" />
            </div>
            <div>
                <div
                    class="py-2 px-4 text-sm text-lightitemtitle dark:text-btndisable border-b border-ligthborder dark:border-border100">
                    <div class="flex justify-start items-center mb-2">
                        <div class="font-bold pr-4 ">{{ $t('Tx.nodeAddress') }}:</div>
                        <div class="text-clickable sm:hidden">
                            {{ addressFilter(transactionInfo.vote.dpos_addr) }} </div>
                        <div
                            class="hidden sm:block cursor-pointer text-clickable transition duration-300 ease-in-out transform hover:-translate-y-0.5 ">
                            {{ transactionInfo.vote.dpos_addr }} </div>
                        <div class="cursor-pointer icon iconfont icon-copy text-clickable pl-2"
                            @click="copyContent(transactionInfo.vote.dpos_addr)" />
                    </div>
                    <div class="flex justify-start items-center mb-2">
                        <div class="font-bold pr-4 ">{{ $t('Pending.amount') }}:</div>
                        <div class="text-lighttable dark:text-white200">{{ transactionInfo.vote.amount }} </div>
                    </div>
                    <div class="flex justify-start items-center mb-2">
                        <div class="font-bold pr-4 ">{{ $t('dposDetail.tranType') }}:</div>
                        <div class="text-lighttable dark:text-white200">{{ getTranType(transactionInfo.vote.type) }} </div>
                    </div>
                    <div class="flex justify-start items-center mb-2">
                        <div class="font-bold pr-4 ">{{ $t('dposDetail.voteType') }}:</div>
                        <div class="text-lighttable dark:text-white200">{{ getVoteType(transactionInfo.vote.vote_type) }}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="logsList.length !== 0"
            class="w-11/12 sm:w-9/12 mr-auto ml-auto rounded-lg shadow-lg border bg-white border-ligthborder dark:bg-black200 dark:border-border100 dark:shadow">
            <div class="px-4 py-4 border-b border-ligthborder dark:border-border100">
                <second-title :title="$t('logs.title')" :details="countLogs" />
            </div>
            <div>
                <div class="py-2 border-b border-ligthborder dark:border-border100" v-for="(item, index) in logsList"
                    :key="index">
                    <trade-log-card :logInfo="item" />
                </div>
                <!-- <div class="py-2 border-b border-ligthborder dark:border-border100" v-for="(item, index) in logsList"
                    :key="index">
                    <trade-log-card :logInfo="item" />
                </div>
                <div class="py-2 border-b border-ligthborder dark:border-border100" v-for="(item, index) in logsList"
                    :key="index">
                    <trade-log-card :logInfo="item" />
                </div> -->
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
import TradeLogCard from '@/components/child/TradeLogCard'
import { txDetails, txInfo } from '@/request/home'
import { timeFormat, addressFormat, amountFormat, addressFilter } from '@/utils/format'

export default {
    components: { SecondTitle, HPagination, ModuleTitle, TransactionDetails, HLoading, TradeLogCard },
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
            tranInfoLoadStatus: 'loading',
            logsList: []
        }
    },
    created() {
        this.txid = this.$route.params.txid
        this.getTxinfo()
        // this.getTXDetails()
    },
    watch: {
        $route(to, from) {
            this.txid = this.$route.params.txid
            this.getTxinfo()
        }
    },
    computed: {
        countLogs() {
            return this.$t('logs.count', { count: this.logsList.length })
        }
    },
    methods: {
        timeFormat, addressFormat, amountFormat, addressFilter,
        toAddress(address) {
            this.$router.push({
                path: '/address/' + address
            })
        },
        getVoteType(value) {
            return value === '1' ? this.$t('dposDetail.ordinary') : this.$t('dposDetail.recasting')
        },
        getTranType(type) {
            return type === 'in' ? this.$t('dposDetail.datavote') : this.$t('dposDetail.datawithdrawal')
        },
        copyContent(content) {
            navigator.clipboard.writeText(content).then(() => {
                this.$message({
                    message: this.$t('messageTips.copySuccess'),
                    type: 'success'
                });
            }, () => {
                this.$message.error(this.$t('message.fail'));

            });
        },
        getTXDetails() {
            txDetails({ txid: this.txid, chainid: parseInt(localStorage.getItem('chainID')) }).then(res => {
                this.dataDetails = res
                this.transactionInfo.transTotal = res.length
            });
        },
        getTxinfo() {
            this.tranInfoLoadStatus = 'loading'
            txInfo({ txid: this.txid, chainid: parseInt(localStorage.getItem('chainID')) }).then(res => {
                console.log('tx', res)
                // this.transactionInfo.block_hash = res.block_hash
                // this.transactionInfo.from = res.from
                // this.transactionInfo.to = res.to
                // this.transactionInfo.amount = res.amount
                // this.transactionInfo.fee = res.fee
                // this.transactionInfo.nonce = res.nonce
                // this.dpos_in = res.dpos_in
                // this.dpos_out = res.dpos_out
                // this.client_in = res.client_in
                // this.client_out = res.client_out
                // this.transactionInfo.transtime = res.transtime
                this.transactionInfo = res
                this.getTXDetails()
                this.logsList = res.logs
                // this.logsList.status = res.status
                console.log('logsList', this.logsList)
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