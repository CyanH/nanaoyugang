<template>
  <v-drawer direction="left" hasArrow>
    <v-card>
      <v-title title="渔获概况"></v-title>
      <div class="flex wrapper">
        <img src="@/assets/image/catch/icon-ashore.png" class="icon" />
        <span class="label">今日上岸数</span>
        <count-to :startVal="0" :endVal="1725" :duration="3000" class="num"></count-to>
        <span>船次</span>
      </div>
      <div class="one">
        <div v-for="item,index in list.one" class="o">
          <div class="alert-line"></div>
          <div class="right">
            <div class="o1">{{ item.name }}</div>
            <div class="o2">
              <span>{{ item.num}}</span>
              <span>{{ item.dw}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="ssdt">
        <div class="title">
          <div class="left">
            <img src="@/assets/image/yuan.png" alt="">
            <div class="span">实时动态</div>
          </div>
        </div>
        <div class="con">
          <vue3-seamless-scroll :list="list.two" :step="0.3" :hover="true">
            <div class="con_o" v-for="item,index in list.two" >
              <div class="top1">
                <div class="name">{{item.name}}</div>
                <div class="num">{{item.num}}kg</div>
                <div class="cont">
                  <div class="an">{{item.lx}}</div>
                </div>
              </div>
              <div class="bottom1">
                <div class="dd">上岸地点：{{item.dd}}</div>
                <div class="tiem">上岸时间：{{item.time}}</div>
              </div>
            </div>
          </vue3-seamless-scroll>
        </div>
      </div>
      <div class="bottom">
        <div class="title">
          <div class="left">
            <img src="@/assets/image/yuan.png" alt="">
            <div class="span">上岸变化趋势</div>
          </div>
          <div class="right">
            <div class="_o">
              <div class="o_1" :class="o_index == 0 ? 'active' : ''" @click="go_active(0)">年</div>
              <div class="o_1" :class="o_index == 1 ? 'active' : ''" @click="go_active(1)">月</div>
              <div class="o_1" :class="o_index == 2 ? 'active' : ''" @click="go_active(2)">周</div>
            </div>
          </div>
        </div>
        <div class="chert">
          <div class="chart" ref="shangan"></div>
        </div>
      </div>
    </v-card>
  </v-drawer>
</template>

<script setup lang="ts">
import { CountTo } from 'vue3-count-to';
import { onMounted, reactive,ref,onUnmounted } from 'vue'
import { Vue3SeamlessScroll } from 'vue3-seamless-scroll';
import * as echarts from 'echarts';
import { loadChart } from './chart/shangan'
let myChar_shangan: echarts.ECharts;
let shangan = ref<HTMLDivElement | null>(null);
let o_index = ref(2)
const list = reactive({
  one: [
    {
      name: '上岸总数',
      num: 61,
      dw: '次'
    },
    {
      name: '上岸总重量',
      num: 3.69,
      dw: '吨'
    },
    {
      name: '智能秤',
      num: 1.25,
      dw: '吨'
    },
    {
      name: '人工录入',
      num: 2.44,
      dw: '吨'
    }
  ],
  two: [
    {
      name: '粤番渔28668',
      time: '2022-12-16 17:07:19',
      num: 200,
      lx: '人工录入',
      dd: '莲花街渔港'
    },
    {
      name: '粤番渔23017',
      time: '2022-12-16 17:07:19',
      num: 200,
      lx: '人工录入',
      dd: '码头'
    },
    {
      name: '粤番渔23322',
      time: '2022-12-16 17:07:19',
      num: 100,
      lx: '智能电子秤',
      dd: '番禺'
    },
    {
      name: '粤番渔01385',
      time: '2022-12-16 17:07:19',
      num: 120,
      lx: '人工录入',
      dd: '番禺'
    },
    {
      name: '粤番渔23017',
      time: '2022-12-16 17:07:19',
      num: 150,
      lx: '智能电子秤',
      dd: '莲花山渔港'
    },
    {
      name: '粤番渔23322',
      time: '2022-12-16 17:07:19',
      num: 260,
      lx: '智能电子秤',
      dd: '番禺第一水产品交易市场'
    },
    {
      name: '粤番渔23040',
      time: '2022-12-16 17:07:19',
      num: 350,
      lx: '人工录入',
      dd: '莲花山渔港'
    },
    {
      name: '粤番渔23040',
      time: '2022-12-16 17:07:19',
      num: 400,
      lx: '人工录入',
      dd: '莲花山渔港'
    },
    {
      name: '粤番渔01385',
      time: '2022-12-16 17:07:19',
      num: 600,
      lx: '智能电子秤',
      dd: '番禺码头'
    }
  ]
})
onMounted(() => {
  myChar_shangan = echarts.init(shangan.value as HTMLDivElement);
  window.addEventListener('resize', () => {
    myChar_shangan.resize();
  });
  getData();
})
onUnmounted(() => {
  window.removeEventListener('resize', () => {
    myChar_shangan.resize();
  });
})
const go_active = (index:any) => {
  o_index.value = index
}
const getData = () => {
  let data1 = [50,30,20,160,60,70,100]
  let data2 = [70,50,20,50,60,120,170]
  let date = ['1-01','1-02','1-03','1-04','1-05','1-06','1-07']
  let new_datas = []
  let new_data = [
    {
      name: '人工录入',
      color: '#11FCFF',
      o1_color: 'rgba(17, 252, 255,1)',
      o2_color: 'rgba(17, 252, 255,0)',
      data: data1
    },
    {
      name: '电子秤',
      color: '#37f197',
      o1_color: 'rgba(55,241,151,1)',
      o2_color: 'rgba(55,241,151,0)',
      data: data2
    }
  ]
  for(let i = 0;i < new_data.length; i++){
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
      data: new_data[i].data
    })
  }
  loadChart(myChar_shangan,new_datas,date,'吨')
}
</script>

