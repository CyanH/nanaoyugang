<template>
  <div class="box_o">
    <div class="title1">
      <div class="left">
        <img src="@/assets/image/card/o4.png" alt="" />
        <span class="span">休闲渔船总量</span>
      </div>
      <div class="right">
        <count-to :startVal="0" :endVal="10" :duration="3000" class="num"></count-to>
        <span class="dw">艘</span>
      </div>
    </div>

    <div class="leisure-data-list">
      <div class="leisure-data-item flex">
        <div class="leisure-data-item-left">
          <img alt="ICON_CIRCLE" src="@/assets/image/port/icon-leisure-background.png" class="icon-circle" />
          <img alt="ICON_LABEL" src="@/assets/image/port/icon-tourist.png" width="100%" />
          <img alt="ICON_LINE" src="@/assets/image/port/icon-leisure-line.png" class="icon-line" />
        </div>
        <ul class="leisure-data-item-right">
          <li class="right-item">
            <div class="right-item-wrapper"><span class="label">今日预约游客量 </span><span class="num">32</span></div>
            <div class="right-item-line"></div>
          </li>
          <li class="right-item">
            <div class="right-item-wrapper"><span class="label">游客总预约量 </span><span class="num">1154</span></div>
          </li>
        </ul>
      </div>
      <div class="leisure-data-item flex">
        <div class="leisure-data-item-left">
          <img alt="ICON_CIRCLE" src="@/assets/image/port/icon-leisure-background.png" class="icon-circle" />
          <img alt="ICON_LABEL" src="@/assets/image/port/icon-leisure.png" width="100%" />
          <img alt="ICON_LINE" src="@/assets/image/port/icon-leisure-line.png" class="icon-line" />
        </div>
        <ul class="leisure-data-item-right">
          <li class="right-item">
            <div class="right-item-wrapper"><span class="label">今日游船使用量 </span><span class="num">6</span></div>
            <div class="right-item-line"></div>
          </li>
          <li class="right-item">
            <div class="right-item-wrapper"><span class="label">游船总使用量 </span><span class="num">203 </span></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CountTo } from 'vue3-count-to';
</script>

<style lang="scss" scoped>
.leisure-data-list {
  height: calc(100% - 108px);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  pointer-events: all;

  .leisure-data-item {
    flex-direction: row;

    .leisure-data-item-left {
      height: 60px;
      position: relative;
      width: 60px;

      .icon-circle {
        animation: move-leisure-circle 2s linear infinite;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;

        @keyframes move-leisure-circle {
          0% {
            transform: rotate(0deg);
          }

          100% {
            transform: rotate(-1turn);
          }
        }
      }

      .icon-line {
        left: 50%;
        position: absolute;
        top: -1.5px;
        transform: translateX(-50%);
      }
    }

    .leisure-data-item-right {
      display: flex;
      flex-direction: column;
      width: 170px;
      padding-left: 0;

      .right-item {
        display: flex;
        flex-direction: column;

        .right-item-wrapper {
          align-items: center;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          margin-left: 20px;

          .label {
            color: #e3f0ff;
            font-size: 15px;
          }

          .num {
            color: #0bf;
            font-size: 20px;
          }
        }

        .right-item-line {
          animation: move-leisure-line 4s steps(120) forwards infinite;
          background-image: url('@/assets/image/port/icon-leisure-line-background.png');
          background-position-x: 0;
          background-position-y: 0;
          background-repeat: no-repeat;
          height: 18px;
          width: 210px;

          @keyframes move-leisure-line {
            0% {
              background-position-y: 0;
            }

            100% {
              background-position-y: -2160px;
            }
          }
        }
      }
    }
  }
}

.title1 {
  height: 40px;
  margin: 15px 0;
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
.box_o {
  width: 100%;
  height: 100%;
}
</style>
