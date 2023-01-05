<template>
  <div class="top">
    <div class="title">
      <div class="left">
        <img src="@/assets/image/card/o2.png" alt="" />
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
        <div>报警原因</div>
        <div>报警时间</div>
      </div>
      <div class="content">
        <vue3-seamless-scroll :list="state.projectList" :step="0.3" :hover="true" :limitScrollNum="11">
          <div class="row" v-for="(item, index) in state.projectList" :key="index">
            <div>{{ index + 1 }}</div>
            <div>{{ item.title }}</div>
            <div>{{ item.date }}</div>
          </div>
        </vue3-seamless-scroll>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CountTo } from 'vue3-count-to';
import { reactive } from 'vue';
import { Vue3SeamlessScroll } from 'vue3-seamless-scroll';
// 项目、资金折线图

const state = reactive({
  projectList: [
    {
      title: '港内人员打架 ',
      date: '2022-12-21 08:06:02',
      lx: '港内安全',
    },
    {
      title: '明火作业',
      date: '2022-12-21 16:06:02',
      lx: '港内安全',
    },
    {
      title: '港内车辆相撞',
      date: '2022-12-23 15:06:02',
      lx: '港内安全',
    },
    {
      title: '港内人员打架 ',
      date: '2022-12-24 11:06:02',
      lx: '港内安全',
    },
    {
      title: '明火作业',
      date: '2022-12-25 08:06:02',
      lx: '港内安全',
    },
    {
      title: '港内车辆相撞',
      date: '2022-12-26 16:06:02',
      lx: '港内安全',
    },
    {
      title: '港内人员打架',
      date: '2022-12-27 16:06:02',
      lx: '港内安全',
    },
    {
      title: '明火作业',
      date: '2022-12-27 18:06:02',
      lx: '港内安全',
    },
    {
      title: '港内车辆相撞',
      date: '2022-12-28 06:06:02',
      lx: '港内安全',
    },
    {
      title: '港内人员打架',
      date: '2022-12-31 10:06:02',
      lx: '港内安全',
    },
    {
      title: '明火作业',
      date: '2023-01-02 11:06:02',
      lx: '港内安全',
    },
    {
      title: '港内车辆相撞',
      date: '2023-01-03 22:06:02',
      lx: '港内安全',
    },
  ] as any,
});
</script>

<style lang="scss" scoped>
.top {
  width: 100%;
  height: calc(45% - 76px);
  .title {
    height: 40px;
    padding-top: 16px;
    display: flex;
    .left {
      font-size: 20px;
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
  .con {
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
        width: 16%;
      }
      :nth-child(2) {
        width: 42%;
      }
      :nth-child(3) {
        width: 42%;
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
          width: 16%;
        }
        :nth-child(2) {
          width: 42%;
        }
        :nth-child(3) {
          width: 42%;
        }
      }
    }
  }
}
</style>
