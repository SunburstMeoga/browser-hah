<template>
    <!-- <div class="container">
        <div class="title">
            {{ $t('faucetSmart.title') }}
        </div>
        <div class="content">
            <div style="margin-top: 15px;">
                <el-input placeholder="Input your HAH Smart Chain address..." v-model="address" class="input-with-select">
                   
                    <el-button slot="append" icon="el-icon-search" @click="getTestHAHChain">
                        {{ $t('faucetSmart.button') }}
                    </el-button>
                </el-input>
            </div>
        </div>
    </div> -->
    <div class="w-11/12 mr-auto ml-auto sm:mb-4 sm:w-9/12 mt-10 h-64">
        <div>
            <div class="sm:flex justify-start items-center">
                <div
                    class="rounded-md mb-5 overflow-hidden h-8 sm:mb-0 sm:w-2/3 border border-ligthborder dark:text-white200 dark:bg-black200 dark:border-border100">
                    <input class="border-none w-full h-8  dark:text-white200 dark:bg-black200 dark:border-border100"
                        type="text">
                </div>
                <div @click="getTestHAHChain"
                    class="rounded-md border sm:px-4 sm:ml-4 cursor-pointer text-sm border-ligthborder h-8 flex justify-center items-center dark:text-white200 dark:bg-black200 dark:border-border100">
                    <div v-show="loadStatus === ''">
                        {{ $t('faucetSmart.button') }}
                    </div>
                    <div v-show="loadStatus === 'loading'" class="flex justify-center item-center">
                        <div class="icon iconfont icon-loading1 animate-spin"></div>
                        <div class="pl-2">Loading</div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import { testHAHChain } from '@/request/home'
export default {
    data() {
        return {
            address: '',
            loadStatus: ''
        }
    },
    methods: {
        getTestHAHChain() {
            this.loadStatus = 'loading'
            testHAHChain({ address: this.address, }).then(res => {
                console.log('领取成功', res)
                this.loadStatus = ''

                this.$message({
                    message: '已发放1HAH到该地址',
                    type: 'success'
                });
            }).catch(err => {
                this.loadStatus = ''
                this.$message({
                    message: '',
                    type: 'fail'
                });
            })
        },
    }
}
</script>

<style scoped>
.container {
    width: 80%;
    margin: 0 auto;
}

.title {
    margin: 0 auto;
    font-size: 24px;
    font-weight: 600;
}

.content {
    margin-bottom: 40px;
}
</style>