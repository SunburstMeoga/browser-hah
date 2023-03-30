<template>
    <div class="text-sm pt-2 px-4 text-lightitemtitle dark:text-btndisable">
        <div class="flex justify-start items-center mb-2">
            <div class="font-bold pr-4 ">{{ $t('Tx.block') }}:</div>
            <div class="  text-clickable">{{ addressFilter(transactionInfo.block_hash) }}</div>
        </div>

        <div class="flex justify-start items-center mb-2">
            <div class="font-bold pr-4 ">{{ $t('Tx.to') }}:</div>
            <div class=" text-clickable">{{ addressFilter(transactionInfo.to) }}</div>
        </div>

        <div class="flex justify-start items-center mb-2">
            <div class="font-bold pr-4 ">{{ $t('Tx.from') }}:</div>
            <div class="text-lighttable dark:text-white200">{{ addressFilter(transactionInfo.from) }} </div>
        </div>

        <div class="flex justify-start items-center mb-2">
            <div class="font-bold pr-4 ">{{ $t('Tx.txAmount') }}:</div>
            <div class="text-lighttable dark:text-white200">{{ transactionInfo.amount }} HAH</div>
        </div>

        <div class="flex justify-start items-center mb-2">
            <div class="font-bold pr-4 ">内部转账:</div>
            <div class="text-lighttable dark:text-white200">{{ transactionInfo.transTotal }} </div>
        </div>

        <div class="flex justify-start items-center mb-2">
            <div class="font-bold pr-4 ">{{ $t('Tx.txFee') }}:</div>
            <div class="text-lighttable dark:text-white200">{{ transactionInfo.fee }} HAH</div>
        </div>

        <div class="flex justify-start items-center mb-2">
            <div class="font-bold pr-4 ">Nonce:</div>
            <div class="text-sm text-lighttable">{{ transactionInfo.nonce }} </div>
        </div>

        <div class="flex justify-start items-center mb-2">
            <div class="font-bold pr-4">{{ $t('Block.time') }}:</div>
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
    methods: {
        addressFilter, amountFormat, timeFormat,
    }
}
</script>

<style></style>