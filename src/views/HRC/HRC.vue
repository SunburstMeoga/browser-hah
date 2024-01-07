<template>
  <div>
    <div class="mb-2 w-11/12 sm:w-9/12 mr-auto ml-auto">
      <module-title title="HRC20" :total="totalHRC20"></module-title>
    </div>
    <div
      class=" mb-4 w-11/12 sm:w-9/12 mr-auto ml-auto rounded-lg shadow-lg border bg-white border-ligthborder dark:bg-black200 dark:border-border100 dark:shadow">
      <hrc-list-table :dataList="hrcListDatas" :loadStatus="hrcListLoadStatus" />
      <div class="">
        <h-pagination @changePageSize="toHRCFirstPage" @toFirstPage="toHRCFirstPage" @toPrePage="toHRCPrePage"
          @toNextPage="toHRCNextPage" @toLastPage="toHRCLastPage" :currentPage="hrcCurrentPage" :totalPage="totalPage"
          @toTargetPage="toTradeTargetPage"></h-pagination>
      </div>
    </div>
  </div>
</template>


<script>

import ModuleTitle from '@/components/public/ModuleTitle'
import HPagination from '@/components/public/HPagination'
import HrcListTable from '@/components/child/HrcListTable'
import { listHRC20 } from '@/request/hrc';
import { numberFormat } from '../../utils/format';
export default {
  components: { HrcListTable, ModuleTitle, HPagination, },
  data() {
    return {
      hrcListDatas: [],
      hrcListLoadStatus: 'loading',
      hrcPageSize: 10,
      hrcCurrentPage: 1,
      totalHRC20: 0,
      totalPage: 1
    }
  },
  mounted() {
    this.getListHRC20()
  },
  methods: {
    numberFormat,
    getListHRC20() {
      this.hrcListLoadStatus = 'loading'
      listHRC20({ pageSize: this.hrcPageSize, page: this.hrcCurrentPage, chainid: parseInt(localStorage.getItem('chainID')) }).then(res => {
        console.log(res)
        if (res.data.length !== 0) {
          this.hrcListDatas = res.data
          this.hrcListLoadStatus = 'finished'
        } else {
          this.hrcListLoadStatus = 'empty'
        }
        // this.totalHRC20 = this.$t('moduleTitle.totalContract', { count: numberFormat(res.total) })
        this.totalHRC20 = res.total
        this.totalPage = res.totalPage
        this.hrcCurrentPage = res.page

      });
      console.log('dataList', this.hrcListDatas);
    },

    toHRCFirstPage(selectedPageSize) {
      console.log('第一页')
      this.hrcPageSize = selectedPageSize
      this.hrcCurrentPage = 1
      this.hrcListDatas = []
      this.getListHRC20()
    },
    toHRCPrePage(selectedPageSize) {
      if (this.hrcCurrentPage === 1) {
        return
      }
      this.hrcPageSize = selectedPageSize
      this.hrcCurrentPage = this.hrcCurrentPage - 1
      this.hrcListDatas = []
      this.getListHRC20()
    },
    toHRCNextPage(selectedPageSize) {
      this.hrcPageSize = selectedPageSize
      this.hrcCurrentPage = this.hrcCurrentPage + 1
      this.hrcListDatas = []
      this.getListHRC20()
    },
    toHRCLastPage(selectedPageSize) {
      console.log(this.hrcCurrentPage, this.totalPage)
      if (this.hrcCurrentPage >= this.totalPage) {
        return
      }
      this.hrcPageSize = selectedPageSize
      this.hrcCurrentPage = this.totalPage
      this.hrcListDatas = []
      this.getListHRC20()
    },
    toTradeTargetPage(selectedPageSize, targetPage) {
      console.log(targetPage)
      if (targetPage <= 0) {
        return
      }
      this.hrcPageSize = selectedPageSize
      this.hrcCurrentPage = targetPage
      this.hrcListDatas = []
      this.getListHRC20()
    },
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