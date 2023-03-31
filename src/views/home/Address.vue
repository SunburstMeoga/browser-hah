<template>
    <div class="w-full pb-4 bg-lightsecond dark:bg-black300">
        <div>
            <div class="w-11/12 mr-auto ml-auto py-5 mb-4 sm:w-9/12 border-b border-ligthborder dark:border-border100">
                <second-title :title="$t('Address.addressInfo')" />
            </div>
        </div>

        <div class="mb-4">
            <div
                class="w-11/12 sm:w-9/12 mr-auto ml-auto rounded-lg  shadow-lg border bg-white border-ligthborder dark:bg-black200 dark:border-border100 dark:shadow">
                <div>
                    <address-details-card :addressInfo="addressInfo"></address-details-card>
                </div>
            </div>
        </div>

        <div>
            <div
                class="w-11/12 sm:w-9/12 mr-auto ml-auto  rounded-lg pt-2 shadow-lg border bg-white border-ligthborder dark:bg-black200 dark:border-border100 dark:shadow">
                <div class="pb-2 border-b border-ligthborder dark:border-border100">
                    <div class="pl-2">
                        <module-title :title="$t('Block.tx')" />
                    </div>
                </div>
                <div>
                    <div v-for="(item, index) in TXListDatas" :key="index"
                        class="w-11/12 mr-auto ml-auto py-2 sm:w-full sm:px-3  border-b border-ligthborder dark:border-border100">
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
            addressInfo: {},
            rank: '',
        }

    },

    created() {
        this.address = this.$route.params.address
        this.addressInfo.address = this.address
        this.getAddressInfo()
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
                this.rank = res.rank
                this.TXListDatas = res.data.data
                this.total = res.data.total
                this.getBalanceInfo()
                console.log(this.TXListDatas)
            })
        },
        getBalanceInfo() {
            let params = {
                address: this.address,
                symbol: 'HAH',
            };
            balanceInfo(params).then(res => {
                this.addressInfo.balance = res.balance
                this.addressInfo.locked = res.locked
                this.addressInfo.nonce = res.nonce
                this.addressInfo.rank = this.rank
                console.log('this.addressInfo', this.addressInfo);
            });

        }
    },
}


</script>

<style></style>
