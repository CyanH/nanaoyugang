<template>
  <v-drawer direction="left" hasArrow>
    <v-card>
      <v-title title="船员出勤率"></v-title>
      <div class="kaoq">
        <div class="chart_kaoq" ref="chart_kaoq"></div>
      </div>
      <div class="list">
        <div class="top">
          <v-title title="培训记录"></v-title>
          <div class="cont">
            <div class="nav">
              <div>培训名称</div>
              <div>培训类型</div>
              <div>培训时间</div>
            </div>
            <div class="content">
              <vue3-seamless-scroll :list="state.recordList" :step="0.3" :hover="true" :limitScrollNum="6">
                <div class="row" v-for="(item, index) in state.recordList" :key="index">
                  <div>{{ item.name }}</div>
                  <div>{{ item.type }}</div>
                  <div>{{ item.date }}</div>
                </div>
              </vue3-seamless-scroll>
            </div>
          </div>
        </div>
        <div class="bottom">
          <v-title title="船员违规"></v-title>
          <div class="cont">
            <div class="chart" ref="charts"></div>
          </div>
        </div>
      </div>
    </v-card>
  </v-drawer>
</template>

<script setup lang="ts">
import { onMounted, reactive,ref } from 'vue';
import { CountTo } from 'vue3-count-to';
import { Vue3SeamlessScroll } from 'vue3-seamless-scroll';
import * as echarts from 'echarts';
import { newChart } from '../trawler/chart/newChart';
import { kao_q } from '../trawler/chart/kaoq'
const state = reactive({
  recordList: [
    {
      name: '港口卫生',
      type: '日常培训',
      date: '2022-12-21',
    },
    {
      name: '海上大风安全自救',
      type: '安全生产第一课',
      date: '2022-12-24',
    },
    {
      name: '海上大风翻船自救',
      type: '安全生产第一课',
      date: '2022-12-25',
    },
    {
      name: '船员行为规范',
      type: '日常培训',
      date: '2022-12-28',
    },
    {
      name: '开海管理',
      type: '日常培训',
      date: '2022-12-31',
    },
    {
      name: '海上台风来袭',
      type: '安全生产第一课',
      date: '2023-01-03',
    },
    {
      name: '海上船舶机械故障',
      type: '安全生产第一课',
      date: '2023-01-05',
    },
  ],
  ruleList: [
    {
      name: '张结清',
      type: '证书违规',
      date: '2022-12-21',
    },
    {
      name: '张执满',
      type: '证书违规',
      date: '2022-12-24',
    },
    {
      name: '张华',
      type: '行为违规',
      date: '2022-12-25',
    },
    {
      name: '何三珠',
      type: '行为违规',
      date: '2022-12-28',
    },
    {
      name: '张执发',
      type: '证书违规',
      date: '2022-12-31',
    },
    {
      name: '黄正',
      type: '行为违规',
      date: '2023-01-03',
    },
    {
      name: '何伍毅',
      type: '证书违规',
      date: '2023-01-05',
    },
  ],
});
let charts_all: echarts.ECharts;
let charts = ref<HTMLDivElement | null>(null);

let charts_all_kaoq: echarts.ECharts;
let chart_kaoq = ref<HTMLDivElement | null>(null);

onMounted(() => {
  charts_all = echarts.init(charts.value as HTMLDivElement);
  charts_all_kaoq = echarts.init(chart_kaoq.value as HTMLDivElement);
  window.addEventListener('resize', () => {
    charts_all.resize();
    charts_all_kaoq.resize();
  });
  getLook();
})
const getLook = () => {
  newChart(charts_all)
  kao_q(charts_all_kaoq)
}
</script>

<style lang="scss" scoped>
.kaoq{
  height: 30%;
  width: 100%;
  .chart_kaoq{
    width: 100%;
    margin-top: 12px;
    height: calc(100% - 12px);
  }
}
.list {
  // height: calc(100% - 280px);
  height: 66.5%;

  .top,
  .bottom {
    height: calc(50% - 10px);
  }

  .top {
    margin-bottom: 20px;
  }

  .cont {
    height: calc(100% - 50px);
    margin-top: 12px;
    .chart{
      width: 100%;
      height: 100%;
    }
    .nav {
      width: 100%;
      display: flex;
      height: 34px;
      line-height: 34px;
      font-size: 16px;
      background: rgba(19, 39, 165, 0.5);
      color: rgba(255, 255, 255, 0.8);
      text-align: center;

      :nth-child(1) {
        width: 30%;
      }
      :nth-child(2) {
        width: 35%;
      }
      :nth-child(3) {
        width: 35%;
      }
    }
    .content {
      width: 100%;
      height: calc(100% - 34px);
      overflow: hidden;

      .row {
        width: 100%;
        height: 38px;
        align-items: center;
        color: #ffffff;
        font-size: 16px;
        text-align: center;
        display: flex;

        &:nth-child(even) {
          background-color: rgba(19, 39, 165, 0.2);
        }

        :nth-child(1) {
          width: 30%;
        }
        :nth-child(2) {
          width: 35%;
        }
        :nth-child(3) {
          width: 35%;
        }
      }
    }
  }
}
</style>
