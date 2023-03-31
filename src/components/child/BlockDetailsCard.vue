<template>
    <div class="text-sm pt-2 px-4 sm:pt-5 text-lightitemtitle dark:text-btndisable">
        <div class="flex justify-start items-center mb-2 sm:mb-4">
            <div class="font-bold pr-4 sm:w-1/4">{{ $t('BlockList.height') }}:</div>
            <div class="text-sm pr-2 text-lighttable dark:text-white200">{{ $store.state.blockInfo.height }}</div>
            <!-- <div class="flex justify-start items-center">
                <div> pre </div>
                <div> next </div>
            </div> -->
        </div>

        <div class="flex justify-start items-center mb-2 sm:mb-4">
            <div class="font-bold pr-4 sm:w-1/4 ">{{ $t('Block.time') }}:</div>
            <div class="text-sm text-lighttable dark:text-white200">{{ timeFormat(blockInfo.time) }}
            </div>
        </div>

        <div class="flex justify-start items-center mb-2 sm:mb-4">
            <div class="font-bold pr-4 sm:w-1/4 ">{{ $t('Block.transactions') }}:</div>
            <div class="text-sm text-lighttable dark:text-white200 ">{{ blockInfo.txs }}</div>
        </div>

        <div class="flex justify-start items-center mb-2 sm:mb-4">
            <div class="font-bold pr-4 sm:w-1/4 ">{{ $t('Block.previousBlock') }}:</div>
            <div class="text-sm">
                {{ addressFilter(blockInfo.prev_hash) }}</div>
        </div>

        <div class="flex justify-start items-center mb-2 sm:mb-4">
            <div class="font-bold pr-4 sm:w-1/4 ">{{ $t('Block.address') }}:</div>
            <div class="text-sm cursor-pointer text-clickable transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:scale-110 transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:scale-110"
                @click="toAddress(blockInfo.reward_address)">{{
                    addressFilter(blockInfo.reward_address) }}</div>
        </div>

        <div class="flex justify-start items-center mb-2 sm:mb-4">
            <div class="font-bold pr-4 sm:w-1/4 ">{{ $t('Block.reward') }}:</div>
            <div class="text-sm text-lighttable dark:text-white200">{{ blockInfo.reward_money }} HAH</div>
        </div>

        <div class="flex justify-start items-center mb-2 sm:mb-4">
            <div class="font-bold pr-4 sm:w-1/4 ">{{ $t('Block.tx') }}:</div>
            <div class="text-sm text-lighttable dark:text-white200 pr-4 sm:w-1/4"><span
                    class="text-clickable transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:scale-110 cursor-pointer">{{
                        blockInfo.txs }}
                    transacions</span> in this block
            </div>
        </div>
    </div>
</template>

<script>
import { addressFilter, amountFormat, timeFormat } from '@/utils/format'
export default {
    props: {
        blockInfo: {
            type: Object,
            default: () => { }
        }
    },
    methods: {
        addressFilter, amountFormat, timeFormat,
        toBlock(block) {

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