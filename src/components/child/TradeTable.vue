<template>
    <div class="border-transparent mb-2 mr-auto ml-auto overflow-x-scroll">
        <div class="divide-y divide-gray-700 min-w-70">
            <div class="py-2 flex w-full justify-start">
                <div class="w-20 ml-4 text-gray100 text-sm font-black">
                    #
                </div>
                <div class="w-60 text-gray100 text-sm font-black" v-for="(item, index) in tableTitleList" :key="index">
                    {{ item.title }}
                </div>
            </div>
            <div class="divide-y divide-gray-700">
                <div v-for="(item, index) in dataList" :key="index" class="flex justify-start py-3">
                    <div class="w-20 ml-4 text-gray100 text-sm">
                        {{ index + 1 }}
                    </div>
                    <div class="w-60 text-gray100 text-sm">
                        {{ addressFilter(item.block_hash) }}
                    </div>
                    <div class="w-60 text-gray100 text-sm truncate">
                        {{ timeFormat(item.transtime) }}
                    </div>
                    <div class="w-60 text-gray100 text-sm">
                        {{ item.amount }}
                    </div>
                    <div class="w-60 text-gray100 text-sm">
                        {{ addressFilter(item.from) }}
                    </div>
                    <div class="w-60 text-gray100 text-sm truncate">
                        {{ addressFilter(item.to) }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { timeFormat, addressFormat, addressFilter } from '@/utils/format'
export default {
    props: {
        dataList: {
            type: Array,
            default: () => []
        },
    },
    data() {
        return {
            tableTitleList: [
                {
                    title: this.$t('Pending.hash')
                },
                {
                    title: this.$t('Pending.time')
                },
                {
                    title: this.$t('Pending.amount')
                },
                {
                    title: this.$t('Pending.from')
                },
                {
                    title: this.$t('Pending.to')
                }
            ]
        }
    },
    methods: {
        timeFormat, addressFormat, addressFilter
    },
}
</script>

<style></style>