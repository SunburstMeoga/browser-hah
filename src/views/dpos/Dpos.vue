<template>
    <div>
        <div class="mb-2 w-11/12 sm:w-9/12 mr-auto ml-auto">
            <module-title title="dops"></module-title>
        </div>
        <div
            class=" mb-4 w-11/12 sm:w-9/12 mr-auto ml-auto rounded-lg shadow-lg border bg-white border-ligthborder dark:bg-black200 dark:border-border100 dark:shadow">
            <dpos-list-table :dataList="dposListDatas" />
            <div class="">
                <h-pagination></h-pagination>
            </div>
        </div>
    </div>
</template>


<script>
import ModuleTitle from '@/components/public/ModuleTitle'
import HPagination from '@/components/public/HPagination'
import DposListTable from '@/components/child/DposListTable'
import { listDelegate } from '@/request/dpos'
export default {
    components: { DposListTable, ModuleTitle, HPagination, },
    name: "dpos",
    data() {
        return {
            dposListDatas: [],
            showa: false,
            address: ''
        }
    },
    created() {
        this.getListDelegate()
    },
    methods: {
        getListDelegate() {
            let params = {
                page: this.pagenum,
                pagesize: this.pageSize
            };

            listDelegate(params).then(res => {
                this.dposListDatas = res
                console.log(res)
            });
        },
        closeTip() {
            this.showa = false
        },
        openTip(address) {
            this.address = address;
            this.showa = true;
            console.log(this.showa);
        },
        handleWindow(dposAddress) {
            this.$router.push({
                path: '/dpos/details/' + dposAddress
            })
        }


    },
}
</script>

<style>
h1,
h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {}

a {
    color: #2d8cf0;
}
</style>