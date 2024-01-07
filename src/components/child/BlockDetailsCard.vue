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
            <div class="font-bold pr-4 sm:w-1/4">{{ $t('Block.blockHASH') }}:</div>
            <div class="text-sm pr-2 hidden sm:block text-lighttable dark:text-white200">{{ $store.state.blockInfo.hash }}
            </div>
            <div class="text-sm pr-2 sm:hidden text-lighttable dark:text-white200">{{
                addressFilter($store.state.blockInfo.hash) }}</div>
            <div class="cursor-pointer icon iconfont icon-copy text-clickable"
                @click="copyContent($store.state.blockInfo.hash)" />
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
            <div class="text-sm pr-2 sm:hidden">
                {{ addressFilter(blockInfo.prev_hash) }}</div>
            <div class="text-sm pr-2 hidden sm:block">
                {{ blockInfo.prev_hash }}</div>
            <div class="cursor-pointer icon iconfont icon-copy text-clickable" @click="copyContent(blockInfo.prev_hash)" />
        </div>

        <div class="flex justify-start items-center mb-2 sm:mb-4">
            <div class="font-bold pr-4 sm:w-1/4 ">{{ $t('Block.address') }}:</div>
            <div class="flex justify-start items-center">
                <div @click="toAddress(blockInfo.reward_address)"
                    class="hidden sm:block text-sm cursor-pointer text-clickable transition duration-300 ease-in-out transform hover:-translate-y-0.5 ">
                    {{ blockInfo.reward_address }}</div>
                <div @click="toAddress(blockInfo.reward_address)" class="sm:hidden text-sm text-clickable">
                    {{ addressFilter(blockInfo.reward_address) }}</div>
                <div class="cursor-pointer icon iconfont icon-copy text-clickable pl-2"
                    @click="copyContent(blockInfo.reward_address)" />
            </div>
        </div>

        <div class="flex justify-start items-center mb-2 sm:mb-4">
            <div class="font-bold pr-4 sm:w-1/4 ">{{ $t('Block.reward') }}:</div>
            <div class="text-sm text-lighttable dark:text-white200">{{ blockInfo.reward_money }} HAH</div>
        </div>

        <div class="flex justify-start items-center mb-2 sm:mb-4">
            <div class="font-bold pr-4 sm:w-1/4 ">gasUsed:</div>
            <div class="text-sm text-lighttable dark:text-white200">{{ blockInfo.gasUsed }}</div>
        </div>
        <div class="flex justify-start items-center mb-2 sm:mb-4">
            <div class="font-bold pr-4 sm:w-1/4 ">gasLimit:</div>
            <div class="text-sm text-lighttable dark:text-white200">{{ blockInfo.gasLimit }}</div>
        </div>


        <div class="flex justify-start items-center mb-2 sm:mb-4">
            <div class="font-bold pr-4 sm:w-1/4 ">{{ $t('Block.tx') }}:</div>
            <div class="text-sm text-lighttable dark:text-white200 pr-4 sm:w-1/4">
                {{ $t('Block.blockTrade', { count: blockInfo.txs }) }}
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
        toAddress(address) {
            this.$router.push({
                path: '/address/' + address
            })
        }
    },

}
</script>

<style></style>