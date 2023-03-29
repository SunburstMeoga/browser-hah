<template>
    <!-- <div>

        <div class="content-child" data-v-02b3c3b7>
            <h2 class="h2">
                {{ $t('Index.h2') }}</h2>
            <div class="p-home">
                <div class="page-network">
                    <div class="count_down"></div>
                    <div>
                        <div class="latest_block item1" data-v-135e9942>
                            <div id="chart" style="width:95%;height:400px;"></div>
                        </div>
                        <div class="latest_block item1" data-v-135e9942>
                            <div class="header" data-v-135e9942>
                                <div class="title" data-v-135e9942>
                                    <h2 class="txt" data-v-135e9942>{{ $t('BlockList.newBlock') }}</h2>
                                </div>
                            </div>
                            <div data-v-ce118d7e="" data-v-135e9942="">
                                <div data-v-ce118d7e="" class="block_list">
                                    <ul data-v-ce118d7e="" class="item title">
                                        <li data-v-ce118d7e="" class="inner_item miner">{{ $t('BlockList.height') }}
                                        </li>
                                        <li data-v-ce118d7e="" class="inner_item miner">{{ $t('BlockList.address') }}
                                        </li>
                                        <li data-v-ce118d7e="" class="inner_item prize">{{ $t('BlockList.reward') }}
                                        </li>
                                        <li data-v-ce118d7e="" class="inner_item miner">{{ $t('BlockList.amount') }}
                                        </li>
                                        <li data-v-ce118d7e="" class="inner_item miner">
                                            {{ $t('BlockList.previousBlock') }}</li>
                                        <li data-v-ce118d7e="" class="inner_item time">{{ $t('BlockList.time') }}</li>
                                    </ul>
                                    <span data-v-ce118d7e="">
                                        <ul data-v-ce118d7e="" class="item content" v-for="(item, index) in blockListDatas"
                                            :key="index">
                                            <li data-v-ce118d7e="" class="inner_item height" @click="toHeight(item.height)">
                                                {{ item.height }}
                                            </li>

                                            <li data-v-ce118d7e="" class="inner_item miner"
                                                @click="toAddress(item.reward_address)">

                                                {{ item.reward_address
                                                }}
                                            </li>
                                            <li data-v-ce118d7e="" class="inner_item prize">{{ item.reward_money }}</li>
                                            <li data-v-ce118d7e="" class="inner_item miner">
                                                <a data-v-ce118d7e="" href="javascript:void(0)" class="el-tooltip"
                                                    aria-describedby="el-tooltip-6541" tabindex="0">{{ item.txs }}</a>
                                            </li>
                                            <li data-v-ce118d7e="" class="inner_item miner">
                                                <a data-v-ce118d7e="" href="javascript:void(0)" class="el-tooltip"
                                                    aria-describedby="el-tooltip-6541" tabindex="0">{{ item.prev_hash
                                                    }}</a>
                                            </li>
                                            <li data-v-ce118d7e="" class="inner_item time">
                                                <div data-v-ce118d7e="">
                                                    <span class="el-tooltip" aria-describedby="el-tooltip-5279"
                                                        tabindex="0">{{ timeFormat(item.time) }}</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </span>
                                </div>
                                <div data-v-ce118d7e="" class="mobileList">
                                    <div data-v-ce118d7e="" class="items" v-for="(item, index) in blockListDatas"
                                        :key="index">
                                        <div data-v-ce118d7e="" class="item">
                                            {{ $t('BlockList.height') }}
                                            <div data-v-ce118d7e="" class="value" @click="toHeight(item.height)">
                                                {{ item.height }}
                                            </div>
                                        </div>
                                        <div data-v-ce118d7e="" class="item">
                                            <div data-v-ce118d7e="" class="key">{{ $t('BlockList.address') }}</div>
                                            <div data-v-ce118d7e="" class="value"><a data-v-ce118d7e=""
                                                    href="javascript:void(0)">{{ item.reward_address }}</a>
                                            </div>
                                        </div>
                                        <div data-v-ce118d7e="" class="item">
                                            <div data-v-ce118d7e="" class="key">
                                                {{ $t('BlockList.reward') }}
                                            </div>
                                            <div data-v-ce118d7e="" class="value">{{ item.reward_money }}</div>
                                        </div>
                                        <div data-v-ce118d7e="" class="item">
                                            <div data-v-ce118d7e="" class="key">{{ $t('BlockList.amount') }}</div>
                                            <div data-v-ce118d7e="" class="value"><a data-v-ce118d7e=""
                                                    href="javascript:void(0)">{{ item.txs }}</a>
                                            </div>
                                        </div>
                                        <div data-v-ce118d7e="" class="item">
                                            <div data-v-ce118d7e="" class="key">{{ $t('BlockList.previousBlock') }}
                                            </div>
                                            <div data-v-ce118d7e="" class="value"><a data-v-ce118d7e=""
                                                    href="javascript:void(0)">{{ item.prev_hash }}</a>
                                            </div>
                                        </div>
                                        <div data-v-ce118d7e="" class="item">
                                            <div data-v-ce118d7e="" class="key">{{ $t('BlockList.time') }}</div>
                                            <div data-v-ce118d7e="" class="value">
                                                <div data-v-ce118d7e=""><span class="el-tooltip"
                                                        aria-describedby="el-tooltip-4340" tabindex="0">{{
                                                            timeFormat(item.time)
                                                        }}</span></div>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                            </div>
                            <a href="blocklist" class="more" data-v-135e9942>
                                <div class="more" data-v-135e9942>
                                    <div data-v-135e9942>{{ $t('common.more') }} >></div>
                                </div>
                            </a>
                        </div>
                    </div>




                    <div class="pending_wrap" data-v-a7eb4120>
                        <div class="header" data-v-a7eb4120>
                            <div class="title" data-v-a7eb4120>
                                <h2 class="txt" data-v-a7eb4120>{{ $t('Pending.tx') }}</h2>
                            </div>
                        </div>
                        <div data-v-603f4bbb="" data-v-a7eb4120="">
                            <div data-v-603f4bbb="" class="pending_list pc btc">
                                <ul data-v-603f4bbb="" class="item title">
                                    <li data-v-603f4bbb="" class="inner_item hash">{{ $t('Pending.hash') }}</li>
                                    <li data-v-603f4bbb="" class="inner_item time">{{ $t('Pending.time') }}</li>
                                    <li data-v-603f4bbb="" class="inner_item fee">{{ $t('Pending.amount') }}</li>
                                    <li data-v-603f4bbb="" class="inner_item from">{{ $t('Pending.from') }}</li>
                                    <li data-v-603f4bbb="" class="inner_item to">{{ $t('Pending.to') }}</li>
                                </ul>

                                <ul data-v-603f4bbb="" class="item content" v-for="(item, index) in TXListDatas"
                                    :key="index">
                                    <li data-v-603f4bbb="" class="inner_item hash" @click="toTX(item.txid)">
                                        {{ item.txid }}
                                    </li>
                                    <li data-v-603f4bbb="" class="inner_item time"><span data-v-603f4bbb=""
                                            class="el-tooltip" aria-describedby="el-tooltip-9935" tabindex="0">{{
                                                timeFormat(item.transtime)
                                            }}</span></li>
                                    <li data-v-603f4bbb="" class="inner_item fee">{{ item.amount }}</li>
                                    <li data-v-603f4bbb="" class="inner_item from"><span data-v-603f4bbb="">{{
                                        item.from
                                    }}</span>
                                    </li>
                                    <li data-v-603f4bbb="" class="inner_item to"><span data-v-603f4bbb="">{{
                                        item.to
                                    }}</span>
                                    </li>
                                </ul>

                            </div>
                            <div data-v-603f4bbb="" class="mobileList">
                                <ul data-v-603f4bbb="" class="items" v-for="(item, index) in TXListDatas" :key="index">
                                    <div data-v-603f4bbb="" class="item">
                                        <div data-v-603f4bbb="" class="key">{{ $t('Pending.hash') }}</div>
                                        <div data-v-603f4bbb="" class="value" @click="toTX(item.txid)">
                                            {{ item.txid }}
                                        </div>
                                    </div>
                                    <div data-v-603f4bbb="" class="item">
                                        <div data-v-603f4bbb="" class="key">{{ $t('Pending.time') }}</div>
                                        <div data-v-603f4bbb="" class="value"><span data-v-603f4bbb="" class="el-tooltip"
                                                aria-describedby="el-tooltip-6781" tabindex="0">{{
                                                    timeFormat(item.transtime)
                                                }}</span></div>
                                    </div>
                                    <div data-v-603f4bbb="" class="item">
                                        <div data-v-603f4bbb="" class="key">{{ $t('Pending.amount') }}</div>
                                        <div data-v-603f4bbb="" class="value">
                                            {{ item.amount }}
                                        </div>
                                    </div>
                                    <div data-v-603f4bbb="" class="item">
                                        <div data-v-603f4bbb="" class="key">{{ $t('Pending.from') }}</div>
                                        <div data-v-603f4bbb="" class="value"><span data-v-603f4bbb="">{{
                                            item.from
                                        }}</span>
                                        </div>
                                    </div>
                                    <div data-v-603f4bbb="" class="item">
                                        <div data-v-603f4bbb="" class="key">{{ $t('Pending.to') }}</div>
                                        <div data-v-603f4bbb="" class="value"><span data-v-603f4bbb="">{{ item.to
                                        }}</span>
                                        </div>
                                    </div>
                                </ul>
                            </div>

                        </div>

                        <div class="more" data-v-a7eb4120>
                            <a href="pending" class="more" data-v-135e9942>
                                <div class="more" data-v-135e9942>
                                    <div data-v-135e9942>{{ $t('common.more') }} >></div>
                                </div>
                            </a>
                        </div>
                    </div>


                </div>

            </div>
        </div>
        <div data-zone="C-10160c9c251398bf842" class="coinzilla" data-v-02b3c3b7></div>
    </div> -->
    <div>
        <div class="mb-2 w-11/12 mr-auto ml-auto">
            <module-title :title="$t('Block.blockStatistics')"></module-title>
        </div>
        <div
            class="w-11/12 mr-auto ml-auto rounded-lg h-auto pt-4 flex justify-center items-center shadow-lg mb-4 border bg-white border-ligthborder dark:bg-black200 dark:border-border100 dark:shadow">
            <div id="chart" style="width: 500px; height: 300px;"></div>
        </div>
        <div class="mb-2 w-11/12 mr-auto ml-auto">
            <module-title :title="$t('BlockList.newBlock')"></module-title>
        </div>
        <div
            class=" mb-4 w-11/12 mr-auto ml-auto rounded-lg shadow-lg border bg-white border-ligthborder dark:bg-black200 dark:border-border100 dark:shadow">
            <new-block-table :dataList="blockListDatas" />
            <div class="">
                <h-pagination></h-pagination>
            </div>
        </div>
        <div class="mb-2 w-11/12 mr-auto ml-auto">
            <module-title :title="$t('Pending.tx')"></module-title>
        </div>
        <div
            class="mb-4 w-11/12 mr-auto ml-auto rounded-lg shadow-lg border bg-white border-ligthborder dark:bg-black200 dark:border-border100 dark:shadow">
            <trade-table :dataList="TXListDatas" />
            <div class="">
                <h-pagination></h-pagination>
            </div>
        </div>
    </div>
</template>

<script>
import ModuleTitle from '@/components/public/ModuleTitle'
import NewBlockTable from '@/components/child/NewBlockTable'
import TradeTable from '@/components/child/TradeTable'
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
        toTX(txid) {
            this.$router.push({
                path: '/tx/' + txid
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





