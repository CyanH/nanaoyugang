<template>
  <div class="flex chart-container">
    <div style="position: relative; height: 100%; flex: 1">
      <div class="center">
        <div class="num">{{ prize }}吨</div>
        <div class="name">渔获上岸总量</div>
      </div>

      <img src="@/assets/image/industrialPark/jscg_q.png" class="circle" />
      <div class="chart" ref="chartEle"></div>
    </div>
    <div class="flex-column">
      <div v-for="item in list" class="flex">
        <span class="tip" :style="{ backgroundColor: item.bgColor }"></span>
        <span class="name">{{ item.name }} {{ item.value }} ({{ item.unit }})</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import * as echarts from 'echarts';
import { loadChart } from '../chart/cgChart';

let prize = ref(9886);
let myChart: echarts.ECharts;
let chartEle = ref<HTMLDivElement | null>(null);

const list = reactive([
  {
    name: '头足类',
    value: 25,
    unit: '%',
    bgColor: '#00DCFD',
  },
  {
    name: '贝壳类',
    value: 33,
    unit: '%',
    bgColor: '#2892FF',
  },
  {
    name: '虾蟹类',
    value: 15,
    unit: '%',
    bgColor: '#28FFAB',
  },
  {
    name: '鱼类',
    value: 27,
    unit: '%',
    bgColor: '#fae150',
  },
]);

onMounted(() => {
  myChart = echarts.init(chartEle.value as HTMLElement);
  window.addEventListener('resize', () => {
    myChart.resize();
  });

  getData();
});

const getData = () => {
  loadChart(myChart, list);
};
</script>

<style lang="scss" scoped>
.chart-container {
  // height: calc(100% - 26vh - 428px);
  height: 100%;

  .center {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 10000;

    .num {
      font-size: 20px;
      color: #00f6ff;
    }

    .name {
      color: #fff;
      padding-top: 0px;
    }
  }

  .circle {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 132px;
    animation: rotation 5s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }

    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }

  .chart {
    height: 100%;
  }

  .flex-column {
    width: 45%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .tip {
      display: inline-block;
      width: 6px;
      height: 6px;
      margin-right: 10px;
    }

    .name {
      font-size: 15px;
      color: #fff;
    }
  }
}
</style>
