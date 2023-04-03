<template>
    <div class="pb-10">
        <div class="mb-2 w-11/12 mr-auto ml-auto sm:mb-4 sm:w-9/12">
            <module-title :title="$t('Block.blockStatistics')"></module-title>
        </div>

        <!-- mobile chart -->
        <div class="sm:hidden w-11/12 mr-auto ml-auto rounded-lg h-auto pt-4 flex justify-center items-center shadow-lg sm:w-9/12 mb-4 sm:mb-6 border bg-white border-ligthborder dark:bg-black200 dark:border-border100 dark:shadow"
            style="box-shadow:0 0.5rem 1.2rem rgba(82, 85, 92, .15);">
            <div id="chart" style="width: 500px; height: 300px;"></div>
        </div>

        <!-- pc chart -->
        <div class="hidden w-11/12 mr-auto ml-auto rounded-lg h-auto pt-4 sm:flex justify-center items-center shadow-lg sm:w-9/12 mb-4 sm:mb-6 border bg-white border-ligthborder dark:bg-black200 dark:border-border100 dark:shadow"
            style="box-shadow:0 0.5rem 1.2rem rgba(82, 85, 92, .15);">
            <div id="mobile-chart" style="width: 1000px; height: 500px;"></div>
        </div>

        <div class="mb-2 sm:mb-4 w-11/12 sm:w-9/12 mr-auto ml-auto">
            <module-title :title="$t('BlockList.newBlock')"></module-title>
        </div>
        <div class="mb-4 sm:mb-6 w-11/12 mr-auto ml-auto rounded-lg shadow-lg border sm:w-9/12 bg-white border-ligthborder dark:bg-black200 dark:border-border100 dark:shadow"
            style="box-shadow:0 0.5rem 1.2rem rgba(82, 85, 92, .15);">
            <new-block-table :dataList="blockListDatas" :loadStatus="blockTableLoadStatus" />
            <div class="">
                <h-pagination></h-pagination>
            </div>
        </div>
        <div class="mb-2 sm:mb-4 w-11/12 sm:w-9/12 mr-auto ml-auto">
            <module-title :title="$t('Pending.tx')"></module-title>
        </div>
        <div class="mb-4 sm:mb-6 w-11/12 mr-auto ml-auto rounded-lg shadow-lg border sm:w-9/12 bg-white border-ligthborder dark:bg-black200 dark:border-border100 dark:shadow"
            style="box-shadow:0 0.5rem 1.2rem rgba(82, 85, 92, .15);">
            <trade-table :dataList="TXListDatas" :loadStatus="tradeTableLoadStatus" />
            <div class="">
                <h-pagination></h-pagination>
            </div>
        </div>
    </div>
</template>

<script>

import NewBlockTable from '@/components/child/NewBlockTable'
import TradeTable from '@/components/child/TradeTable'
import ModuleTitle from '@/components/public/ModuleTitle'
import HPagination from '@/components/public/HPagination'

