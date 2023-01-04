<template>
    <div class="top">
      <div v-for="item,index in state.top" class="top1">
        <div class="name">{{ item.name }}</div>
        <div class="value">{{ item.value }}</div>
        <div class="img">
          <img :src="getImgUrl('o'+(index + 1))" alt="">
        </div>
      </div>
    </div>
    <!-- <div class="line"></div> -->
    <div class="two">
      <div v-for="item,index in state.two" class="two1">
        <div class="two1_one">
          <div class="left_one">
            <img :src="getImgUrl('s'+(index + 1))" alt="">
          </div>
          <div class="two1_one_a">
            <!-- <div class="t1">
              <span class="s1">在线</span>
              <span class="s2">{{ item.value }}</span>
            </div>
            <div class="t2 t22">
              <span class="s1">总数</span>
              <span class="s2">{{ item.value1 }}</span>
            </div> -->
            <div class="t1">
              <span class="s1">在线</span>
              <span class="s2">{{ item.value }}</span>
            </div>
            <div class="t2 t22">
              <span class="s1">总数</span>
              <span class="s2">{{ item.value1 }}</span>
            </div>
          </div>
        </div>
        <div class="line"></div>
      </div>
    </div>
    <!-- <div class="line"></div> -->
    <div class="there">
      <div class="title">
        <div class="left">
          <img src="@/assets/image/yuan.png" alt="">
          <div class="span">渔船进出港统计</div>
        </div>
        <div class="right"></div>
      </div>
      <div class="chert">
        <div class="chart" ref="chartEle_all"></div>
      </div>
    </div>
