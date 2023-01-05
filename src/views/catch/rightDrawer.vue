<template>
  <v-drawer direction="right" hasArrow>
    <v-card>
      <div class="top">
        <v-title title="供需物流"></v-title>
        <div class="flex-between wrapper">
          <div>
            <div class="num">1210</div>
            <div class="label">供货统计/吨</div>
          </div>
          <div>
            <div class="num">820</div>
            <div class="label">求购统计/吨</div>
          </div>
          <div>
            <div class="num">121</div>
            <div class="label">车辆需求统计</div>
          </div>
          <div>
            <div class="num">107</div>
            <div class="label">车辆供应统计</div>
          </div>
        </div>
      </div>

      <div class="bottom">
        <div class="bt-top">
          <v-title title="渔获电子交易市场统计"></v-title>

          <div class="chart" ref="chart_one"></div>
        </div>

        <div class="bt-bottom">
          <v-title title="价格走势分析"></v-title>

          <div class="chart" ref="chart_two"></div>
        </div>
      </div>
    </v-card>
  </v-drawer>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import * as echarts from 'echarts';
import { loadChart } from './chart/shangan';
let myChar_one: echarts.ECharts;
let chart_one = ref<HTMLDivElement | null>(null);
let myChar_two: echarts.ECharts;
let chart_two = ref<HTMLDivElement | null>(null);
onMounted(() => {
  myChar_one = echarts.init(chart_one.value as HTMLDivElement);
  myChar_two = echarts.init(chart_two.value as HTMLDivElement);
  window.addEventListener('resize', () => {
    myChar_one.resize();
    myChar_two.resize();
  });
  getData();
  new_getData();
});
onUnmounted(() => {
  window.removeEventListener('resize', () => {
    myChar_one.resize();
    myChar_two.resize();
  });
});
const getData = () => {
  let data_one1 = [50, 30, 20, 160, 60, 70, 100];
  let data_one2 = [70, 50, 20, 50, 60, 120, 170];
  let data_one3 = [40, 90, 50, 110, 70, 68, 210];
  let date = ['1-01', '1-02', '1-03', '1-04', '1-05', '1-06', '1-07'];
  let new_datas = [];
  let new_data = [
    {
      name: '莲花山码头交易市场',
      color: '#ffd600',
      o1_color: 'rgba(255,214,0,1)',
      o2_color: 'rgba(255,214,0,0)',
      data: data_one1,
    },
    {
      name: '黄沙水产',
      color: '#37f097',
      o1_color: 'rgba(55,240,151,1)',
      o2_color: 'rgba(55,240,151,0)',
      data: data_one2,
    },
    {
      name: '五湖四海水产世界',
      color: '#ff8c00',
      o1_color: 'rgba(255,140,0,1)',
      o2_color: 'rgba(255,140,0,0)',
      data: data_one3,
    },
  ];
  for (let i = 0; i < new_data.length; i++) {
    new_datas.push({
      name: new_data[i].name,
      type: 'line',
      smooth: true, //是否平滑
      showAllSymbol: true,
      symbol: 'circle',
      symbolSize: 6,
      lineStyle: {
        normal: {
          color: new_data[i].color,
        },
      },
      itemStyle: {
        color: new_data[i].color,
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: new_data[i].o1_color,
              },
              {
                offset: 1,
                color: new_data[i].o2_color,
              },
            ],
            false
          ),
        },
      },
      data: new_data[i].data,
    });
  }
  loadChart(myChar_one, new_datas, date, '万元');
};
const new_getData = () => {
  let data_one1 = [50, 30, 20, 160, 60, 70, 100];
  let data_one2 = [70, 50, 20, 50, 60, 120, 170];
  let data_one3 = [40, 90, 50, 110, 70, 68, 210];
  let date = ['1-01', '1-02', '1-03', '1-04', '1-05', '1-06', '1-07'];
  let new_datas = [];
  let new_data = [
    {
      name: '扇贝',
      color: '#1ed5ff',
      o1_color: 'rgba(30,213,255,1)',
      o2_color: 'rgba(30,213,255,0)',
      data: data_one2,
    },
    {
      name: '花鲢',
      color: '#ffd700',
      o1_color: 'rgba(255,215,0,1)',
      o2_color: 'rgba(255,215,0,0)',
      data: data_one3,
    },
    {
      name: '海蛎子',
      color: '#ff8c00',
      o1_color: 'rgba(255,140,0,1)',
      o2_color: 'rgba(255,140,0,0)',
      data: data_one1,
    },
  ];
  for (let i = 0; i < new_data.length; i++) {
    new_datas.push({
      name: new_data[i].name,
      type: 'line',
      smooth: true, //是否平滑
      showAllSymbol: true,
      symbol: 'circle',
      symbolSize: 6,
      lineStyle: {
        normal: {
          color: new_data[i].color,
        },
      },
      itemStyle: {
        color: new_data[i].color,
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: new_data[i].o1_color,
              },
              {
                offset: 1,
                color: new_data[i].o2_color,
              },
            ],
            false
          ),
        },
      },
      data: new_data[i].data,
    });
  }
  loadChart(myChar_two, new_datas, date, '千克/元');
};
</script>

<style lang="scss" scoped>
.top {
  padding-bottom: 20px;
  .wrapper {
    margin-top: 20px;
    .num {
      width: 60px;
      height: 60px;
      font-size: 16px;
      background: url('@/assets/image/catch/icon-gx.png') center no-repeat;
      background-size: 100% 100%;
      text-align: center;
      line-height: 60px;
      margin: auto;
    }

    .label {
      margin-top: 10px;
      font-size: 14px;
    }
  }
}

.bottom {
  height: calc(100% - 164px);

  .bt-top,
  .bt-bottom {
    height: calc(50% - 10px);
  }

  .bt-top {
    margin-bottom: 20px;
  }

  .chart {
    height: calc(100% - 55px);
    margin-top: 17px;
  }
}
</style>
