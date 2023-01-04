<template>
    <div class="top">
      <div class="nav">
        <div>渔船名称</div>
        <div>渔港名称</div>
        <div>设备类型</div>
        <div>进出港时间</div>
      </div>
      <div class="content">
          <vue3-seamless-scroll :list="state.projectList" :step="0.3" :hover="true" :limitScrollNum="11">
              <div class="row" v-for="(item, index) in state.projectList" :key="index">
                <el-tooltip placement="top">
                      <template #content>{{ item.name }}</template>
                      <span>{{ item.name }}</span>
                  </el-tooltip>
                  <el-tooltip placement="top">
                      <template #content>{{ item.yg_name }}</template>
                      <span>{{ item.yg_name }}</span>
                  </el-tooltip>
                  <el-tooltip placement="top">
                      <template #content>{{ item.lx }}</template>
                      <span>{{ item.lx }}</span>
                  </el-tooltip>
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
  import { getCyyXsManagement } from '@/api/industrial';
  import productMiddle from './productMiddle.vue';
  import { parseTime } from '@/utils/parseTime';
  import { Vue3SeamlessScroll } from 'vue3-seamless-scroll';

let myChar_all: echarts.ECharts;
let chartEle_all = ref<HTMLDivElement | null>(null);
  
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
        name: '粤番渔02356',
        date: '2022-09-03 20:44:00',
        yg_name: '莲花山渔港',
        lx: 'AIS',
        bm: '1460642',
        g_lx: '进港'
      }
    ] as any
  });
  
  onMounted(() => {
    // myChar_all = echarts.init(chartEle_all.value as HTMLDivElement);
    // window.addEventListener('resize', () => {
    //     myChar_all.resize();
    // });
    getData();
  });
  
  const getData = () => {
    let data = [10000,50000,65555,97777,84444,7111,10222]
    let date = ['1-01','1-02','1-03','1-04','1-05','1-06','1-07']
    for(let i = 0; i < 15;i++){
      state.projectList.push({
        name: '粤番渔0235'+i,
        date: '2022-09-03 20:44:00',
        yg_name: '莲花山渔港',
        lx: 'AIS',
        bm: '146064'+i,
        g_lx: '进港'
      })
    }
    // loadChart(myChar_all,data,date,'水产','万元')
  };
  </script>
  
  <style lang="scss" scoped>
    .top{
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
  