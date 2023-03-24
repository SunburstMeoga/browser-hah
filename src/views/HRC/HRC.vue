<template>
  <div>
    <div data-v-92014c5c="" data-v-520cdd27="" class="content-child">
      <h1 data-v-92014c5c="" class="h1">
        {{ $t('hrc20.hrc20') }}</h1>
      <h2 data-v-92014c5c="" class="h2"> {{ $t('hrc20.hrc20') }}</h2>
      <div data-v-92014c5c="" class="baseInfoCard">
        <div data-v-92014c5c="" class="header">
          <div data-v-92014c5c="" id="rich_list" class="btns">
            <div data-v-92014c5c="" class="title ontitle">{{ $t('hrc20.hrc20') }}</div>
          </div>

        </div>
        <div data-v-18b505e9="" data-v-92014c5c="">
          <div data-v-18b505e9="" class="full">
            <div data-v-18b505e9="" class="part cp-rich">
              <div data-v-18b505e9="" class="content">
                <div data-v-18b505e9="" class="inner">
                  <div data-v-18b505e9="" class="rich_list">
                    <li data-v-18b505e9="" class="item">
                      <div><b data-v-18b505e9="" class="big-item">{{ $t('dpos.address') }}</b></div>
                      <!-- <div><b data-v-18b505e9="" class="big-item owner">{{ $t('hrc20.owner') }}</b></div> -->
                      <div data-v-18b505e9="" class="votes"><b data-v-18b505e9="">{{ $t('hrc20.symbol') }}</b></div>
                      <div data-v-18b505e9="" class="votes"><b data-v-18b505e9="">{{ $t('hrc20.name') }}</b></div>

                      <div data-v-18b505e9="" class="votes"><b data-v-18b505e9="">{{ $t('hrc20.decimals') }}</b></div>
                      <div data-v-18b505e9="" class="votes"><b data-v-18b505e9="">{{ $t('hrc20.totalSupply') }}</b>
                      </div>

                    </li>
                    <li data-v-18b505e9="" class="item-all target-item" v-for="(item, index) in dataList" :key="index"
                      @click="toDetails(item)">
                      <div class="first-item" style="color: #612591; width: 310px;">{{ item.addr }}</div>
                      <div style="color: #f1b434; padding-right: 110px; width: 230px;">{{ item.name }}</div>
                      <div style="color: #f1b434; padding-right: 136px; width: 230px;"> {{ item.symbol }}</div>
                      <div style="color: #f1b434;  padding-right: 136px; width: 200px;">{{ item.decimals }}</div>
                      <div style="color: #f1b434;">{{ item.totalSupply }}</div>
                    </li>
                  </div>
                </div>
              </div>
            </div>



          </div>
        </div><!---->
      </div>
    </div>
    <!-- <alert-tip v-if="showa" @closeTip="closeTip" :address="address"></alert-tip> -->
  </div>
</template>


<script>
import { listHRC20 } from '@/request/hrc';
export default {
  data() {
    return {
      dataList: []
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
        this.dataList = res
      });
      console.log('dataList', this.dataList);
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