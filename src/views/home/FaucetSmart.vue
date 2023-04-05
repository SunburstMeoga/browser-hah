<template>
    <div class="container">
        <div class="title">
            HAH Smart Chain Faucet
        </div>
        <div class="content">
            <div style="margin-top: 15px;">
                <el-input placeholder="Input your HAH Smart Chain address..." v-model="address" class="input-with-select">
                    <!-- <el-select v-model="select" slot="prepend" placeholder="Peggy tokens">
                        <el-option label="Peggy tokens one" value="1"></el-option>
                        <el-option label="Peggy tokens two" value="2"></el-option>
                        <el-option label="Peggy tokens three" value="3"></el-option>
                    </el-select> -->
                    <el-button slot="append" icon="el-icon-search" @click="getTestHAHChain">Give me HAH</el-button>
                </el-input>
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
            select: ''
        }
    },
    methods: {
        getTestHAHChain() {
            testHAHChain({ address: this.address, }).then(res => {
                console.log('领取成功', res)
                this.$message({
                    message: '已发放1HAH到该地址',
                    type: 'success'
                });
            });
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