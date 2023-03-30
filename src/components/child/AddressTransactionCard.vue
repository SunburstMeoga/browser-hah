<template>
    <div class="text-sm text-lightitemtitle">
        <div class="flex justify-start items-center ">
            <div class="font-bold pr-4 ">{{ $t('Block.block') }}:</div>
            <div class=" text-clickable">{{ addressFilter(transactionInfo.block_hash) }}</div>
        </div>
        <div class="flex justify-start items-center ">
            <div class="font-bold pr-4">{{ $t('Pending.to') }}:</div>
            <div class=" ">{{ addressFilter(transactionInfo.to) }}</div>
        </div>
        <div class="flex justify-start items-center ">
            <div class="font-bold pr-4 ">{{ $t('Pending.from') }}:</div>
            <div class="  text-clickable">{{ addressFilter(transactionInfo.from) }}</div>
        </div>

        <div class="flex justify-start items-center ">
            <div class="font-bold pr-4">{{ $t('Block.txFee') }}:</div>
            <div class=" ">{{ amountFormat(transactionInfo.fee) }} HAH</div>
        </div>


        <div class="flex justify-start items-center ">
            <div class="font-bold pr-4">{{ $t('Pending.amount') }}:</div>
            <div class=" ">{{ amountFormat(transactionInfo.amount) }} HAH</div>
        </div>

        <div class="flex justify-start items-center ">
            <div class="font-bold pr-4">Nonce:</div>
            <div class=" ">{{ timeFormat(transactionInfo.nonce) }}</div>
        </div>

        <div class="flex justify-start items-center ">
            <div class="font-bold pr-4">{{ $t('Block.time') }}:</div>
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
    methods: {
        addressFilter, amountFormat, timeFormat,
        viewTransacions() {
            this.$emit('viewTransacions')
        }
    },

}
</script>

<style></style>