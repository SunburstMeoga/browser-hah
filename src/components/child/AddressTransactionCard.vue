<template>
    <div class="text-sm text-lightitemtitle dark:text-btndisable">
        <div class="flex justify-start items-center sm:mb-2">
            <div class="item-title sm:w-1/4">{{ $t('Block.block') }}:</div>

            <div class="flex justify-start items-center">
                <div @click="toBlock(transactionInfo.block_hash)"
                    class="hidden sm:block text-sm cursor-pointer text-clickable transition duration-300 ease-in-out transform hover:-translate-y-0.5 ">
                    {{ transactionInfo.block_hash }}</div>
                <div class="sm:hidden text-clickable" @click="toBlock(transactionInfo.height,transactionInfo.block_hash)">{{
                    addressFilter(transactionInfo.block_hash)
                }} </div>
                <div class="cursor-pointer icon iconfont icon-copy text-clickable pl-2"
                    @click="copyContent(transactionInfo.block_hash)" />
            </div>
        </div>
        <div class="flex justify-start items-center sm:mb-2">
            <div class="item-title sm:w-1/4">{{ $t('tradeDetails.hash') }}:</div>
            <div @click="toTX(transactionInfo.txid)"
                class="hidden sm:block cursor-pointer text-clickable transition duration-300 ease-in-out transform hover:-translate-y-0.5 ">
                {{ transactionInfo.txid }} </div>
            <div class="sm:hidden text-clickable" @click="toTX(transactionInfo.txid)">{{ addressFilter(transactionInfo.txid)
            }} </div>
            <div class="icon iconfont icon-copy text-clickable pl-2" @click="copyContent(transactionInfo.txid)"></div>
        </div>
        <div class="flex justify-start items-center sm:mb-2">
            <div class="item-title sm:w-1/4 ">{{ $t('Pending.from') }}:</div>
            <div class="flex justify-start items-center">
                <div @click="toAddress(transactionInfo.from)"
                    class="hidden sm:block text-sm cursor-pointer text-clickable transition duration-300 ease-in-out transform hover:-translate-y-0.5 ">
                    {{ transactionInfo.from }}</div>
                <div @click="toAddress(transactionInfo.from)" class=" sm:hidden text-sm text-clickable">
                    {{ addressFilter(transactionInfo.from) }}</div>
                <div class="cursor-pointer icon iconfont icon-copy text-clickable pl-2"
                    @click="copyContent(transactionInfo.from)" />
            </div>
        </div>
        <div class="flex justify-start items-center sm:mb-2">
            <div class="item-title sm:w-1/4 ">{{ $t('Pending.to') }}:</div>
            <div class="flex justify-start items-center">
                <div @click="toAddress(transactionInfo.to)"
                    class="hidden sm:block text-sm cursor-pointer text-clickable transition duration-300 ease-in-out transform hover:-translate-y-0.5 ">
                    {{ transactionInfo.to }}</div>
                <div @click="toAddress(transactionInfo.to)" class=" sm:hidden text-sm text-clickable">
                    {{ addressFilter(transactionInfo.to) }}</div>
                <div class="cursor-pointer icon iconfont icon-copy text-clickable pl-2"
                    @click="copyContent(transactionInfo.to)" />
            </div>
        </div>
        <div class="flex justify-start items-center sm:mb-2">
            <div class="item-title sm:w-1/4">{{ $t('Pending.amount') }}:</div>
            <div class="text-lighttable dark:text-white200">{{ transactionInfo.amount }} PGC</div>
        </div>
        <div class="flex justify-start items-center sm:mb-2">
            <div class="item-title sm:w-1/4">{{ $t('Block.txFee') }}:</div>
            <div class="text-lighttable dark:text-white200">{{ transactionInfo.fee }} PGC</div>
        </div>
        <div class="flex justify-start items-center sm:mb-2">
            <div class="item-title sm:w-1/4">Nonce:</div>
            <div class="text-lighttable dark:text-white200">{{ transactionInfo.nonce }}</div>
        </div>
        <div class="flex justify-start items-center sm:mb-2">
            <div class="item-title sm:w-1/4">{{ $t('tradeDetails.tradeType') }}:</div>
            <div class="bg-lightborder text-sm dark:text-white300 dark:bg-border100 py-1 px-2 rounded-lg">{{ tradeType }}
            </div>
        </div>

        <div class="flex justify-start items-center sm:mb-2">
            <div class="item-title sm:w-1/4">{{ $t('Block.time') }}:</div>
            <div class="text-lighttable dark:text-white200">{{ timeFormat(transactionInfo.transtime) }}</div>
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
        toTX(txid) {
            this.$router.push({
                path: '/tx/' + txid
            })
        },
        toAddress(address) {
            this.$router.replace({
                path: '/address/' + address
            })
        },
        toBlock(height,hash) {
            this.$router.push({
                path: '/block/' + height,
                query: {
                    hash: hash
                }
            })
        },
        viewTransacions() {
            this.$emit('viewTransacions')
        }
    },

}
</script>

<style scoped>
.item-title {
    @apply font-bold pr-4;
}
</style>
