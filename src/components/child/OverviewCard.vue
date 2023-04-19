<template>
    <div>
        <div class="px-2 pt-2 text-black dark:text-white300 sm:flex justify-start items-center">
            <div @click="viewMoreBlock"
                class="w-full flex justify-start items-center py-2 sm:w-3/12 border-b border-lightborder dark:border-border100 sm:border-none sm:cursor-pointer">
                <div class="icon iconfont icon-qukuai px-6 text-2xl" />
                <div class="flex flex-col items-start justify-center">
                    <div class="mb-1 font-black">{{ this.$t('common.block') }}</div>
                    <div>{{ numberFormat(overInfo.height) }}</div>
                </div>
            </div>
            <div @click="viewMoreTransation"
                class="w-full flex justify-start items-center py-2 sm:w-3/12 border-b border-lightborder dark:border-border100 sm:border-none sm:cursor-pointer">
                <div class="icon iconfont icon-jiaoyi px-6 text-2xl" />
                <div class="flex flex-col items-start justify-center">
                    <div class="mb-1 font-black">{{ this.$t('Block.tx') }}</div>
                    <div>{{ numberFormat(overInfo.tx_c) }}</div>
                </div>
            </div>
            <div @click="viewMoreTransation"
                class="w-full flex justify-start items-center py-2 sm:w-3/12 border-b border-lightborder dark:border-border100 sm:border-none sm:cursor-pointer">
                <div class="icon iconfont icon-jiaoyijine px-6 text-2xl" />
                <div class="flex flex-col items-start justify-center">
                    <div class="mb-1 font-black">{{ this.$t('overview.out') }}</div>
                    <div>{{ numberFormat(overInfo.amount) }}</div>
                </div>
            </div>
            <div @click="toRank"
                class="w-full flex justify-start items-center py-2 sm:w-3/12 border-b border-lightborder dark:border-border100 sm:border-none sm:cursor-pointer">
                <div class="icon iconfont icon-shouhuodizhi px-6 text-2xl" />
                <div class="flex flex-col items-start justify-center">
                    <div class="mb-1 font-black">{{ this.$t('Rank.address') }}</div>
                    <div>{{ numberFormat(overInfo.addr_c) }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { numberFormat } from '@/utils/format'
export default {
    data() {
        return {}
    },
    props: {
        overInfo: {
            type: Object,
            default: () => { }
        }
    },
    methods: {
        numberFormat,
        toRank() {
            this.$router.push({
                path: '/rank'
            })
        },
        viewMoreTransation() {
            this.$router.push({
                path: '/trade/list'
            })
        },
        viewMoreBlock() {
            this.$router.push({
                path: '/block/list'
            })
        },
    }
}
</script>

<style></style>