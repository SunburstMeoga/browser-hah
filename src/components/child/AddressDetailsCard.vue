<template>
    <div class="text-sm pt-2 px-4 text-lightitemtitle dark:text-btndisable">
        <div class="flex justify-start items-center mb-2 sm:mb-4">
            <div class="font-bold pr-4 sm:w-1/4">{{ $t('common.address') }}:</div>
            <div
                class="text-sm pr-2 text-clickable transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:scale-110">
                {{ addressFilter(addressInfo.address) }}</div>

        </div>

        <div class="flex justify-start items-center mb-2 sm:mb-4">
            <div class="font-bold pr-4 sm:w-1/4">{{ $t('Address.balance') }}:</div>
            <div class="text-sm text-lighttable dark:text-white200">{{ $store.state.addressInfo.balance }} HAH</div>
        </div>

        <div class="flex justify-start items-center mb-2 sm:mb-4">
            <div class="font-bold pr-4 sm:w-1/4">{{ $t('Address.locked') }}:</div>
            <div class="text-sm text-lighttable dark:text-white200">{{ addressInfo.locked }} HAH</div>
        </div>


        <!-- <div class="flex justify-start items-center mb-2 sm:mb-4">
            <div class="font-bold pr-4 sm:w-1/4">{{ $t('Address.totalRevenue') }}:</div>
            <div class="text-sm text-lighttable dark:text-white200">{{ $store.state.isDark }}</div>
        </div>

        <div class="flex justify-start items-center mb-2 sm:mb-4">
            <div class="font-bold pr-4 sm:w-1/4">{{ $t('Address.totalTransferOut') }}:</div>
            <div class="text-sm  ">
                {{ $store.state.isDark }}</div>
        </div> -->

        <div class="flex justify-start items-center mb-2 sm:mb-4">
            <div class="font-bold pr-4 sm:w-1/4">{{ $t('Address.rank') }}:</div>
            <div class="text-sm ">{{ addressInfo.rank }}</div>
        </div>

        <div class="flex justify-start items-center mb-2 sm:mb-4">
            <div class="font-bold pr-4 sm:w-1/4">Nonce:</div>
            <div class="text-sm text-lighttable dark:text-white200">{{ addressInfo.nonce }} </div>
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