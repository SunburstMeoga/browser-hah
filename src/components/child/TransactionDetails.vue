<template>
    <div class="text-sm pt-2 px-4 text-lightitemtitle dark:text-btndisable">

        <div class="flex justify-start items-center mb-2">
            <div class="font-bold pr-4 ">{{ $t('tradeDetails.height') }}:</div>
            <div
                class="cursor-pointer text-clickable transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:scale-110">
                {{ transactionInfo.height }}</div>
        </div>
        <div class="flex justify-start items-center mb-2">
            <div class="font-bold pr-4 ">{{ $t('Tx.block') }}:</div>
            <div
                class="cursor-pointer text-clickable transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:scale-110">
                {{ addressFilter($store.state.txInfo.block_hash) || '0x00000000' }}</div>
            <div class="cursor-pointer icon iconfont icon-copy text-clickable pl-2"
                @click="copyContent($store.state.txInfo.block_hash)" />
        </div>
        <div class="flex justify-start items-center mb-2">
            <div class="font-bold pr-4">{{ $t('tradeDetails.hash') }}:</div>
            <div class="text-lighttable dark:text-white200">{{ addressFilter(transactionInfo.txid) }}</div>
            <div class="cursor-pointer icon iconfont icon-copy text-clickable pl-2"
                @click="copyContent(transactionInfo.txid)" />
        </div>
        <div class="flex justify-start items-center mb-2">
            <div class="font-bold pr-4 ">{{ $t('Tx.to') }}:</div>
            <div
                class="cursor-pointer text-clickable transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:scale-110">
                {{ addressFilter(transactionInfo.to) }}</div>
            <div class="cursor-pointer icon iconfont icon-copy text-clickable pl-2"
                @click="copyContent(transactionInfo.to)" />

        </div>

        <div class="flex justify-start items-center mb-2">
            <div class="font-bold pr-4 ">{{ $t('Tx.from') }}:</div>
            <div
                class="cursor-pointer text-clickable transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:scale-110">
                {{ addressFilter(transactionInfo.from) }} </div>
            <div class="cursor-pointer icon iconfont icon-copy text-clickable pl-2"
                @click="copyContent(transactionInfo.from)" />

        </div>

        <div class="flex justify-start items-center mb-2">
            <div class="font-bold pr-4 ">{{ $t('Tx.txAmount') }}:</div>
            <div class="text-lighttable dark:text-white200">{{ transactionInfo.amount }} HAH</div>
        </div>

        <div class="flex justify-start items-center mb-2">
            <div class="font-bold pr-4 ">{{ $t('logs.internalTransfers') }}:</div>
            <div class="text-lighttable dark:text-white200">{{ $store.state.txInfo.transTotal || 0 }} </div>
        </div>

        <div class="flex justify-start items-center mb-2">
            <div class="font-bold pr-4 ">{{ $t('Tx.txFee') }}:</div>
            <div class="text-lighttable dark:text-white200">{{ $store.state.txInfo.fee }} HAH</div>
        </div>

        <div class="flex justify-start items-center mb-2">
            <div class="font-bold pr-4 ">Nonce:</div>
            <div class="text-sm text-lighttable dark:text-white200">{{ transactionInfo.nonce }} </div>
        </div>
        <div class="flex justify-start items-center mb-2">
            <div class="font-bold pr-4 ">{{ $t('tradeDetails.GASLimit') }}:</div>
            <div class="text-sm text-lighttable dark:text-white200">{{ transactionInfo.gaslimit }} </div>
        </div>
        <div class="flex justify-start items-center mb-2">
            <div class="font-bold pr-4 ">{{ $t('tradeDetails.tradeType') }}:</div>
            <div class="bg-lightborder text-sm dark:text-white300 dark:bg-border100 py-2 px-4 rounded-lg">{{ tradeType }}
            </div>
        </div>

        <div class="flex justify-start items-center mb-2">
            <div class="font-bold pr-4">{{ $t('tradeDetails.GASPrice') }}:</div>
            <div class="text-lighttable dark:text-white200">{{ transactionInfo.gasprice }}</div>
        </div>
        <div class="flex justify-start items-center mb-2">
            <div class="font-bold pr-4">{{ $t('Block.time') }}:</div>
            <div class="text-lighttable dark:text-white200">{{ timeFormat(transactionInfo.transtime) }}</div>
        </div>
        <div class="flex justify-start items-center mb-2">
            <div class="font-bold pr-4">{{ $t('logs.executionStatus') }}:</div>
            <div class="bg-lightborder text-sm dark:bg-border100 py-2 px-4 rounded-lg"
                :class="transactionInfo.status === '0x01' ? 'text-green-300' : 'text-red-600'">
                {{ transactionInfo.status === '0x01' ? $t('status.success') : $t('status.fail') }}
            </div>
        </div>
    </div>
</template>

<script>
import { addressFilter, amountFormat, timeFormat } from '@/utils/format'

export default {
    props: {
        transactionInfo: {
            type: Object,
            default: () => { }
        }
    },
    computed: {
        tradeType() {
            switch (this.transactionInfo.type) {
                case 'eth-create-contract': return this.$t('tradeDetails.contractCreate')
                case 'eth-message-call': return this.$t('tradeDetails.contractInvoke')
                case 'genesis': return this.$t('tradeDetails.genesis')
                case 'stake': return this.$t('tradeDetails.stake')
                case 'token': return this.$t('tradeDetails.token')
                case 'vote-reward': return this.$t('tradeDetails.voteReward')
                case 'work': return this.$t('tradeDetails.work')
            }
        }
    },
    methods: {
        addressFilter, amountFormat, timeFormat,
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
    }
}
</script>

<style></style>