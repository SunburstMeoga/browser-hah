<template>
    <div class="w-full pb-4 bg-lightsecond">
        <div>
            <div class="w-11/12 mr-auto ml-auto py-5 mb-4 border-b border-ligthborder">
                <second-title :title="$t('Address.addressInfo')" />
            </div>
        </div>

        <div class="mb-4">
            <div
                class="w-11/12 mr-auto ml-auto rounded-lg shadow-lg border bg-white border-ligthborder dark:bg-black200 dark:border-border100 dark:shadow">
                <div>
                    <address-details-card :addressInfo="addressInfo"></address-details-card>
                </div>
            </div>
        </div>

        <div>
            <div
                class="w-11/12 mr-auto ml-auto rounded-lg pt-2 shadow-lg border bg-white border-ligthborder dark:bg-black200 dark:border-border100 dark:shadow">
                <div class="pb-2 w-11/12 mr-auto ml-auto border-b border-ligthborder">
                    <module-title :title="$t('Block.tx')" />
                </div>
                <div>
                    <div v-for="(item, index) in TXListDatas" :key="index"
                        class="w-11/12 mr-auto ml-auto py-2 border-b border-ligthborder">
                        <address-transaction-card :transactionInfo="item" />
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
import AddressDetailsCard from '@/components/child/AddressDetailsCard'
import AddressTransactionCard from '@/components/child/AddressTransactionCard'

import ModuleTitle from '@/components/public/ModuleTitle'
import SecondTitle from '@/components/public/SecondTitle'
import { addressInfo, balanceInfo } from '@/request/home'
import { timeFormat } from '@/utils/format'

export default {
    components: { SecondTitle, HPagination, AddressDetailsCard, ModuleTitle, AddressTransactionCard },
    name: "Address",
    data() {
        return {
            address: '',
            TXListDatas: [],
            pageSize: 10,
            pagenum: 1,
            total: 0,
            addressInfo: {}
        }

    },

    created() {
        this.address = this.$route.params.address
        console.log('this.$route.params.address', this.$route.params.address)
        this.addressInfo.address = this.address
        this.getAddressInfo()
        this.getBalanceInfo()
    },
    methods: {
        timeFormat,
        toTX(txid) {
            this.$router.push({
                path: '/tx/' + txid
            })
        },
        getAddressInfo() {
            let params = {
                address: this.address,
                page: this.pagenum,
                pagesize: this.pageSize
            };

            addressInfo(params).then(res => {
                console.log('addressInfo', res)
                this.addressInfo.balance = res.balance
                this.addressInfo.rank = res.rank
                this.TXListDatas = res.data.data
                this.pagenum = res.data.pagenum
                this.pageSize = res.data.pagesize
                this.total = res.data.total

                console.log(this.TXListDatas);
            })
        },
        getBalanceInfo() {
            let params = {
                address: this.address,
                symbol: 'HAH',
            };
            balanceInfo(params).then(res => {
                console.log('res', res);
                this.addressInfo.locked = res.locked
                this.addressInfo.nonce = res.nonce
            });

        }
    },
}


</script>

<style></style>
