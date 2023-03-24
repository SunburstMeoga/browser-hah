<template>
    <div>

        <div data-v-4d10a54f="" data-v-28830018="" class="content-child" params="[object Object]" query="[object Object]">
            <section data-v-4d10a54f="" class="section">
                <div data-v-4d10a54f="" class="baseInfoCard">
                    <div data-v-4d10a54f="" class="header">
                        <div data-v-4d10a54f="" class="title">{{ $t('Block.blockInfo') }}</div>
                        <a data-v-4d10a54f="" href="/cn/blocklist">
                            <div data-v-4d10a54f="" class="back">
                                <!--                                <div data-v-4d10a54f="" class="backImg"></div>-->
                                <!--                                <div data-v-4d10a54f="">{{$t('Block.returnHome')}}</div>-->
                            </div>
                        </a>
                    </div>
                    <div data-v-4d10a54f="" class="content">
                        <div data-v-4d10a54f="" class="item block">
                            <div data-v-4d10a54f="" class="key">{{ height }}</div>
                            <div data-v-4d10a54f="" class="value">
                                {{ hash }}
                            </div>
                        </div>
                        <div data-v-4d10a54f="" class="item">
                            <div data-v-4d10a54f="" class="key">{{ $t('Block.time') }}</div>
                            <div data-v-4d10a54f="" class="value">{{ timeFormat(time) }}</div>
                        </div>
                        <div data-v-4d10a54f="" class="item">
                            <div data-v-4d10a54f="" class="key">{{ $t('Block.transactions') }}</div>
                            <div data-v-4d10a54f="" class="value">{{ txs }}</div>
                        </div>
                        <div data-v-4d10a54f="" class="item">
                            <div data-v-4d10a54f="" class="key">{{ $t('Block.previousBlock') }}</div>
                            <div data-v-4d10a54f="" class="value">
                                {{ prev_hash
                                }}
                            </div>
                        </div>
                        <div data-v-4d10a54f="" class="item">
                            <div data-v-4d10a54f="" class="key">{{ $t('Block.address') }}</div>
                            <div data-v-4d10a54f="" class="value">{{ reward_address }}</div>
                        </div>
                        <div data-v-4d10a54f="" class="item">
                            <div data-v-4d10a54f="" class="key">{{ $t('Block.reward') }}</div>
                            <div data-v-4d10a54f="" class="value">{{ reward_money }}</div>
                        </div>
                    </div>
                </div>


                <div data-v-1a6f007e="" class="baseInfoCard">
                    <div data-v-1a6f007e="" class="header">
                        <div data-v-1a6f007e="" class="title">{{ $t('Block.tx') }}</div>
                    </div><!---->




                    <div data-v-bfa74ae2="" data-v-1a6f007e="" class="txs_box">
                        <ul data-v-bfa74ae2="" class="tx-ul ">
                            <li data-v-bfa74ae2="" v-for="(item, index) in TxListDatas" :key="index">
                                <div data-v-bfa74ae2="" class="tx_baseinfo">
                                    <div data-v-bfa74ae2="" class="left" @click="toTX(item.txid)">
                                        <div data-v-bfa74ae2="" class="title">{{ $t('Block.hash') }}</div>
                                        {{ item.txid }}
                                    </div>
                                    <div data-v-bfa74ae2="" class="right">
                                        <div data-v-bfa74ae2=""><span data-v-bfa74ae2="" class="title">{{ $t('Block.time')
                                        }}</span>{{ timeFormat(item.transtime) }}
                                        </div>
                                    </div>
                                </div>
                                <div data-v-4a9378aa="" data-v-bfa74ae2="" class="tx">
                                    <div data-v-4a9378aa="" class="tx_curt none">
                                        <div data-v-4a9378aa="" class="input">
                                            <div data-v-4a9378aa="" class="input_addr">Input</div>
                                        </div>
                                        <div data-v-4a9378aa="" class="output">
                                            <div data-v-4a9378aa="" class="output_addr">Output</div>
                                        </div>
                                    </div><!---->
                                    <div data-v-4a9378aa="" class="tx_detail">
                                        <div data-v-4a9378aa="" class="input">
                                            <div data-v-4a9378aa="" class="item start none">
                                                <div data-v-4a9378aa="" class="input_addr">Input</div>
                                            </div>
                                            <div data-v-4a9378aa="" class="item">
                                                <div data-v-4a9378aa="" class="input_addr"><span data-v-4a9378aa=""
                                                        class="hash coinbase"><span data-v-4a9378aa="" class="el-tooltip"
                                                            aria-describedby="el-tooltip-2085" tabindex="0">{{ item.from
                                                            }}</span></span></div>
                                                <div data-v-4a9378aa="" class="input_value">{{ item.amount }}
                                                    {{ virtualCurrencyUnit }}</div>
                                            </div><!---->
                                        </div>
                                        <img data-v-4a9378aa=""
                                            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzBweCIgaGVpZ2h0PSIxOHB4IiB2aWV3Qm94PSIwIDAgMzAgMTgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU1LjIgKDc4MTgxKSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT5GaWxsIDHlpIfku70gMzwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSLpobXpnaIxIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBvcGFjaXR5PSIwLjIwMDAwMDAwMyI+CiAgICAgICAgPGcgaWQ9IuW+heehruiupOS6pOaYkyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTYyNy4wMDAwMDAsIC00MjEuMDAwMDAwKSIgZmlsbD0iIzAwMjJBOSI+CiAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJGaWxsLTHlpIfku70tMyIgcG9pbnRzPSI2NTAuNjMxMjgyIDQyOC4zNjM3NjUgNjI3IDQyOC4zNjM3NjUgNjI3IDQzMS42MzY0NzUgNjUwLjYzMTI4MiA0MzEuNjM2NDc1IDY0NS40MzU2MzIgNDM2LjcwOTE2MSA2NDcuNzgyMTEgNDM5IDY1NyA0MzAuMDAwMTIgNjQ3Ljk0OTc0IDQyMSA2NDUuNjAzMjYyIDQyMy4yOTA4MzkiPjwvcG9seWdvbj4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="
                                            alt="" class="jiantou">
                                        <div data-v-4a9378aa="" class="output">
                                            <div data-v-4a9378aa="" class="item start none">
                                                <div data-v-4a9378aa="" class="output_addr">Output</div>
                                            </div>
                                            <div data-v-4a9378aa="" class="item">
                                                <div data-v-4a9378aa="" class="output_addr"><span data-v-4a9378aa="">{{
                                                    item.to }}</span>
                                                </div>
                                                <div data-v-4a9378aa="" class="output_value">{{ item.amount }}
                                                    {{ virtualCurrencyUnit }}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-v-4a9378aa="" class="bottom-btn">
                                        <div data-v-4a9378aa="" class="left"><!----></div>
                                        <div data-v-4a9378aa="" class="right"><!---->
                                            <div data-v-4a9378aa=""><span data-v-4a9378aa="" class="title">{{
                                                $t('Block.block') }}</span>
                                                <router-link :to="{ name: 'block', query: { hash: item.block_hash } }">{{
                                                    item.block_hash }}</router-link>
                                            </div>
                                            <!---->
                                            <div data-v-4a9378aa=""><span data-v-4a9378aa="" class="title">{{
                                                $t('Block.txFee') }}</span>{{ item.fee }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>



                    <div data-v-7b0e1c95="">
                        <div data-v-5d77fed0="" data-v-7b0e1c95="" class="turn_page">
                            <div data-v-5d77fed0="" class="page_box">
                                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                                    :current-page="pagenum" :page-sizes="[20, 50, 100]" :page-size="pageSize"
                                    layout="total, sizes, prev, pager, next, jumper" :total="total">
                                </el-pagination>
                            </div>
                        </div>
                    </div>


                </div>

            </section>
        </div>

    </div>
</template>

<script>
import { blockInfo, TXList } from '@/request/home'
import { timeFormat } from '@/utils/format'

export default {
    name: "Block",
    data() {
        return {
            param: '',
            height: '',
            hash: '',
            time: '',
            txs: '',
            prev_hash: '',
            reward_address: '',
            reward_money: '',
            TxListDatas: [],
            pageSize: 20,
            pagenum: 1,
            total: 0,
            virtualCurrencyUnit: this.globalString.virtualCurrencyUnit,
        }
    },
    created() {
        this.param = this.$route.params.height
        this.getBlockInfo()

    },
    methods: {
        timeFormat,
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
                block_hash: this.hash,
            };

            TXList(param).then(res => {
                this.TxListDatas = res.data
                this.pagenum = res.pagenum * 1
                this.pageSize = res.pagesize * 1
                this.total = res.total
                console.log('TxListDatas', res)

            });
        },
        getBlockInfo() {
            let params = {
                param: this.param.toString()
            };
            blockInfo(params).then(res => {
                console.log('getBlockInfo', res)
                this.height = res[0].height
                this.hash = res[0].hash
                this.time = res[0].time
                this.txs = res[0].txs
                this.prev_hash = res[0].prev_hash
                this.reward_address = res[0].reward_address
                this.reward_money = res[0].reward_money
                this.getTXList()
            });
        },

        handleSizeChange(newSzie) {
            this.pageSize = newSzie
            this.getList()
        },
        handleCurrentChange(newPage) {
            this.pagenum = newPage
            this.getList()
        },


    },

}


</script>


<style>
@import url("../../assets/css/block.css");
</style>