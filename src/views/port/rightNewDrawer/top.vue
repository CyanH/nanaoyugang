<template>
  <div class="top">
    <div class="one">
      <div class="title">
        <div class="left">
          <img src="@/assets/image/card/o1.png" alt="" />
          <span class="span">水产交易</span>
        </div>
        <div class="right">
          <count-to :startVal="0" :endVal="8" :duration="3000" class="num"></count-to>
          <span class="dw">万元</span>
        </div>
      </div>
      <div class="echat">
        <div class="chart" ref="chartEle_all"></div>
      </div>
    </div>
    <div class="one two">
      <div class="echat1">
        <product-middle></product-middle>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts';
import { onMounted, ref, onUnmounted } from 'vue';
import productMiddle from './productMiddle.vue';
import { CountTo } from 'vue3-count-to';
// 项目、资金折线图
import { loadChart } from '../chart/top';

// 项目、资金折线图
let myChar_all: echarts.ECharts;
let chartEle_all = ref<HTMLDivElement | null>(null);

onMounted(() => {
  myChar_all = echarts.init(chartEle_all.value as HTMLDivElement);
  window.addEventListener('resize', () => {
    myChar_all.resize();
  });
  getData();
});
onUnmounted(() => {
  window.addEventListener('resize', () => {
    myChar_all.resize();
  });
});
const getData = () => {
  let data = [76000, 72658, 75555, 87777, 84444, 71111, 80222];
  let date = ['1-01', '1-02', '1-03', '1-04', '1-05', '1-06', '1-07'];
  loadChart(myChar_all, data, date, '水产', '元');
};
</script>

<style lang="scss" scoped>
.top {
  width: 100%;
  height: calc(55% - 16px);
  margin-bottom: 16px;
  .one {
    height: 55%;
    .title {
      height: 40px;
      padding-top: 16px;
      // background-color: yellow;
      display: flex;
      .left {
        font-size: 20px;
        // width: 180px;
        display: flex;
        .span {
          margin-right: 4px;
          color: #e3f0ff;
          font-size: 18px;
          line-height: 1;
          margin-left: -20px;
          padding-top: 15px;
        }
      }
      .right {
        flex: 1;
        .num {
          font-size: 30px;
          padding-right: 5px;
          color: #0bf;
        }
      }
    }
    .echat {
      width: 100%;
      height: calc(100% - 56px);
      .chart {
        height: 100%;
        width: 100%;
      }
    }
    .echat1 {
      width: 100%;
      height: 100%;
      .chart {
        height: 100%;
        width: 100%;
      }
    }
  }
  .two {
    height: 45%;
  }
}
</style>