import { newBlock, newTX, blockStatistics } from '@/request/home'
import { timeFormat } from '@/utils/format'
export default {
    name: "index",
    components: { ModuleTitle, NewBlockTable, HPagination, TradeTable },
    data() {
        return {
            blockListDatas: [],
            TXListDatas: [],
            timer: null,  // timer
            chartInfo: [],
            legend: "",
            xAxis: "",
            series: "",
            tradeTableLoadStatus: 'loading',
            blockTableLoadStatus: 'loading',
            websock: null
        }
    },
    created() {
        this.initWebSocket();
    },
    mounted() {
        this.getNewBlock()
        this.getNewTX()
        let days = 31;
        this.getChartData(days)
        // this.timer = setInterval(() => {
        //     this.getNewBlock()
        //     this.getNewTX()
        //     this.getChartData(days)
        // }, 1000 * 10)
    },
    destroyed: function () {
        this.websock.close();
    },
    methods: {
        timeFormat,

        initWebSocket() {
            let url = 'wss://testnet.hashahead.org/dev-ws/'
            console.log(url);
            this.websock = new WebSocket(url);
            this.websock.onopen = this.websocketOnopen;
            this.websock.onerror = this.websocketOnerror;
            this.websock.onmessage = this.websocketOnmessage;
            this.websock.onclose = this.websocketOnclose;
        },

        websocketOnerror(e) {
            console.log("WebSocket Connect Error");
            this.reconnect();
        },
        websocketOnmessage(e) {
            console.log("-----Message-------", JSON.parse(e.data));
            let data = JSON.parse(e.data)
            let blockObj = {}
            blockObj.height = data.height
            blockObj.reward_money = data.txmint.amount
            blockObj.reward_address = data.txmint.to
            blockObj.prev_hash = data.prev
            blockObj.time = data.time
            blockObj.txs = data.tx.length
            data.tx.map(item => {
                let txObj = {}
                txObj.block_hash = item.blockhash
                txObj.transtime = data.time
                txObj.amount = item.amount
                txObj.from = item.from
                txObj.to = item.to
                if (item.type !== 'certification') {
                    this.TXListDatas.unshift(txObj)
                    this.TXListDatas.pop()
                }
            })
            this.blockListDatas.unshift(blockObj)
            this.blockListDatas.pop()
        },
        websocketOnclose(e) {
            console.log("connection closed (" + e.code + ")");
            // this.reconnect();
        },

        // reconnect() {
        //     if (this.lockReconnect) return;
        //     this.lockReconnect = true;
        //     setTimeout(function () {
        //         console.info("try reconnect...");
        //         this.initWebSocket();
        //         this.lockReconnect = false;
        //     }, 5000);
        // },


        toAddress(address) {
            this.$router.push({
                path: '/address/' + address
            })
        },
        toHeight(height) {
            this.$router.push({
                path: '/block/' + height
            })
        },

        getNewTX() {
            newTX().then(res => {
                // console.log('newTX', res)

                // let res = []
                if (res.length !== 0) {
                    this.TXListDatas = res
                    this.tradeTableLoadStatus = 'finished'
                } else {
                    this.tradeTableLoadStatus = 'empty'
                }
            })
        },
        getNewBlock() {
            newBlock().then(res => {
                console.log('getNewBlock', res)
                if (res.length !== 0) {
                    this.blockListDatas = res
                    this.blockTableLoadStatus = 'finished'
                } else {
                    this.blockTableLoadStatus = 'empty'
                }
            })
        },
        drawChart() {
            let myChart = this.$echarts.init(document.getElementById("chart"));
            let mobileChart = this.$echarts.init(document.getElementById("mobile-chart"));
            let optionPC = {
                grid: {
                    // left: '10%',
                    // right: '5%',
                    bottom: '5%',
                    top: '5%'
                },
                title: {
                    text: ""
                },
                tooltip: {},
                xAxis: {
                    data: this.xAxis
                },
                yAxis: {},
                series: this.series
            }

            let option = {
                grid: {
                    left: '18%',
                    top: '6%',
                    bottom: '12%'
                },
                title: {
                    text: ""
                },
                tooltip: {},
                xAxis: {
                    data: this.xAxis
                },
                yAxis: {},
                series: this.series
            };

            option && myChart.setOption(option);
            optionPC && mobileChart.setOption(optionPC);

        },
        getChartData(days) {
            let params = {
                days: days,
            };
            blockStatistics(params).then(res => {
                console.log('blockStatistics', res)
                this.ranklistDatas = res
                this.legend = res.length
                this.xAxis = res.xAxis;
                let series = [];
                for (let serieIndex = 0; serieIndex < res.series.length; serieIndex++) {
                    let serie =
                    {
                        name: res.series[serieIndex].name,
                        type: "line",
                        data: res.series[serieIndex].data,
                        smooth: true
                    }
                    series.push(serie)
                }
                this.series = series;
                this.drawChart();
            })
        },
    }
}
</script>
<style></style>





