<template>
    <div class="all">
        <div class="container">
            <div class="details-content">
                <div class="content-title">{{ $t('hrc20.overview') }}</div>
                <div class="content-item"><span class="title">{{ $t('dpos.address') }}:</span> {{ address }}</div>
                <div class="content-item"><span class="title">{{ $t('hrc20.decimals') }}: </span>{{ decimals }}</div>
                <div class="content-item"><span class="title">{{ $t('hrc20.name') }}:</span> {{ name }}</div>
            </div>
            <div class="details-content">
                <div class="content-title">{{ $t('hrc20.profileSummary') }}</div>
                <div class="content-item"><span class="title">{{ $t('hrc20.owner') }}:</span> {{ owner }}</div>
                <div class="content-item"><span class="title">{{ $t('hrc20.symbol') }}:</span> {{ symbol }}</div>
                <div class="content-item"><span class="title">{{ $t('hrc20.totalSupply') }}: </span>{{ totalSupply }}
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
                                    <div data-v-18b505e9="" class="name"><b data-v-18b505e9="">{{ $t("hrc20.method")
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

                                    <div class="first-item" style="color: #612591;" @click="toDetails(item)">{{
                                            item.txHash
                                    }}</div>
                                    <div style="color: #612591;"> {{ item.methodid }} </div>
                                    <div style="color: #f1b434;">{{ getTime(item.ts) }}</div>
                                    <div class="first-item" style="color: #f1b434;">{{ item.fromaddr }}</div>
                                    <div class="first-item" style="color: #f1b434;">{{ item.toaddr }}</div>
                                    <div style="color: #f1b434;">{{ getNumber(item.quantity) }}
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
        this.getList()

    },
    methods: {
        toDetails(item) {
            this.$router.push({
                path: '/tx',
                query: {
                    txid: item.txHash
                }
            })
        },
        getNumber(str) {
            let target = Math.pow(10, 18)
            let num = Number(str);//将字符串转换为Number类型
            let result = (num / target).toFixed(4);//将Number类型转换为保留四位数的字符串数据
            return result
        },
        getTime(time) {
            var now = new Date(time * 1000),
                y = now.getFullYear(),
                m = now.getMonth() + 1,
                d = now.getDate(),
                x = y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d) + " " + now.toTimeString().substr(0, 8);
            return x
        },
        getList() {
            let params = {
                address: this.address,
                pagesize: 100,
                page: 1
            };
            this.$api.detailsData(params).then(res => {
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