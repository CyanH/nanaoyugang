<template>
  <div class="top">
    <div class="nav">
      <div>渔船名称</div>
      <div>渔港名称</div>
      <div>设备类型</div>
      <div>进出港时间</div>
    </div>
    <div class="content">
      <vue3-seamless-scroll :list="state.projectList" :step="0.3" :hover="true">
        <div class="row" v-for="(item, index) in state.projectList" :key="index">
          <div>{{ item.name }}</div>
          <div>{{ item.yg_name }}</div>
          <div>{{ item.lx }}</div>
          <el-tooltip placement="top">
            <template #content>{{ item.date }}</template>
            <span>{{ parseTime(item.date, '{y}-{m}-{d}') }}</span>
          </el-tooltip>
        </div>
      </vue3-seamless-scroll>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts';
import { onMounted, ref, reactive } from 'vue';
import { parseTime } from '@/utils/parseTime';
import { Vue3SeamlessScroll } from 'vue3-seamless-scroll';

const state = reactive({
  projectList: [
    {
      name: '粤汕渔02356',
      date: '2022-12-22 08:44:00',
      yg_name: '云澳中心渔港',
      lx: 'AIS',
      bm: '1460642',
      g_lx: '进港',
    },
    {
      name: '粤汕渔01388',
      date: '2022-12-22 20:44:00',
      yg_name: '吴平寨渔港',
      lx: 'AIS',
      bm: '1460642',
      g_lx: '进港',
    },
    {
      name: '粤汕渔35421',
      date: '2022-12-23 15:44:00',
      yg_name: '云澳中心渔港',
      lx: '北斗',
      bm: '1460642',
      g_lx: '出港',
    },
    {
      name: '粤汕渔05417',
      date: '2022-12-24 20:44:00',
      yg_name: '后江渔港',
      lx: 'AIS',
      bm: '1460642',
      g_lx: '出港',
    },
    {
      name: '粤汕渔35265',
      date: '2022-12-25 20:44:00',
      yg_name: '云澳中心渔港',
      lx: '北斗',
      bm: '1460642',
      g_lx: '进港',
    },
    {
      name: '粤汕渔46374',
      date: '2022-12-26 20:44:00',
      yg_name: '云澳中心渔港',
      lx: '北斗',
      bm: '1460642',
      g_lx: '出港',
    },
    {
      name: '粤汕渔12634',
      date: '2022-12-27 20:44:00',
      yg_name: '后江渔港',
      lx: 'AIS',
      bm: '1460642',
      g_lx: '进港',
    },
    {
      name: '粤汕渔57321',
      date: '2022-12-28 20:44:00',
      yg_name: '吴平寨渔港',
      lx: '北斗',
      bm: '1460642',
      g_lx: '出港',
    },
    {
      name: '粤汕渔78723',
      date: '2022-12-29 20:44:00',
      yg_name: '后江渔港',
      lx: '北斗',
      bm: '1460642',
      g_lx: '出港',
    },
  ] as any,
});
</script>

<style lang="scss" scoped>
.top {
  width: 100%;
  height: calc(48% - 54px);
  // padding-top: 12px;
  padding: 8px 0px;
  box-sizing: border-box;
  overflow: hidden;
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
      width: 27%;
    }
    :nth-child(2) {
      width: 28%;
    }
    :nth-child(3) {
      width: 20%;
    }
    :nth-child(4) {
      width: 25%;
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
        width: 27%;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
      :nth-child(2) {
        width: 28%;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
      :nth-child(3) {
        width: 20%;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
      :nth-child(4) {
        width: 25%;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
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
</style>
