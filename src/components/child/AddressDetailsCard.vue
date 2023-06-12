<template>
    <div class="text-sm pt-2 px-4 text-lightitemtitle dark:text-btndisable">
        <div class="flex justify-start items-center mb-2 sm:mb-4">
            <div class="font-bold pr-4 sm:w-1/4">{{ $t('common.address') }}:</div>

            <div class="flex justify-start items-center">
                <div @click="toAddress(addressInfo.address)" class="sm:hidden text-sm text-clickable">
                    {{ addressFilter(addressInfo.address) }}</div>
                <div @click="toAddress(addressInfo.address)"
                    class="hidden sm:block text-sm cursor-pointer text-clickable transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:scale-110">
                    {{ addressInfo.address }}</div>
                <div class="cursor-pointer icon iconfont icon-copy text-clickable pl-2"
                    @click="copyContent(addressInfo.address)" />
            </div>

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

        <!-- <div class="flex justify-start items-center mb-2 sm:mb-4">
            <div class="font-bold pr-4 sm:w-1/4">{{ $t('Address.rank') }}:</div>
            <div class="text-sm ">{{ addressInfo.rank === -1 ? $t('Rank.notRank') : addressInfo.rank }}</div>
        </div> -->

        <div class="flex justify-start items-center mb-2 sm:mb-4">
            <div class="font-bold pr-4 sm:w-1/4">Nonce:</div>
            <div class="text-sm text-lighttable dark:text-white200">{{ addressInfo.nonce }} </div>
        </div>

        <div class="flex justify-start items-center mb-2 sm:mb-4" v-if="addressInfo.token.length !== 0">
            <div class="font-bold pr-4 sm:w-1/4">Token:</div>
            <div class="text-sm text-lighttable dark:text-white200 pr-2">{{ addressInfo.token.length }} </div>
            <div class="text-clickable cursor-pointer underline" @click="showTokens = !showTokens">{{ showTokens ?
                $t('Address.hidden')
                : $t('common.more') }}</div>
        </div>

        <div class="flex justify-start items-center mb-2 sm:mb-4">
            <div class="font-bold pr-4 sm:w-1/4">{{ $t('Address.testOne') }}:</div>
            <div class="text-sm text-lighttable dark:text-white200">{{ addressInfo.tv.timevault }} </div>
        </div>

        <div class="flex justify-start items-center mb-2 sm:mb-4">
            <div class="font-bold pr-4 sm:w-1/4">{{ $t('Address.testTwo') }}:</div>
            <div class="text-sm text-lighttable dark:text-white200">{{ addressInfo.tv.prevsettlementtime !== 0 ?
                timeFormat(addressInfo.tv.prevsettlementtime) : $t('loadStatus.notData') }}
            </div>
        </div>

        <div v-show="showTokens">
            <div class="flex justify-between items-center border-t rounded-lg bg-white border-ligthborder dark:bg-black200 dark:border-border100 dark:shadow py-2 px-1"
                v-for="(item, index) in addressInfo.token" :key="index">
                <div class="flex flex-col justify-center items-start">
                    <div class="font-bold">{{ item.symbol }}</div>
                    <div class="flex justify-start items-center">
                        <div class="text-clickable sm:hidden">{{
                            addressFilter(item.con_addr) }}
                        </div>
                        <div class="cursor-pointer text-clickable hidden sm:block" @click="toToken(item)">{{ item.con_addr
                        }}</div>
                        <div class="cursor-pointer icon iconfont icon-copy text-clickable pl-2"
                            @click="copyContent(item.con_addr)" />
                    </div>
                </div>
                <div>
                    {{ item.balance }} {{ item.symbol }}
                </div>
            </div>
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
    data() {
        return {
            showTokens: false
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
        toToken(item) {
            console.log(item)
            // return
            this.$router.push({
                path: '/token/' + item.con_addr,
                query: {
                    a: this.addressInfo.address
                }
            })
        },
        toAddress(address) {
            this.$router.push({
                path: '/address/' + address
            })
        },
        viewTransacions() {
            this.$emit('viewTransacions')
        }
    },

}
</script>

<style></style>