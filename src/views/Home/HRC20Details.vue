<template>
    <div class="all">
        <div class="container">
            <div class="details-content">
                <div class="content-title">Overview</div>
                <div class="content-item">Address: {{ address }}</div>
                <div class="content-item">Decimals: {{ decimals }}</div>
                <div class="content-item">Name: {{ name }}</div>
            </div>
            <div class="details-content">
                <div class="content-title">Profile Summary</div>
                <div class="content-item">Owner: {{ owner }}</div>
                <div class="content-item">Symbol: {{ symbol }}</div>
                <div class="content-item">TotalSupply: {{ totalSupply }}</div>
            </div>
        </div>
        <div data-v-18b505e9="" data-v-92014c5c="" style="background: #fff;  width: 76vw; margin: 0 auto;">
            <div data-v-18b505e9="" class="full">
                <div data-v-18b505e9="" class="part cp-rich">
                    <div data-v-18b505e9="" class="content">
                        <div data-v-18b505e9="" class="inner">
                            <div data-v-18b505e9="" class="rich_list">
                                <li data-v-18b505e9="" class="item">

                                    <div data-v-18b505e9="" class="votes"><b data-v-18b505e9="">Txn Hash</b></div>
                                    <div data-v-18b505e9="" class="name"><b data-v-18b505e9="">Method</b></div>
                                    <div data-v-18b505e9="" class="name"><b data-v-18b505e9="">Age</b></div>
                                    <div data-v-18b505e9="" class="name"><b data-v-18b505e9="">From</b></div>
                                    <div data-v-18b505e9="" class="name"><b data-v-18b505e9="">To</b></div>
                                    <div data-v-18b505e9="" class="name"><b data-v-18b505e9="">Quantity</b></div>

                                </li>
                                <li data-v-18b505e9="" class="item" v-for="(item, index) in dataList" :key="index">

                                    <div class="first-item" style="color: #612591;">{{ item.txHash }}</div>
                                    <div style="color: #612591;"> {{ item.methodid }} </div>
                                    <div style="color: #f1b434;">{{ getTime(item.ts) }}</div>
                                    <div class="first-item" style="color: #f1b434;">{{ item.fromaddr }}</div>
                                    <div class="first-item" style="color: #f1b434;">{{ item.toaddr }}</div>
                                    <div style="color: #f1b434;">{{ item.quantity }}</div>
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


    },
    mounted() {
        this.getList()
        this.address = this.$route.query.address
        this.decimals = this.$route.query.decimals
        this.name = this.$route.query.name
        this.owner = this.$route.query.owner
        this.symbol = this.$route.query.symbol
        this.totalSupply = this.$route.query.totalSupply
    },
    methods: {
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