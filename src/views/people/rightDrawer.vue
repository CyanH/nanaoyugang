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
import { reactive } from 'vue';
import { CountTo } from 'vue3-count-to';
import { Vue3SeamlessScroll } from 'vue3-seamless-scroll';

const state = reactive({
  recordList: [
    {
      name: '郭艳珍',
      shipName: '粤汕渔05417',
      type: '出港',
      date: '2022-1-4 03:40:20',
    },
    {
      name: '郭永雄',
      shipName: '粤汕渔02356',
      type: '出港',
      date: '2022-1-4 04:12:12',
    },
    {
      name: '郭锦荣',
      shipName: '粤汕渔01388',
      type: '出港',
      date: '2022-1-4 14:44:24',
    },
    {
      name: '陈键潮',
      shipName: '粤汕渔19582',
      type: '进港',
      date: '2022-1-4 10:44:43',
    },
    {
      name: '黄润胜',
      shipName: '粤汕渔05417',
      type: '进港',
      date: '2022-1-4 13:12:45',
    },
    {
      name: '何虎山',
      shipName: '粤汕渔15740',
      type: '进港',
      date: '2022-1-4 15:32:12',
    },
    {
      name: '王富贵',
      shipName: '粤汕渔84257',
      type: '进港',
      date: '2022-1-4 20:53:42',
    },
  ],
});
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
