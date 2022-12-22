<template>
    <div class="container">
        <div class="details-content">
            <div class="content-title">Overview</div>
            <div class="content-item">Age: {{ dataDetails.age }}</div>
            <div class="content-item">Contractaddr: {{ dataDetails.contractaddr }}</div>
            <div class="content-item">Fromaddr: {{ dataDetails.fromaddr }}</div>
            <div class="content-item">id: {{ dataDetails.id }}</div>

        </div>
        <div class="details-content">
            <div class="content-title">Profile Summary</div>
            <div class="content-item">Methodid: {{ dataDetails.methodid }}</div>
            <div class="content-item">Quantity: {{ dataDetails.quantity }}</div>
            <div class="content-item">Toaddr: {{ dataDetails.toaddr }}</div>
            <div class="content-item">txHash: {{ dataDetails.txHash }}</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dataList: [],
            dataDetails: {},
            address: ''
        }
    },
    created() {
        this.address = this.$route.query.address

    },
    mounted() {
        this.getList()
    },
    methods: {
        getList() {
            let params = {
                address: this.address
            };
            this.$api.detailsData(params).then(res => {
                console.log(res)
                this.dataDetails = res
            });
            console.log('dataList', this.dataList);
        },
    }
}
</script>

<style scoped>
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