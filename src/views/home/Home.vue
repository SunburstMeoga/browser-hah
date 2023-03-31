<template>
    <div>
        <div class="mb-2 w-11/12 mr-auto ml-auto sm:w-10/12">
            <module-title :title="$t('Block.blockStatistics')"></module-title>
        </div>

        <!-- mobile chart -->
        <div class="sm:hidden w-11/12 mr-auto ml-auto rounded-lg h-auto pt-4 flex justify-center items-center shadow-lg sm:w-10/12 mb-4 border bg-white border-ligthborder dark:bg-black200 dark:border-border100 dark:shadow"
            style="box-shadow:0 0.5rem 1.2rem rgba(82, 85, 92, .15);">
            <div id="chart" style="width: 500px; height: 300px;"></div>
        </div>

        <!-- pc chart -->
        <div class="hidden w-11/12 mr-auto ml-auto rounded-lg h-auto pt-4 sm:flex justify-center items-center shadow-lg sm:w-10/12 mb-4 border bg-white border-ligthborder dark:bg-black200 dark:border-border100 dark:shadow"
            style="box-shadow:0 0.5rem 1.2rem rgba(82, 85, 92, .15);">
            <div id="mobile-chart" style="width: 1000px; height: 500px;"></div>
        </div>

        <div class="mb-2 w-11/12 sm:w-10/12 mr-auto ml-auto">
            <module-title :title="$t('BlockList.newBlock')"></module-title>
        </div>
        <div class="mb-4 w-11/12 mr-auto ml-auto rounded-lg shadow-lg border sm:w-10/12 bg-white border-ligthborder dark:bg-black200 dark:border-border100 dark:shadow"
            style="box-shadow:0 0.5rem 1.2rem rgba(82, 85, 92, .15);">
            <new-block-table :dataList="blockListDatas" />
            <div class="">
                <h-pagination></h-pagination>
            </div>
        </div>
        <div class="mb-2 w-11/12 sm:w-10/12 mr-auto ml-auto">
            <module-title :title="$t('Pending.tx')"></module-title>
        </div>
        <div class="mb-4 w-11/12 mr-auto ml-auto rounded-lg shadow-lg border sm:w-10/12 bg-white border-ligthborder dark:bg-black200 dark:border-border100 dark:shadow"
            style="box-shadow:0 0.5rem 1.2rem rgba(82, 85, 92, .15);">
            <trade-table :dataList="TXListDatas" />
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
        }
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
    methods: {
        //to address info 
        timeFormat,
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
                console.log('newTX', res)
                this.TXListDatas = res
            })
        },
        getNewBlock() {
            newBlock().then(response => {
                console.log('getNewBlock', response)
                this.blockListDatas = response
            })
        },
        drawChart() {
            let myChart = this.$echarts.init(document.getElementById("chart"));
            let mobileChart = this.$echarts.init(document.getElementById("mobile-chart"));
            let optionPC = {
                grid: {
                    left: '10%',
                    top: '6%',
                    bottom: '10%'
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
            option && mobileChart.setOption(option);

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

        _isMobile() {
            let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
            return flag;
        }
    }
}
</script>
<style></style>





