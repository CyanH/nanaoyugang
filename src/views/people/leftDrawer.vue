<template>
  <v-drawer direction="left" hasArrow>
    <v-card>
      <v-title title="船员档案"></v-title>
      <div class="flex wrapper">
        <img src="@/assets/image/people/icon-archives.png" class="icon" />
        <span class="label">船员概况</span>
        <count-to :startVal="0" :endVal="888" :duration="3000" class="num"></count-to>
      </div>
      <div class="flex-between">
        <div class="trawler-overview-item">
          <div class="trawler-overview-wrapper flex">
            <img src="@/assets/image/people/icon-crew-arrival.png" class="item-icon" />
            <div class="content"><span class="label">保险过期人员</span><span class="num">3</span></div>
          </div>
        </div>
        <div class="trawler-overview-item">
          <div class="trawler-overview-wrapper flex">
            <img src="@/assets/image/people/icon-crew-arrival.png" class="item-icon" />
            <div class="content"><span class="label">证书过期人员</span><span class="num">1</span></div>
          </div>
        </div>
        <div class="trawler-overview-item">
          <div class="trawler-overview-wrapper flex">
            <img src="@/assets/image/people/icon-crew-arrival.png" class="item-icon" />
            <div class="content"><span class="label">超长作业人员</span><span class="num">8</span></div>
          </div>
        </div>
      </div>

      <div class="list">
        <div class="top">
          <v-title title="培训记录"></v-title>
          <div class="cont">
            <div class="nav">
              <div>培训名称</div>
              <div>培训类型</div>
              <div>培训时间</div>
            </div>
            <div class="content">
              <vue3-seamless-scroll :list="state.recordList" :step="0.3" :hover="true" :limitScrollNum="6">
                <div class="row" v-for="(item, index) in state.recordList" :key="index">
                  <div>{{ item.name }}</div>
                  <div>{{ item.type }}</div>
                  <div>{{ item.date }}</div>
                </div>
              </vue3-seamless-scroll>
            </div>
          </div>
        </div>
        <div class="bottom">
          <v-title title="船员违规"></v-title>
          <div class="cont">
            <div class="nav">
              <div>姓名</div>
              <div>违规类型</div>
              <div>违规时间</div>
            </div>
            <div class="content">
              <vue3-seamless-scroll :list="state.ruleList" :step="0.3" :hover="true" :limitScrollNum="6">
                <div class="row" v-for="(item, index) in state.ruleList" :key="index">
                  <div>{{ item.name }}</div>
                  <div>{{ item.type }}</div>
                  <div>{{ item.date }}</div>
                </div>
              </vue3-seamless-scroll>
            </div>
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
      name: '港口卫生',
      type: '日常培训',
      date: '2022-12-21',
    },
    {
      name: '海上大风安全自救',
      type: '安全生产第一课',
      date: '2022-12-24',
    },
    {
      name: '海上大风翻船自救',
      type: '安全生产第一课',
      date: '2022-12-25',
    },
    {
      name: '船员行为规范',
      type: '日常培训',
      date: '2022-12-28',
    },
    {
      name: '开海管理',
      type: '日常培训',
      date: '2022-12-31',
    },
    {
      name: '海上台风来袭',
      type: '安全生产第一课',
      date: '2023-1-3',
    },
    {
      name: '海上船舶机械故障',
      type: '安全生产第一课',
      date: '2023-1-5',
    },
  ],
  ruleList: [
    {
      name: '张结清',
      type: '证书违规',
      date: '2022-12-21',
    },
    {
      name: '张执满',
      type: '证书违规',
      date: '2022-12-24',
    },
    {
      name: '张华',
      type: '行为违规',
      date: '2022-12-25',
    },
    {
      name: '何三珠',
      type: '行为违规',
      date: '2022-12-28',
    },
    {
      name: '张执发',
      type: '证书违规',
      date: '2022-12-31',
    },
    {
      name: '黄正',
      type: '行为违规',
      date: '2023-1-3',
    },
    {
      name: '何伍毅',
      type: '证书违规',
      date: '2023-1-5',
    },
  ],
});
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

.trawler-overview-item {
  padding: 13px 0;
  background-image: linear-gradient(
    0deg,
    rgba(99, 163, 255, 0.02),
    rgba(22, 127, 255, 0.2) 50%,
    rgba(114, 190, 255, 0.02)
  );

  .trawler-overview-wrapper {
    border-left: 1px solid #ffa840;
    padding: 8px 0;
    width: 140px;

    .item-icon {
      width: 28px;
      margin: 0 10px;
    }

    .content {
      align-items: flex-start;
      display: flex;
      flex-direction: column;

      .label {
        font-size: 14px;
        margin-bottom: 4px;
      }

      .num {
        color: #04dcf6;
        font-size: 24px;
      }
    }
  }
}

.list {
  height: calc(100% - 170px);

  .top,
  .bottom {
    height: calc(50% - 10px);
  }

  .top {
    margin-bottom: 20px;
  }

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
        width: 30%;
      }
      :nth-child(2) {
        width: 35%;
      }
      :nth-child(3) {
        width: 35%;
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
          width: 30%;
        }
        :nth-child(2) {
          width: 35%;
        }
        :nth-child(3) {
          width: 35%;
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
