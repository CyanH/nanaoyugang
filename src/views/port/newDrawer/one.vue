<template>
    <div class="title">
      <div class="left">
        <img src="@/assets/image/card/o3.png" alt="">
        <span class="span">在籍渔船</span>
      </div>
      <div class="right">
          <!-- <span class="num">1658</span> -->
          <count-to :startVal="0" :endVal="1658" :duration="3000" class="num"></count-to>
          <span class="dw">艘</span>
      </div>
    </div>
    <div class="target flex-between">
      <div class="bar" v-for="item in state.list">
        <div>
          <span class="num">{{ item.value }}</span>
          <span class="unit">{{ item.danwe }}</span>
        </div>
        <div class="label">{{ item.name }}</div>
      </div>
    </div>
    <v-title title="渔船动态"></v-title>
    <div class="chart-container">
      <div class="flex bottom">
        <div class="left1">
          <div v-for="item,index in state.left_list" class="left_dan">
            <div class="left_dan_top">
              <img :src="getImgUrl(index + 1)" alt="">
              <span class="name" :class="item.flag ? 'good' : ''">{{ item.name }}</span>
            </div>
            <div class="line"></div> 
          </div>
        </div>
        <div style="flex: 1">
          <div style="text-align: center">
            <span class="num" style="color: #fff; padding-right: 0">{{ flag_num }}</span>
            <span>只</span>
          </div>
          <img src="@/assets/image/industrialPark/cz_bot.gif" class="cz-bot" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { CountTo } from 'vue3-count-to';
  import { onBeforeUnmount, onMounted, reactive, ref } from 'vue';
  import { getCompanyNum, getCzValue } from '@/api/industrial';
  const countryCz = ref(23);
  const cyyCz = ref(100);
  const percent = ref('100%');
  const percentStatus = ref(0);
  
  const state = reactive({
    list: [
      {
        name: '经济区面积',
        value: 56,
        danwe:'㎡'
      },
      {
        name: '渔港水域面积',
        value: 1,
        danwe:'㎡'
      },
      {
        name: '渔船码头长度',
        value: 2,
        danwe:'m'
      },
      {
        name: '休闲码头长度',
        value: 5,
        danwe:'m'
      },
    ],
    czList: [
      {
        name: '在港船只',
        value: 150.0,
        bgColor: '#8B71FF',
      },
      {
        name: '作业船只',
        value: 60.0,
        bgColor: '#DD5B86',
      },
    //   {
    //     name: '产业园主导产业总产值',
    //     value: 0,
    //     bgColor: '#E2963C',
    //   },
    ],
    left_list: [
      {
        name: '24H进港',
        flag: true,
        value: 99
      },
      {
        name: '24H出港',
        flag: false,
        value: 56
      },
      {
        name: '在港船只',
        flag: false,
        value: 207
      },
      {
        name: '作业船只',
        flag: false,
        value: 400
      }
    ]
  });

  let flag_index = ref(0)
  let flag_num = ref(0)
  let time = ref(null as any)
  onMounted(() => {
    getData();
  });
  
  onBeforeUnmount(() => {
    clearInterval(time.value)
  })
  const getImgUrl = (url: number) => {
    return new URL(`../../../assets/image/card/l${url}.png`, import.meta.url).href;
  };
  const getData = () => {
    flag_num.value = state.left_list[flag_index.value].value
    getCompanyNum({ year: new Date().getFullYear() }).then((res: any) => {
      // let data = res.content[0];
      // state.list[0].value = data.companyNum;
      // state.list[1].value = data.countryCompanyNum;
      // state.list[2].value = data.provinceCompanyNum;
      // state.list[3].value = data.cityCompanyNum;
    });

  
    getCzValue({ year: new Date().getFullYear() }).then((res: any) => {
      // let data = res.content[0];
      // countryCz.value = data.countyPvValue.toFixed(2);
      // cyyCz.value = data.cyyPvValue.toFixed(2);
      // state.czList[0].value = data.onePvValue.toFixed(2);
      // state.czList[1].value = data.twoThreePvValue.toFixed(2);
      // state.czList[2].value = data.masterOneTwoThreePvValue.toFixed(2);
      // percent.value = data.percent;
      // percentStatus.value = data.percentStatus;
    });

    time.value = setInterval(() => {
      Time()
    }, 3000);
  };
  const Time = () => {
    if(flag_index.value < 3){
      flag_index.value ++;
    }else{
      flag_index.value = 0
    }
    for(let i = 0; i < state.left_list.length; i++){
      state.left_list[i].flag = false
    }
    state.left_list[flag_index.value].flag = true
    flag_num.value = state.left_list[flag_index.value].value
  }
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
  .title{
    height: 40px;
    margin-top: 20px;
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
  </style>
  