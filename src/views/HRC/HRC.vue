<template>
  <div>
    <div class="mb-2 w-11/12 sm:w-9/12 mr-auto ml-auto">
      <module-title title="HRC20"></module-title>
    </div>
    <div
      class=" mb-4 w-11/12 sm:w-9/12 mr-auto ml-auto rounded-lg shadow-lg border bg-white border-ligthborder dark:bg-black200 dark:border-border100 dark:shadow">
      <hrc-list-table :dataList="hrcListDatas" />
      <div class="">
        <h-pagination></h-pagination>
      </div>
    </div>
  </div>
</template>


<script>

import ModuleTitle from '@/components/public/ModuleTitle'
import HPagination from '@/components/public/HPagination'
import HrcListTable from '@/components/child/HrcListTable'
import { listHRC20 } from '@/request/hrc';
export default {
  components: { HrcListTable, ModuleTitle, HPagination, },
  data() {
    return {
      hrcListDatas: []
    }
  },
  mounted() {
    this.getListHRC20()
  },
  methods: {
    getListHRC20() {
      let params = {};
      listHRC20(params).then(res => {
        console.log(res)
        this.hrcListDatas = res
      });
      console.log('dataList', this.hrcListDatas);
    },
    toDetails(item) {
      console.log('item', item)
      this.$router.push({
        path: "/hrc/details",
        query: {
          address: item.addr,
          decimals: item.decimals,
          name: item.name,
          owner: item.owner,
          symbol: item.symbol,
          totalSupply: item.totalSupply
        }
      })
    }
  }
}
</script>

<style>
.target-item {
  cursor: pointer;
}

.first-item {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.item {
  display: inline-block;
}

.big-item {
  display: inline-block;
  width: 500px;
}

.owner {
  margin-left: 80px;
}

.votes {
  margin-left: 80px;
}

.item-all {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
</style>