<template>
    <div class="text-sm text-lightitemtitle">
        <div class="flex justify-start items-center ">
            <div class="font-bold pr-4 ">Input:</div>
            <div class="  text-clickable">{{ addressFilter(transactionInfo.from) }}</div>
        </div>

        <div class="flex justify-start items-center ">
            <div class="font-bold pr-4 ">Output:</div>
            <div class=" text-clickable">{{ addressFilter(transactionInfo.to) }}</div>
        </div>

        <div class="flex justify-start items-center ">
            <div class="font-bold pr-4 text-lightitemtitle">{{ $t('dposDetail.amount') }}:</div>
            <div class=" ">{{ amountFormat(transactionInfo.amount) }} HAH</div>
        </div>

        <div class="flex justify-start items-center ">
            <div class="font-bold pr-4 text-lightitemtitle">{{ $t('Address.txFee') }}:</div>
            <div class=" ">{{ amountFormat(transactionInfo.fee) }} HAH</div>
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