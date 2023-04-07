<template>
    <div class="text-sm text-lightitemtitle dark:text-btndisable">
        <div class="flex justify-start items-center sm:mb-2">
            <div class="font-bold pr-4 sm:w-1/4 ">Input:</div>
            <div class="cursor-pointer text-clickable transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:scale-110"
                @click="toAddress(transactionInfo.from)">{{
                    addressFilter(transactionInfo.from) }}
            </div>
        </div>

        <div class="flex justify-start items-center sm:mb-2">
            <div class="font-bold pr-4 sm:w-1/4 ">Output:</div>
            <div class="cursor-pointer text-clickable transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:scale-110"
                @click="toAddress(transactionInfo.to)">{{
                    addressFilter(transactionInfo.to) }}</div>
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
    methods: {
        addressFilter, amountFormat, timeFormat,
        toAddress(address) {
            this.$router.push({
                path: '/address/' + address
            })
        }
    },

}
</script>

<style></style>