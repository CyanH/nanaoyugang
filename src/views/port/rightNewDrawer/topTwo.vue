<template>
  <div class="top">
    <div class="title">
      <div class="left">
        <img src="@/assets/image/card/o2.png" alt="" />
        <span class="span">港内安全巡查</span>
      </div>
      <div class="right">
        <!-- <span class="num">12</span> -->
        <count-to :startVal="0" :endVal="12" :duration="3000" class="num"></count-to>
        <span class="dw">次</span>
      </div>
    </div>
    <div class="con">
      <div class="nav">
        <div>序号</div>
        <div>报警原因</div>
        <div>时间</div>
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
      date: '2022-12-21 11:23:43',
      lx: '港内安全',
    },
    {
      title: '明火作业',
      date: '2022-12-21 16:32:22',
      lx: '港内安全',
    },
    {
      title: '港内车辆相撞',
      date: '2022-12-25 08:06:46',
      lx: '港内安全',
    },
    {
      title: '港内人员打架 ',
      date: '2022-12-27 16:04:53',
      lx: '港内安全',
    },
    {
      title: '明火作业',
      date: '2022-12-27 20:36:05',
      lx: '港内安全',
    },
    {
      title: '港内车辆相撞',
      date: '2022-12-28 16:06:02',
      lx: '港内安全',
    },
    {
      title: '港内人员打架',
      date: '2022-12-29 11:06:02',
      lx: '港内安全',
    },
    {
      title: '明火作业',
      date: '2022-12-31 16:06:02',
      lx: '港内安全',
    },
    {
      title: '港内车辆相撞',
      date: '2022-01-02 16:06:02',
      lx: '港内安全',
    },
    {
      title: '港内人员打架',
      date: '2022-01-02 21:06:02',
      lx: '港内安全',
    },
    {
      title: '明火作业',
      date: '2022-01-03 16:06:02',
      lx: '港内安全',
    },
    {
      title: '港内车辆相撞',
      date: '2022-01-05 16:06:02',
      lx: '港内安全',
    },
  ] as any,
});
</script>

<style lang="scss" scoped>
.top {
  width: 100%;
  height: 35%;
  .title {
    height: 40px;
    margin-top: 16px;
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
        width: 20%;
      }
      :nth-child(2) {
        width: 40%;
      }
      :nth-child(3) {
        width: 40%;
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
          width: 20%;
        }
        :nth-child(2) {
          width: 40%;
        }
        :nth-child(3) {
          width: 40%;
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
