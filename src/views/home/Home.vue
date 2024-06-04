<template>
    <div class="pb-10">
        <div v-if="showOverview"
            class="mb-4 sm:mb-6 w-11/12 mr-auto ml-auto rounded-lg shadow-lg border sm:w-9/12 bg-white border-ligthborder dark:bg-black200 dark:border-border100 dark:shadow">
            <overview-card :overInfo="overInfo" />
        </div>

        <div class="mb-2 w-11/12 mr-auto ml-auto sm:mb-4 sm:w-9/12">
            <module-title :title="$t('Block.transactions')"></module-title>
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

        <!-- <div>
            <div class="mb-4 sm:mb-6 w-11/12 mr-auto ml-auto rounded-lg shadow-lg border sm:w-9/12 bg-white border-ligthborder dark:bg-black200 dark:border-border100 dark:shadow"
                style="box-shadow:0 0.5rem 1.2rem rgba(82, 85, 92, .15);">
                <div class="py-3 px-2 mr-auto ml-auto">
                    <div class="flex justify-start items-center flex-wrap sm:flex-nowrap px-2">
                        <div class="text-black dark:text-white300 text-base font-bold sm:text-xl pr-3">{{
                            $t('branch.currentBranch')
                        }}:</div>
                        <div class="flex justify-start items-center">
                            <div :class="index === 1 ? 'ml-4' : ''" v-for="(item, index) in branchList" :key="index">
                                <el-radio @input="enabled(item)" v-model="chainid" :label="item.chainid">{{ item.name
                                }}</el-radio>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
            <div class="mb-4 sm:mb-6 w-11/12 mr-auto ml-auto rounded-lg shadow-lg border sm:w-9/12 bg-white border-ligthborder dark:bg-black200 dark:border-border100 dark:shadow"
                style="box-shadow:0 0.5rem 1.2rem rgba(82, 85, 92, .15);">
                <div class="py-2 sm:mb-4 mr-auto ml-auto border-b border-ligthborder dark:border-border100">
                    <div class="w-11/12 mr-auto ml-auto sm:w-full sm:px-2 sm:py-3">
                        <module-title :title="$t('branch.infor')" :total="totalBlocks" />
                    </div>
                </div>
                <branch-info-table :dataList="branchList" :loadStatus="blockTableLoadStatus" />
                <div>
                    <h-pagination @changePageSize="toBlockFirstPage" @toFirstPage="toBlockFirstPage" @toPrePage="toBlockPrePage"
                        @toNextPage="toBlockNextPage" @toLastPage="toBlockLastPage" :currentPage="blockCurrentPage"
                        :totalPage="totalPage" @toTargetPage="toBlockTargetPage" />
                </div>
            </div>
        </div> -->

        <div class="mb-2 sm:mb-4 w-11/12 sm:w-9/12 mr-auto ml-auto">
            <module-title :title="$t('BlockList.newBlock')"></module-title>
        </div>
        <div class="mb-4 sm:mb-6 w-11/12 mr-auto ml-auto rounded-lg shadow-lg border sm:w-9/12 bg-white border-ligthborder dark:bg-black200 dark:border-border100 dark:shadow"
            style="box-shadow:0 0.5rem 1.2rem rgba(82, 85, 92, .15);">
            <new-block-table :dataList="blockListDatas" :loadStatus="blockTableLoadStatus" />
            <div>
                <view-more @handleViewMore="viewMoreBlock" />
            </div>
        </div>
        <div class="mb-2 sm:mb-4 w-11/12 sm:w-9/12 mr-auto ml-auto">
            <module-title :title="$t('Pending.tx')"></module-title>
        </div>
        <div class="mb-4 sm:mb-6 w-11/12 mr-auto ml-auto rounded-lg shadow-lg border sm:w-9/12 bg-white border-ligthborder dark:bg-black200 dark:border-border100 dark:shadow"
            style="box-shadow:0 0.5rem 1.2rem rgba(82, 85, 92, .15);">
            <trade-table :dataList="TXListDatas" :loadStatus="tradeTableLoadStatus" />
            <div>
                <view-more @handleViewMore="viewMoreTransation" />
            </div>
        </div>
    </div>
</template>

<script>

import NewBlockTable from '@/components/child/NewBlockTable'
import TradeTable from '@/components/child/TradeTable'
import ModuleTitle from '@/components/public/ModuleTitle'
import HPagination from '@/components/public/HPagination'
import ViewMore from '@/components/public/ViewMore'
import OverviewCard from '@/components/child/OverviewCard'

