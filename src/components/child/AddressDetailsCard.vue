<template>
    <div class="text-sm pt-2 px-4">
        <div class="flex justify-start items-center mb-2">
            <div class="font-bold pr-4 text-lightitemtitle">{{ $t('common.address') }}:</div>
            <div class="text-sm pr-2 text-lighttable">{{ addressFilter(addressInfo.address) }}</div>

        </div>

        <div class="flex justify-start items-center mb-2">
            <div class="font-bold pr-4 text-lightitemtitle">{{ $t('Address.balance') }}:</div>
            <div class="text-sm text-lighttable">{{ addressInfo.balance }}</div>
        </div>

        <div class="flex justify-start items-center mb-2">
            <div class="font-bold pr-4 text-lightitemtitle">{{ $t('Address.locked') }}:</div>
            <div class="text-sm text-lighttable">{{ addressInfo.locked }}</div>
        </div>


        <div class="flex justify-start items-center mb-2">
            <div class="font-bold pr-4 text-lightitemtitle">{{ $t('Address.totalRevenue') }}:</div>
            <div class="text-sm text-lighttable">{{ $store.state.isDark }}</div>
        </div>

        <div class="flex justify-start items-center mb-2">
            <div class="font-bold pr-4 text-lightitemtitle">{{ $t('Address.totalTransferOut') }}:</div>
            <div class="text-sm  ">
                {{ $store.state.isDark }}</div>
        </div>

        <div class="flex justify-start items-center mb-2">
            <div class="font-bold pr-4 text-lightitemtitle">{{ $t('Address.rank') }}:</div>
            <div class="text-sm ">{{ addressInfo.rank }}</div>
        </div>

        <div class="flex justify-start items-center mb-2">
            <div class="font-bold pr-4 text-lightitemtitle">Nonce:</div>
            <div class="text-sm text-lighttable">{{ addressInfo.nonce }} </div>
        </div>
    </div>
</template>

<script>
import { addressFilter, amountFormat, timeFormat } from '@/utils/format'
export default {
    props: {
        addressInfo: {
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