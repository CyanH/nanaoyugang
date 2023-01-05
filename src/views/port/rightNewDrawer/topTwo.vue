<template>
  <div class="top">
      <div class="title">
          <div class="left">
              <img src="@/assets/image/card/o2.png" alt="">
              <span class="span">港内安全巡查</span>
          </div>
          <div class="right">
              <count-to :startVal="0" :endVal="12" :duration="3000" class="num"></count-to>
              <span class="dw">次</span>
          </div>
      </div>
      <div class="con">
          <div class="nav">
              <div>序号</div>
              <div>类型</div>
              <div>报警原因</div>
              <div>时间</div>
          </div>
          <div class="content">
              <vue3-seamless-scroll :list="state.projectList" :step="0.3" :hover="true" :limitScrollNum="11">
                  <div class="row" v-for="(item, index) in state.projectList" :key="index">
                      <div>{{ index + 1 }}</div>
                      <el-tooltip placement="top">
                          <template #content>{{ item.lx }}</template>
                          <span>{{ item.lx }}</span>
                      </el-tooltip>
                      <el-tooltip placement="top">
                          <template #content>{{ item.title }}</template>
                          <span>{{ item.title }}</span>
                      </el-tooltip>
                      <el-tooltip placement="top">
                          <template #content>{{ item.date }}</template>
                          <span>{{ parseTime(item.date, '{y}-{m}-{d}') }}</span>
                      </el-tooltip>
                  </div>
              </vue3-seamless-scroll>
          </div>
      </div>
  </div>
</template>

<script setup lang="ts">
import { CountTo } from 'vue3-count-to';
import * as echarts from 'echarts';
import { parseTime } from '@/utils/parseTime';
import { onMounted, ref, reactive } from 'vue';
import { Vue3SeamlessScroll } from 'vue3-seamless-scroll';
// 项目、资金折线图

const state = reactive({
  list: [
    {
      title: '今日预约游客量',
      money: 0,
      bl: 0,
      color: '#5782FF',
    },
    {
      title: '今日游船使用量',
      money: 0,
      bl: 0,
      color: '#FFB852',
    },
  ] as any,
  projectList: [
      {
          title: '港内人员打架 ',
          date: '2022-09-21 16:06:02',
          lx: '港内安全'
      },
      {
          title: '明火作业',
          date: '2022-09-21 16:06:02',
          lx: '港内安全'
      },
      {
          title: '港内车辆相撞',
          date: '2022-09-21 16:06:02',
          lx: '港内安全'
      },
      {
          title: '港内人员打架 ',
          date: '2022-09-21 16:06:02',
          lx: '港内安全'
      },
      {
          title: '明火作业',
          date: '2022-09-21 16:06:02',
          lx: '港内安全'
      },
      {
          title: '港内车辆相撞',
          date: '2022-09-21 16:06:02',
          lx: '港内安全'
      },
      {
          title: '港内人员打架',
          date: '2022-09-21 16:06:02',
          lx: '港内安全'
      },
      {
          title: '明火作业',
          date: '2022-09-21 16:06:02',
          lx: '港内安全'
      },
      {
          title: '港内车辆相撞',
          date: '2022-09-21 16:06:02',
          lx: '港内安全'
      },
      {
          title: '港内人员打架',
          date: '2022-09-21 16:06:02',
          lx: '港内安全'
      },
      {
          title: '明火作业',
          date: '2022-09-21 16:06:02',
          lx: '港内安全'
      },
      {
          title: '港内车辆相撞',
          date: '2022-09-21 16:06:02',
          lx: '港内安全'
      },
  ] as any
});

</script>

<style lang="scss" scoped>
.top{
  width: 100%;
  height: 35%;
  .title{
      height: 40px;
      margin-top: 16px;
      // background-color: yellow;
      display: flex;
      .left{
          font-size: 20px;
          // width: 180px;
          display: flex;
          .span{
              margin-right: 4px;
              color: #e3f0ff;
              font-size: 18px;
              line-height: 1;
              margin-left: -20px;
              padding-top: 15px;
          }
      }
      .right{
          flex: 1;
          .num{
              font-size: 30px;
              padding-right: 5px;
              color: #0bf;
          }
      }
  }
  .con{
      height: calc(100% - 66px);
      margin-top: 10px;
      box-sizing: border-box;
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
              width: 10%;
          }
          :nth-child(2) {
              width: 34%;
          }
          :nth-child(3) {
              width: 33%;
          }
          :nth-child(4) {
              width: 23%;
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
                  width: 10%;
              }
              :nth-child(2) {
                  width: 34%;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  overflow: hidden;
              }
              :nth-child(3) {
                  width: 33%;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  overflow: hidden;
              }
              :nth-child(4) {
                  width: 23%;
              }
          }

          .wkg {
          color: #ff8251;
          }

          .sgz {
          color: #00f6ff;
          }

          .ywg {
          color: #22ff51;
          }
      }
  }
}
</style>
