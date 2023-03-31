<template>
    <div class="w-full pb-4 bg-lightsecond dark:bg-black300">
        <div>
            <div class="w-11/12 mr-auto ml-auto py-5 mb-4 sm:w-9/12 border-b border-ligthborder dark:border-border100">
                <second-title :title="$t('common.block')" :details="'#' + height" />
            </div>
        </div>

        <div class="mb-4">
            <div
                class="w-11/12 sm:w-9/12 mr-auto ml-auto rounded-lg shadow-lg border bg-white border-ligthborder dark:bg-black200 dark:border-border100 dark:shadow">
                <div>
                    <block-details-card :blockInfo="blockInfo"></block-details-card>
                </div>
            </div>
        </div>

        <div>
            <div
                class="w-11/12 sm:w-9/12 mr-auto ml-auto rounded-lg pt-2 shadow-lg border bg-white border-ligthborder dark:bg-black200 dark:border-border100 dark:shadow">
                <div class="pb-2 border-b border-ligthborder dark:border-border100 ">
                    <div class="pl-2">
                        <module-title :title="$t('common.block') + ' ' + $t('Block.tx')" />
                    </div>
                </div>
                <div>
                    <div v-for="(item, index) in TxListDatas" :key="index"
                        class="w-11/12 mr-auto ml-auto py-2 sm:w-full sm:px-3 border-b border-ligthborder dark:border-border100 ">
                        <block-transaction-card :transactionInfo="item" />
                    </div>

                </div>
                <div>
                    <h-pagination></h-pagination>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HPagination from '@/components/public/HPagination'
import BlockDetailsCard from '@/components/child/BlockDetailsCard'
import BlockTransactionCard from '@/components/child/BlockTransactionCard'

import ModuleTitle from '@/components/public/ModuleTitle'
import SecondTitle from '@/components/public/SecondTitle'
import { blockInfo, TXList } from '@/request/home'

export default {
    name: "Block",
    components: { SecondTitle, HPagination, BlockDetailsCard, ModuleTitle, BlockTransactionCard },
    data() {
        return {
            pageSize: 10,
            pagenum: 1,
            height: '',
            blockInfo: {},
            transactionInfo: {},
            TxListDatas: []
        }
    },
    created() {
        this.height = this.$route.params.height
        console.log('height', this.height)
        this.getBlockInfo()
    },
    methods: {
        toTX(txid) {
            console.log('sfadfs')
            this.$router.push({
                path: '/tx/' + txid
            })
        },
        getTXList() {
            let param = {
                page: this.pagenum,
                pagesize: this.pageSize,
                block_hash: this.blockInfo.hash,
            };
            TXList(param).then(res => {
                this.TxListDatas = res.data
                this.pagenum = res.pagenum * 1
                this.pageSize = res.pagesize * 1
                this.total = res.total
                this.blockInfo.total = res.total
            });
        },
        getBlockInfo() {
            let params = {
                param: this.height.toString()
            };
            blockInfo(params).then(res => {
                console.log('getBlockInfo', res)
                this.blockInfo.height = res[0].height
                this.blockInfo.hash = res[0].hash
                this.blockInfo.time = res[0].time
                this.blockInfo.txs = res[0].txs
                this.blockInfo.prev_hash = res[0].prev_hash
                this.blockInfo.reward_address = res[0].reward_address
                this.blockInfo.reward_money = res[0].reward_money
                this.$store.commit('getBlockInfo', this.blockInfo)
                this.getTXList()
            });
        }
    },

}


</script>


<style></style>