<template>
  <div class="maps">
    <div class="left_con left_con1">
      <div class="titles">渔获概况</div>
      <div class="con11">上岸总数<span class="num">61</span>次</div>
    </div>

    <div class="left_con left_con2">
      <div class="titles">渔获概况</div>
      <div class="con11">上岸总重量<span class="num">3.69</span>吨</div>
    </div>

    <div class="left_con left_con3">
      <div class="titles">渔获概况</div>
      <div class="con11">智能称<span class="num">1.25</span>吨</div>
    </div>

    <div class="left_con left_con4">
      <div class="titles">渔获概况</div>
      <div class="con11">人工录入<span class="num">2.44</span>吨</div>
    </div>

    <div class="target">
      <div class="name">今日上岸数(船次)</div>
      <div class="num">1725</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue';
const lists = reactive({
  o2: [
    {
      num: 32,
      title: '船员行为违规',
    },
    {
      num: 35,
      title: '船员证书违规',
    },
  ],
});
</script>
<style lang="scss" scoped>
.maps {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 778px;
  height: 703px;
  background: url('@/assets/image/catch/center.png') center no-repeat;
  background-size: 100% 100%;

  .left_con {
    background: url('@/assets/image/catch/bg.png') center no-repeat;
    background-size: 100% 100%;
    width: 211px;
    height: 113px;
    position: relative;

    .titles {
      padding-left: 20px;
      padding-top: 5px;
      font-size: 16px;
      font-weight: 800;
      color: #feffff;
    }
    .con11 {
      position: absolute;
      top: 60%;
      left: 50%;
      transform: translate(-50%, -50%);
      white-space: nowrap;
      font-size: 16px;
      font-weight: 400;
      color: #feffff;

      .num {
        padding: 0 10px;
        font-size: 32px;
        font-family: DIN Condensed;
        font-weight: bold;
        color: #00f6ff;
      }
    }
    .con22 {
      display: flex;
      height: calc(100% - 28px);
      width: 100%;
      .f1 {
        width: 50%;
        text-align: center;
        padding-top: 18px;
        .t1 {
          color: #00f6ff;
          height: 55%;
          .s1 {
            font-size: 34px;
            font-weight: bold;
            font-family: DIN Condensed;
          }
          .s2 {
            font-size: 12px;
            font-family: Source Han Sans CN;
            font-weight: 400;
            opacity: 0.64;
          }
        }
        .t2 {
          width: 100%;
          height: 14px;
          font-size: 14px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #feffff;
          opacity: 0.8;
        }
      }
    }
  }
  .left_con1 {
    position: absolute;
    top: 20px;
    left: 15px;
  }

  .left_con2 {
    position: absolute;
    top: 30px;
    right: 10px;
  }
  .left_con3 {
    position: absolute;
    top: 50%;
    left: -25px;
  }
  .left_con4 {
    position: absolute;
    top: 50%;
    right: -20px;
  }
}

.target {
  position: absolute;
  top: 48%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 18px;
  color: #ddd;

  .num {
    color: #70f3fc;
    font-size: 88px;
  }
}
</style>
