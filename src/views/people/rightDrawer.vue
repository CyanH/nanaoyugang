<template>
  <v-drawer direction="right" hasArrow>
    <v-card>
      <div class="top">
        <v-title title="船员动态"></v-title>
        <div class="flex wrapper">
          <img src="@/assets/image/people/icon-people.png" class="icon" />
          <span class="label">当前作业人员</span>
          <count-to :startVal="0" :endVal="821" :duration="3000" class="num"></count-to>
          <span>人</span>
        </div>
        <div class="box2">
          <div class="title">
            <div class="left">
              <img src="@/assets/image/yuan.png" alt="">
              <div class="span">船员在海作业趋势</div>
            </div>
            <div class="right">
              <div class="_o">
                <div class="o_1" :class="o_index == 0 ? 'active' : ''" @click="go_active(0)">年</div>
                <div class="o_1" :class="o_index == 1 ? 'active' : ''" @click="go_active(1)">月</div>
                <div class="o_1" :class="o_index == 2 ? 'active' : ''" @click="go_active(2)">周</div>
              </div>
            </div>
          </div>
          <div class="content">
            <div class="chart" ref="chartEle_all"></div>
          </div>
        </div>
        <div class="box3">
          <div v-for="item,index in state.list" class="o">
            <div class="alert-line"></div>
            <div class="img">
              <img :src="getImgUrl(index + 1)" alt="">
            </div>
            <div class="right">
              <div class="o1">{{ item.title }}</div>
              <div class="o2">{{ item.value }}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="bottom">
        <v-title title="船员进出港记录"></v-title>
        <div class="cont">
          <div class="nav">
            <div>姓名</div>
            <div>渔船名称</div>
            <div>进出港</div>
            <div>时间</div>
          </div>
          <div class="content">
            <vue3-seamless-scroll :list="state.recordList" :step="0.3" :hover="true" :limitScrollNum="7">
              <div class="row" v-for="(item, index) in state.recordList" :key="index">
                <div>{{ item.name }}</div>
                <div>{{ item.shipName }}</div>
                <div>{{ item.type }}</div>
                <div>{{ item.date }}</div>
              </div>
            </vue3-seamless-scroll>
          </div>
        </div>
      </div>
    </v-card>
  </v-drawer>
</template>

<script setup lang="ts">
import { reactive,ref,onMounted } from 'vue';
import { CountTo } from 'vue3-count-to';
import { Vue3SeamlessScroll } from 'vue3-seamless-scroll';
import * as echarts from 'echarts';
import { loadChart } from '../trawler/chart/top';
const state = reactive({
  list: [
    {
      title: '24H船员进港',
      value: 20
    },
    {
      title: '24H船员出港',
      value: 50
    },
  ] as any,
  recordList: [
    {
      name: '郭艳珍',
      shipName: '粤汕渔05417',
      type: '出港',
      date: '2022-01-04 03:40:20',
    },
    {
      name: '郭永雄',
      shipName: '粤汕渔02356',
      type: '出港',
      date: '2022-01-04 04:12:12',
    },
    {
      name: '郭锦荣',
      shipName: '粤汕渔01388',
      type: '出港',
      date: '2022-01-04 14:44:24',
    },
    {
      name: '陈键潮',
      shipName: '粤汕渔19582',
      type: '进港',
      date: '2022-01-04 10:44:43',
    },
    {
      name: '黄润胜',
      shipName: '粤汕渔05417',
      type: '进港',
      date: '2022-01-04 13:12:45',
    },
    {
      name: '何虎山',
      shipName: '粤汕渔15740',
      type: '进港',
      date: '2022-01-04 15:32:12',
    },
    {
      name: '王富贵',
      shipName: '粤汕渔84257',
      type: '进港',
      date: '2022-01-04 20:53:42',
    },
  ],
});
let myChar_all: echarts.ECharts;
let chartEle_all = ref<HTMLDivElement | null>(null); 
let o_index = ref(2)
onMounted(() => {
  myChar_all = echarts.init(chartEle_all.value as HTMLDivElement);
  window.addEventListener('resize', () => {
      myChar_all.resize();
  });
  getData();
})
const go_active = (index:any) => {
  o_index.value = index
}
const getData = () => {
  let data = [50,30,20,160,60,70,100]
  let date = ['1-01','1-02','1-03','1-04','1-05','1-06','1-07']
  loadChart(myChar_all,data,date,'人数','人')
};
const getImgUrl = (url: number) => {
  return new URL(`../../assets/image/d${url}.png`, import.meta.url).href;
};
</script>

<style lang="scss" scoped>
.top {
  height: 60%;
  .wrapper {
    margin: 15px 0;
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
  .box2{
    width: 100%;
    height: calc(100% - 180px);
    margin-bottom: 12px;
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
    .content{
      margin-top: 12px;
      width: 100%;
      height: calc(100% - 52px);
      .chart{
        height: 100%;
      }
    }
  }
  .box3{
    height: 56px;
    width: 80%;
    margin: 0 auto;
    display: flex;
    .o{
      width: calc(50% - 4px);
      background: linear-gradient(0deg,rgba(99,163,255,.2),rgba(22,127,255,.2) 50%,rgba(114,190,255,.2));
      display: flex;
      // align-items: center;
      .alert-line{
        background: linear-gradient(0deg,rgba(99,163,255,0),#63a3ff 30%,#fcfbf7 50%,#72beff 70%,rgba(114,190,255,0));
        height: 56px;
        width: 1px;
      }
      .img{
        width: 35px;
        height: 100%;
        display: flex;
        align-items: center;
        img{
          width: 35px;
          height: 35px;
        }
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
      margin-right: 8px;
    }
  }
}

.bottom {
  height: 40%;

  .cont {
    height: calc(100% - 50px);
    margin-top: 12px;
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
        width: 18%;
      }
      :nth-child(2) {
        width: 25%;
      }
      :nth-child(3) {
        width: 18%;
      }
      :nth-child(4) {
        width: 38%;
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
          width: 18%;
        }
        :nth-child(2) {
          width: 26%;
        }
        :nth-child(3) {
          width: 18%;
        }
        :nth-child(4) {
          width: 38%;
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
