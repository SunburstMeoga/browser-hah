<template>
    <div class="text-sm text-lightitemtitle dark:text-btndisable">

        <div class="flex justify-start items-center sm:mb-2">
            <div class="font-bold pr-4 sm:w-1/4">{{ $t('tradeDetails.hash') }}:</div>
            <div @click="toTX(transactionInfo.txid)"
                class="hidden sm:block cursor-pointer text-clickable transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:scale-110">
                {{ transactionInfo.txid }} </div>
            <div class="sm:hidden text-clickable" @click="toTX(transactionInfo.txid)">{{ addressFilter(transactionInfo.txid)
            }} </div>
            <div class="icon iconfont icon-copy text-clickable pl-2" @click="copyContent(transactionInfo.txid)"></div>

        </div>

        <div class="flex justify-start items-center sm:mb-2">
            <div class="font-bold pr-4 sm:w-1/4 ">{{ $t('Tx.from') }}:</div>
            <div class="flex justify-start items-center">
                <div class="hidden sm:block cursor-pointer text-clickable transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:scale-110"
                    @click="toAddress(transactionInfo.from)">
                    {{ transactionInfo.from }}
                </div>
                <div class="sm:hidden text-clickable" @click="toAddress(transactionInfo.from)">
                    {{ addressFilter(transactionInfo.from) }}
                </div>
                <div class="icon iconfont icon-copy text-clickable pl-2" @click="copyContent(transactionInfo.from)"></div>
            </div>
        </div>

        <div class="flex justify-start items-center sm:mb-2">
            <div class="font-bold pr-4 sm:w-1/4 ">{{ $t('Tx.to') }}:</div>
            <div class="flex justify-start items-center">
                <div class="hidden sm:block cursor-pointer text-clickable transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:scale-110"
                    @click="toAddress(transactionInfo.to)">
                    {{ transactionInfo.to }}
                </div>
                <div class="sm:hidden  text-clickable" @click="toAddress(transactionInfo.to)">
                    {{ addressFilter(transactionInfo.to) }}
                </div>
                <div class="icon iconfont icon-copy text-clickable pl-2" @click="copyContent(transactionInfo.to)"></div>
            </div>
        </div>

        <div class="flex justify-start items-center sm:mb-2">
            <div class="font-bold pr-4 sm:w-1/4">{{ $t('dposDetail.amount') }}:</div>
            <div class=" ">{{ transactionInfo.amount }} HAH</div>
        </div>

        <div class="flex justify-start items-center sm:mb-2">
            <div class="font-bold pr-4 sm:w-1/4">{{ $t('Address.txFee') }}:</div>
            <div class=" ">{{ transactionInfo.fee }} HAH</div>
        </div>

        <div class="flex justify-start items-center sm:mb-2">
            <div class="font-bold pr-4 sm:w-1/4">{{ $t('tradeDetails.tradeType') }}:</div>
            <div class="bg-lightborder text-sm dark:text-white300 dark:bg-border100 py-1 px-2 rounded-lg">{{ tradeType }}
            </div>
        </div>

        <div class="flex justify-start items-center sm:mb-2">
            <div class="font-bold pr-4 sm:w-1/4">{{ $t('Block.time') }}:</div>
            <div class=" ">{{ timeFormat(transactionInfo.transtime) }}</div>
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
            this.$router.push({
                path: '/address/' + address
            })
        }
    },

}
</script>

<style></style>