</template>
  
  <script setup lang="ts">
  import * as echarts from 'echarts';
  import { onBeforeUnmount, onMounted, reactive, ref } from 'vue';
  import { loadChart } from '../chart/top';
  const state = reactive({
    top: [
      {
        name:'在籍',
        value: 1671
      },
      {
        name:'当日出海',
        value: 0
      }
    ] as any,
    two: [
      {
        value: 0,
        value1: 241
      },
      {
        value: 0,
        value1: 284
      },
      {
        value: 64,
        value1: 82
      }
    ] as any,
  });
  let myChar_all: echarts.ECharts;
  let chartEle_all = ref<HTMLDivElement | null>(null);  
  let time = ref(null as any)
  onMounted(() => {
    myChar_all = echarts.init(chartEle_all.value as HTMLDivElement);
    window.addEventListener('resize', () => {
        myChar_all.resize();
    });
    getData();
  });
  const getImgUrl = (url: string) => {
    return new URL(`../../../assets/image/trawler/${url}.png`, import.meta.url).href;
  };
  const getData = () => {
    let data = [50,30,20,10,60,70,100]
    let date = ['1-01','1-02','1-03','1-04','1-05','1-06','1-07']
    loadChart(myChar_all,data,date,'出港船只','只')
  };
  </script>
  
  <style lang="scss" scoped>
  .target {
    // margin: 0px 0 22px;
    position: relative;
    height: 28%;
    .bar {
      text-align: center;
  
      .num {
        font-size: 30px;
        color: #00f6ff;
        padding-right: 5px;
      }
  
      .unit {
        color: #57b7a4;
      }
  
      .label {
        color: #b9b9b9;
        padding-top: 6px;
        font-size: 14px;
      }
    }
  }
  
  .chart-container {
    height: 50%;
    margin-top: 10px;

    .left1{
      width: 220px;
      height: 100%;
      // background-color: yellow;
      .left_dan{
        height: 25%;
       
        // justify-content: center;
        // align-items: center;
        
        .left_dan_top{
          height: calc(100% - 25px);
          display: flex;
          align-items: center;
          img{
            width: 16px;
            height: 16px;
          }
          .name{
            margin-left: 8px;
            font-size: 18px;
          }
          .good{
            color: #04dcf6;
            font-size: 20px;
          }
        }
        .line {
          height: 2px;
          background: linear-gradient(
            to right,
            transparent 0,
            rgba(147, 203, 255, 0.2) 15%,
            rgba(147, 203, 255, 0.2) 85%,
            transparent 100%
          );
          margin: 15px 0;
        }
      }
    }
  
    .name {
      font-size: 16px;
      color: #fff;
    }
  
    .value {
      margin-top: 5px;
    }
  
    .num {
      font-size: 26px;
      color: #00f6ff;
      padding-right: 5px;
    }
  
    .unit {
      color: rgba(0, 246, 255, 0.64);
    }
  
    .icon {
      height: 2.2em;
      width: 1.8em;
      vertical-align: text-bottom;
    }
  
    .flex-column {
      display: flex;
      flex-direction: column;
        .one1{
            margin-top: 15px;
        }
    //   justify-content: space-between;
    }
  
    .el-progress-bar {
      margin-top: 5px;
      width: 80%;
  
      .el-progress-bar__outer {
        height: 10px;
        border-radius: 5px;
  
        .el-progress-bar__inner {
          border-radius: 3px;
          height: 6px;
          top: 50%;
          transform: translateY(-50%);
  
          &::after {
            position: absolute;
            border-radius: 3px;
            width: 100%;
            left: -100%;
            background: inherit;
            animation: progress-bar-stripes 3s linear 2s infinite;
          }
  
          @keyframes progress-bar-stripes {
            0% {
              left: -100%;
            }
            to {
              left: 0;
            }
          }
        }
      }
    }
  
    .bottom {
      margin-top: 20px;
      height: 100%;
    }
    .cz-bot {
      width: 176px;
      margin: auto;
    }
  }
  // .title{
  //   height: 40px;
  //   margin-top: 20px;
  //   // background-color: yellow;
  //   display: flex;
  //   .left{
  //       font-size: 20px;
  //       // width: 180px;
  //       display: flex;
  //       .span{
  //           margin-right: 4px;
  //           color: #e3f0ff;
  //           font-size: 18px;
  //           line-height: 1;
  //           margin-left: -20px;
  //           padding-top: 15px;
  //       }
  //   }
  //   .right{
  //       flex: 1;
  //       .num{
  //           font-size: 30px;
  //           padding-right: 5px;
  //           color: #0bf;
  //       }
  //   }
  //   }

    .top{
      width: 100%;
      height: 130px;
      // margin-top: 12px;
      display: flex;
      .top1{
        width: 50%;
        height: 100%;
        text-align: center;
        .name{
          font-size: 18px;
          // margin-bottom: 12px;
          height: 35px;
        }
        .value{
          color: #00d2ff;
          font-family: PMZDR;
          font-size: 26px;
          font-style: italic;
          line-height: 1;
          height: 30px;
        }
        .img{
          height: calc(100% - 65px);
          text-align: center;
          // margin-top: -8px;
          img{
            margin: 0 auto;
          }
        }
      }
    }
    .two{
      width: 100%;
      height: 220px;
      .two1{
        height: 33%;
        .two1_one{
          height: calc(100% - 20px);
          display: flex;
          align-items: center;
          padding: 0 16px;
          .left_one{
            width: 140px;
            img{
              height: 70%;
            }
          }
          .two1_one_a{
            flex: 1;
            height: 100%;
            // .t1,.t22{
            //   height: 50%;
              
            //   .s1{
            //     font-size: 18px;
            //     margin-right: 16px;
            //   }
            //   .s2{
            //     font-family: PMZDR;
            //     font-size: 22px;
            //     font-style: italic;
            //   }
            // }
            // .t2{
            //   height: 50%;
            // }
            display: flex;
              align-items: center;
            .t1,.t22{
              // height: 50%;
              width: 50%;
              height: 100%;
              display: flex;
              align-items: center;
              .s1{
                font-size: 18px;
                margin-right: 10px;
              }
              .s2{
                font-family: PMZDR;
                font-size: 22px;
                font-style: italic;
                flex: 1;
              }
            }
            .t2{
              height: 100%;
            }

          }
        }
      }
    }
    .there{
      width: 100%;
      height: calc(100% - 380px);
      .title{
        height: 40px;
        margin-top: 8px;
        // background-color: yellow;
        display: flex;
        .left{
            font-size: 20px;
            // width: 180px;
            display: flex;
            align-items: center;
            img{
              // width: 9px;
              // height: 9px;
            }
            .span{
                color: #e3f0ff;
                font-size: 18px;
                margin-left: 10px;
            }
        }
        .right{
            flex: 1;
          
        }
      }
      .chert{
        height: calc(100% - 40px);
        .chart{
          height: 100%;
        }
      }
    }
    .line {
      height: 2px;
      background: linear-gradient(
        to right,
        transparent 0,
        rgba(147, 203, 255, 0.2) 15%,
        rgba(147, 203, 255, 0.2) 85%,
        transparent 100%
      );
      margin: 8px 0;
    }
  </style>
  