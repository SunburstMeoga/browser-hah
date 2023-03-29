<template>
    <div class="text-sm text-lightitemtitle">
        <div class="flex justify-start items-center ">
            <div class="font-bold pr-4 ">Input:</div>
            <div class="  text-clickable">{{ addressFilter('0x6e38e07fb8b16c4f5903998d66a733326dca6a3b') }}</div>
        </div>

        <div class="flex justify-start items-center ">
            <div class="font-bold pr-4 ">Output:</div>
            <div class=" text-clickable">{{ addressFilter('0x6e38e07fb8b16c4f5903998d66a733326dca6a3b') }}</div>
        </div>

        <div class="flex justify-start items-center ">
            <div class="font-bold pr-4 text-lightitemtitle">{{ $t('dposDetail.amount') }}:</div>
            <div class=" ">6.5 HAH</div>
        </div>

        <div class="flex justify-start items-center ">
            <div class="font-bold pr-4 text-lightitemtitle">{{ $t('Address.txFee') }}:</div>
            <div class=" ">6.5 HAH</div>
        </div>

        <div class="flex justify-start items-center ">
            <div class="font-bold pr-4">{{ $t('Block.time') }}:</div>
            <div class=" ">2023-03-29 10:28:13</div>
        </div>
    </div>
</template>

<script>
import { addressFilter } from '@/utils/format'
export default {
    methods: {
        addressFilter,
        viewTransacions() {
            this.$emit('viewTransacions')
        }
    },

}
</script>

<style></style>