<style lang="scss" scoped>
.wrapper {
  margin-top: 15px;
  font-size: 18px;
  color: #e3f0ff;

  .icon {
    width: 28px;
    margin-top: -5px;
  }

  .label {
    margin-left: -14px;
    margin-right: 20px;
  }

  .num {
    font-size: 24px;
    font-style: oblique;
    color: #0bf;
    margin-right: 12px;
  }
}
.one{
  width: 80%;
  height: 128px;
  display: flex;
  flex-wrap: wrap;
  margin: 12px auto;
  .o{
    width: calc(48% - 4px);
    background: linear-gradient(0deg,rgba(99,163,255,.2),rgba(22,127,255,.2) 50%,rgba(114,190,255,.2));
    display: flex;
    margin-bottom: 8px;
    .alert-line{
      background: linear-gradient(0deg,rgba(99,163,255,0),#63a3ff 30%,#fcfbf7 50%,#72beff 70%,rgba(114,190,255,0));
      height: 56px;
      width: 1px;
    }
    .right{
      flex: 1;
      margin-left: 8px;
      .o1,.o2{
        width: 100%;
        height: calc(50% - 2px);
      }
      .o1{
        color: #fff;
        font-size: 14px;
        display: flex;
        align-items: center;
      }
      .o2{
        color: #04dcf6;
        font-family: PMZDR;
        font-size: 18px;
        display: flex;
        align-items: center;
      }
    }
  }
  :nth-child(1) {
    margin-right: 16px;
  }
  :nth-child(3) {
    margin-right: 16px;
  }
}

.ssdt{
  width: 100%;
  height: calc(100% - 500px);
  margin-bottom: 12px;
  .con{
    margin-top: 12px;
    height: calc(100% - 52px);
    overflow: hidden;
    .con_o{
      width: 100%;
      background-image: url('@/assets/image/back.png');
      background-repeat: no-repeat;
      background-size: 100% 100%;
      height: 80px;
      .top1{
        width: 90%;
        margin: 0 auto;
        height: calc(50% - 4px);
        display: flex;
        padding-top: 4px;
        align-items: center;
        .name{
          color: #fff;
          font-size: 16px;
          margin-right: 12px
        }
        .num{
          background-color: rgba(0,187,255,.1);
          border-radius: 10px;
          box-sizing: border-box;
          color: #0bf;
          font-family: SHSCNM;
          font-size: 12px;
          height: 20px;
          line-height: 20px;
          padding-left: 8px;
          padding-right: 8px;
        }
        .cont{
          flex: 1;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          .an{
            background: linear-gradient(1turn,#084acc 6%,#2daff8);
            // background-color: rgba(17, 16, 45, 0.8);
            border-radius: 4px;
            box-shadow: 0 2px 4px 0 rgb(10 46 137 / 91%);
            box-sizing: border-box;
            color: #fff;
            font-size: 12px;
            height: 25px;
            width: 80px;
            text-align: center;
            line-height: 25px;
          }
        }
      }
      .bottom1{
        width: 90%;
        margin: 0 auto;
        height: calc(50% - 4px);
        padding-bottom: 4px;
        display: flex;
        .dd{
          width: 50%;
        }
        .tiem{
          width: 50%;
          display: flex;
          justify-content: flex-end;
        }
      }
    }
  }
}
.bottom{
  width: 100%;
  height: 250px;
  .chert{
    height: calc(100% - 52px);
    margin-top: 12px;
    width: 100%;
    .chart{
      height: 100%;
    }
  }
}

.title{
  height: 40px;
  margin-top: 8px;
  display: flex;
  .left{
      font-size: 20px;
      display: flex;
      align-items: center;
      .span{
          color: #e3f0ff;
          font-size: 18px;
          margin-left: 10px;
      }
  }
  .right{
      flex: 1;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-right: 20px;
      ._o{
        align-items: center;
        background-color: rgba(22,127,255,.2);
        display: flex;
        flex-direction: row;
        height: 22px;
        width: 90px;
        .o_1{
          border: 1px solid transparent;
          color: #fff;
          cursor: pointer;
          font-size: 12px;
          height: 20px;
          line-height: 20px;
          text-align: center;
          width: 28px;
        }
        .active{
          background-color: rgba(22,127,255,.4);
          border-color: #167fff;
        }
      }
  }
}
</style>
