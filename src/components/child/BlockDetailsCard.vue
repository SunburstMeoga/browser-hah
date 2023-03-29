<template>
    <div class="text-sm pt-2 px-4">
        <div class="flex justify-start items-center mb-2">
            <div class="font-bold pr-4 text-lightitemtitle">{{ $t('BlockList.height') }}:</div>
            <div class="text-sm pr-2 text-lighttable">{{ $store.state.blockInfo.height }}</div>
            <div class="flex justify-start items-center">
                <div> pre </div>
                <div> next </div>
            </div>
        </div>

        <div class="flex justify-start items-center mb-2">
            <div class="font-bold pr-4 text-lightitemtitle">{{ $t('Block.time') }}:</div>
            <div class="text-sm text-lighttable">{{ timeFormat(blockInfo.time) }}</div>
        </div>

        <div class="flex justify-start items-center mb-2">
            <div class="font-bold pr-4 text-lightitemtitle">{{ $t('Block.transactions') }}:</div>
            <div class="text-sm text-lighttable">{{ blockInfo.txs }}</div>
        </div>

        <div class="flex justify-start items-center mb-2">
            <div class="font-bold pr-4 text-lightitemtitle">{{ $t('Block.previousBlock') }}:</div>
            <div class="text-sm  text-clickable">
                {{ addressFilter(blockInfo.prev_hash) }}</div>
        </div>

        <div class="flex justify-start items-center mb-2">
            <div class="font-bold pr-4 text-lightitemtitle">{{ $t('Block.address') }}:</div>
            <div class="text-sm text-clickable">{{ addressFilter(blockInfo.reward_address) }}</div>
        </div>

        <div class="flex justify-start items-center mb-2">
            <div class="font-bold pr-4 text-lightitemtitle">{{ $t('Block.reward') }}:</div>
            <div class="text-sm text-lighttable">{{ amountFormat(blockInfo.reward_money) }} HAH</div>
        </div>

        <div class="flex justify-start items-center mb-2">
            <div class="font-bold pr-4 text-lightitemtitle">{{ $t('Block.tx') }}:</div>
            <div class="text-sm text-lighttable pr-4"><span class="text-clickable">{{ blockInfo.txs }}
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
        viewTransacions() {
            this.$emit('viewTransacions')
        }
    },

}
</script>

<style></style>