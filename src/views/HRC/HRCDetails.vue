<template>
    <div class="all">
        <div class="container">
            <div class="details-content">
                <div class="content-title">{{ $t('hrc20.overview') }}</div>
                <div class="content-item"><span class="title">{{ $t('dpos.address') }}：</span> {{ address }}</div>
                <div class="content-item"><span class="title">{{ $t('hrc20.decimals') }}： </span>{{ decimals }}</div>
                <div class="content-item"><span class="title">{{ $t('hrc20.name') }}：</span> {{ name }}</div>
            </div>
            <div class="details-content">
                <div class="content-title">{{ $t('hrc20.profileSummary') }}</div>
                <div class="content-item"><span class="title">{{ $t('hrc20.owner') }}：</span> {{ owner }}</div>
                <div class="content-item"><span class="title">{{ $t('hrc20.symbol') }}：</span> {{ symbol }}</div>
                <div class="content-item"><span class="title">{{ $t('hrc20.totalSupply') }}：</span>{{ totalSupply }}
                </div>
            </div>
        </div>
        <div data-v-18b505e9="" data-v-92014c5c="" style="background: #fff;  width: 76vw; margin: 0 auto;">
            <div data-v-18b505e9="" class="full">
                <div data-v-18b505e9="" class="part cp-rich">
                    <div data-v-18b505e9="" class="content">
                        <div data-v-18b505e9="" class="inner">
                            <div data-v-18b505e9="" class="rich_list">
                                <li data-v-18b505e9="" class="item">

                                    <div data-v-18b505e9="" class="votes"><b data-v-18b505e9="">{{ $t("Pending.hash")
                                    }}</b></div>
                                    <div data-v-18b505e9="" class="name" style="margin-left: 400px;"><b
                                            data-v-18b505e9="">{{ $t("hrc20.method")
                                            }}</b></div>
                                    <div data-v-18b505e9="" class="name"><b data-v-18b505e9="">{{ $t("Address.time")
                                    }}</b></div>
                                    <div data-v-18b505e9="" class="name"><b data-v-18b505e9="">{{ $t("Pending.from")
                                    }}</b></div>
                                    <div data-v-18b505e9="" class="name"><b data-v-18b505e9="">{{ $t("Pending.to")
                                    }}</b></div>
                                    <div data-v-18b505e9="" class="name"><b data-v-18b505e9="">{{ $t("hrc20.quantity")
                                    }}</b></div>

                                </li>
                                <li data-v-18b505e9="" class="item" v-for="(item, index) in dataList" :key="index">

                                    <div class="first-item" style="cursor: pointer;color: #612591; width: 1000px;"
                                        @click="toDetails(item)">{{
                                            item.txid
                                        }}</div>
                                    <div style="color: #612591;"> {{ item.fun }} </div>
                                    <div style="color: #f1b434;">{{ timeFormat(item.ts) }}</div>
                                    <div class="first-item" style="color: #f1b434;">{{ item.topics1 }}</div>
                                    <div class="first-item" style="color: #f1b434;">{{ item.topics2 }}</div>
                                    <div style="color: #f1b434;">{{ amountFormat(item.data) }}
                                    </div>
                                </li>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    </div>
</template>

<script>
import { contractTX } from '@/request/hrc'
import { amountFormat, timeFormat } from '@/utils/format'
export default {
    data() {
        return {
            dataList: [],
            dataDetails: {},
            address: '',
            decimals: '',
            name: '',
            owner: '',
            symbol: '',
            totalSupply: ''
        }
    },
    created() {
        this.address = this.$route.query.address
        this.decimals = this.$route.query.decimals
        this.name = this.$route.query.name
        this.owner = this.$route.query.owner
        this.symbol = this.$route.query.symbol
        this.totalSupply = this.$route.query.totalSupply
    },
    mounted() {
        this.getContractTX()
    },
    methods: {
        amountFormat, timeFormat,
        toDetails(item) {
            this.$router.push({
                path: '/tx',
                query: {
                    txid: item.txid
                }
            })
        },
        getContractTX() {
            let params = {
                address: this.address,
                pagesize: 100,
                page: 1
            };
            contractTX(params).then(res => {
                console.log(res)
                this.dataList = res.data
            });
            console.log('dataList', this.dataList);
        },
    }
}
</script>

<style scoped>
.title {
    color: #9b9b9b;
    font-weight: bold;
    text-align: right;
    min-width: 100px;
}

.first-item {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.container {
    width: 76vw;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
}

.details-content {
    width: 49%;
    background: #fff;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}

.content-item {
    width: 98%;
    height: 50px;
    display: flex;
    border-bottom: 1px solid #612591;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 50px;
    color: #f1b434;
    max-width: 800px;
}

.content-title {
    width: 98%;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    font-weight: bold;
    color: #612591;

}
</style>