import { blockList, TXList, blockStatistics, allStatistics } from '@/request/home'
import BranchInfoTable from '@/components/child/BranchInfoTable'
import { branchList } from '@/request/branch'
import { numberFormat } from '../../utils/format'
import { timeFormat } from '@/utils/format'
export default {
    name: "index",
    components: { ModuleTitle, NewBlockTable, HPagination, TradeTable, ViewMore, OverviewCard, BranchInfoTable },
    data() {
        return {
            blockListDatas: [],
            TXListDatas: [],
            timer: null,  // timer
            chartInfo: [],
            legend: "",
            xAxis: [],
            series: "",
            tradeTableLoadStatus: 'loading',
            blockTableLoadStatus: 'loading',
            websock: null,
            blockPageSize: 10,
            blockCurrentPage: 1,
            txPageSize: 10,
            txCurrentPage: 1,
            amountChart: [],
            countChart: [],
            overInfo: {},
            showOverview: false,
            branchList: [],
            blockTableLoadStatus: 'loading',
            blockPageSize: 10,
            blockCurrentPage: 1,
            totalBlocks: 0,
            totalPage: 0,
            chainid: 0
        }
    },
    created() {
        this.initWebSocket()
        this.getBranchList()
    },
    mounted() {
        this.getBlockList()
        this.getTXList()
        this.getAllStatData()
        // this.getChartData(31)
    },
    destroyed: function () {
        this.websock.close()
    },
    methods: {
        timeFormat,
        numberFormat,
        getBranchList() {
            this.blockTableLoadStatus = 'loading',
                branchList({ pageSize: this.blockPageSize, page: this.blockCurrentPage, chainid: parseInt(localStorage.getItem('chainID')) }).then(res => {
                    this.blockTableLoadStatus = 'finished'
                    console.log('sdfsdf', res)
                    this.branchList = res
                    if (res.data.length !== 0) {
                        this.branchList = res.data
                        this.blockTableLoadStatus = 'finished'
                        if (!localStorage.getItem('chainID')) {
                            localStorage.setItem('chainName', branchList[0].name)
                            localStorage.setItem('chainID', branchList[0].name.chainid)
                            // branchList[0].chedked = true
                            this.$store.commit('getChainId', branchList[0].name.chainid)
                            this.$store.commit('getChainName', branchList[0].name.name)
                            this.chainid = branchList[0].name
                        } else {
                            this.chainid = parseInt(localStorage.getItem('chainID'))

                        }
                        console.log(this.chainid)

                    } else {
                        this.blockTableLoadStatus = 'empty'
                        this.$message.error(this.$t('messageTips.noMore'))
                    }
                    this.totalPage = res.totalPage
                    this.totalBlocks = res.total
                    this.blockCurrentPage = res.page
                }).catch(err => {
                    console.log('load fail:', err)
                })
        },
        enabled(item) {
            console.log(item)
            localStorage.setItem('chainName', item.name)
            localStorage.setItem('chainID', item.chainid)
            this.$store.commit('getChainId', item.chainid)
            this.$store.commit('getChainName', item.name)
            console.log(item.chainid, parseInt(localStorage.getItem('chainID')), this.$store.state.chainName, item.checked)
            this.$router.replace({ path: '/empty' })
        },
        toBlockFirstPage(selectedPageSize) {
            console.log('第一页')
            this.blockPageSize = selectedPageSize
            this.blockCurrentPage = 1
            this.branchList = []
            this.getBranchList()

        },
        toBlockPrePage(selectedPageSize) {
            if (this.blockCurrentPage === 1) {
                return
            }
            this.blockPageSize = selectedPageSize
            this.blockCurrentPage = this.blockCurrentPage - 1
            this.branchList = []
            this.getBranchList()
        },
        toBlockNextPage(selectedPageSize) {
            this.blockPageSize = selectedPageSize
            this.blockCurrentPage = this.blockCurrentPage + 1
            this.branchList = []
            this.getBranchList()
        },
        toBlockLastPage(selectedPageSize) {
            if (this.blockCurrentPage > this.totalPage) {
                return
            }
            this.blockPageSize = selectedPageSize
            this.blockCurrentPage = this.totalPage
            this.branchList = []
            this.getBranchList()
        },
        // toBlockTargetPage() {

        // }
        toBlockTargetPage(selectedPageSize, targetPage) {
            console.log(targetPage)
            if (targetPage <= 0) {
                return
            }
            this.blockPageSize = selectedPageSize
            this.blockCurrentPage = targetPage
            this.branchList = []
            this.getBranchList()
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
            // this.reconnect();
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
            blockObj.chainid = data.chainid
            blockObj.txs = data.tx.length + 1
            if (blockObj.chainid === parseInt(localStorage.getItem('chainID')) || blockObj.chainid === this.$store.state.chainID) {
                data.tx.map(item => {
                    let txObj = {}
                    txObj.txid = item.txid
                    txObj.transtime = data.time
                    txObj.amount = item.amount
                    txObj.from = item.from
                    txObj.to = item.to
                    if (item.type !== 'certification') {
                        this.TXListDatas.unshift(txObj)
                        this.TXListDatas.pop()
                    }
                    this.blockListDatas.unshift(blockObj)
                    this.blockListDatas.pop()
                })
            }
        },
        websocketOnclose(e) {
            console.log("connection closed (" + e.code + ")");
        },

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

        getTXList() {
            this.tradeTableLoadStatus = 'loading'
            TXList({ pageSize: this.txPageSize, page: this.txCurrentPage, chainid: parseInt(localStorage.getItem('chainID')) }).then(res => {
                if (res.data.length !== 0) {
                    this.TXListDatas = res.data
                    this.tradeTableLoadStatus = 'finished'
                } else {
                    this.tradeTableLoadStatus = 'empty'
                }
                this.txCurrentPage = res.page
            }).catch(err => {
                console.log('load fail:', err)
            })
        },
        getBlockList() {
            this.blockTableLoadStatus = 'loading',
                blockList({ pageSize: this.blockPageSize, page: this.blockCurrentPage, chainid: parseInt(localStorage.getItem('chainID')) }).then(res => {
                    console.log('getNewBlock', res)
                    if (res.data.length !== 0) {
                        this.blockListDatas = res.data
                        this.blockTableLoadStatus = 'finished'
                    } else {
                        this.websock.close();
                        this.blockTableLoadStatus = 'empty'
                    }
                    this.blockCurrentPage = res.page
                }).catch(err => {
                    console.log('load fail:', err)
                })
        },

        drawChart() {
            let myChart = this.$echarts.init(document.getElementById("chart"));
            let mobileChart = this.$echarts.init(document.getElementById("mobile-chart"));
            let optionPC = {
                // tooltip: {
                //     trigger: 'axis',
                //     axisPointer: {
                //         type: 'shadow'
                //     }
                // },
                // grid: {
                //     left: '3%',
                //     right: '4%',
                //     bottom: '3%',
                //     containLabel: true
                // },
                xAxis: [
                    {
                        type: 'category',
                        data: this.xAxis,
                        // axisTick: {
                        //     alignWithLabel: true
                        // }
                    }
                ],
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: this.$t('overview.trade'),
                        type: 'line',
                        // barWidth: '60%',
                        data: this.countChart,
                        symbolSize: 8,
                        itemStyle: {
                                color: '#da251d',
                            },
                        lineStyle: {
                            width: 4, // 线条宽度
                            color: '#da251d',
                            
                            symbol: 'circle',
                        },
                    }
                ]
            }

            let option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        data: this.xAxis,
                        axisTick: {
                            alignWithLabel: true
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name: this.$t('overview.trade'),
                        type: 'line',
                        // barWidth: '60%',
                        data: this.countChart,
                        itemStyle: {
                                color: '#da251d',
                            },
                        lineStyle: {
                            width: 4, // 线条宽度
                            color: '#da251d',
                            symbolSize: 8,
                            symbol: 'circle',
                        },
                    }
                ]
            };

            option && myChart.setOption(option);
            optionPC && mobileChart.setOption(optionPC);

        },

        getAllStatData() {
            allStatistics({
                chainid: localStorage.getItem('chainID')
            }).then(res => {
                console.log(res)
                res.days.map(item => {
                    this.xAxis.push(item.date)
                    this.amountChart.push(item.amount)
                    this.countChart.push(item.count)
                })
                this.overInfo.height = res.height
                this.overInfo.tx_c = res.tx_c
                this.overInfo.amount = res.amount
                this.overInfo.addr_c = res.addr_c
                console.log(this.overInfo)
                this.showOverview = true
                this.drawChart()
            }).catch(err => {
                console.log(err)
            })
        },
        // getChartData(days) {
        //     let params = {
        //         days: days,
        //     };
        //     blockStatistics(params).then(res => {
        //         console.log('blockStatistics', res)
        //         this.ranklistDatas = res
        //         this.legend = res.length
        //         this.xAxis = res.xAxis;
        //         let series = [];
        //         for (let serieIndex = 0; serieIndex < res.series.length; serieIndex++) {
        //             let serie =
        //             {
        //                 name: res.series[serieIndex].name,
        //                 type: "line",
        //                 data: res.series[serieIndex].data,
        //                 smooth: true
        //             }
        //             series.push(serie)
        //         }
        //         this.series = series;
        //         this.drawChart();
        //     })
        // },
    }
}
</script>
<style></style>
