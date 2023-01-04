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
            <div class="content"><span class="label">在港船员</span><span class="num">123</span></div>
          </div>
        </div>
        <div class="trawler-overview-item">
          <div class="trawler-overview-wrapper flex">
            <img src="@/assets/image/people/icon-crew-arrival.png" class="item-icon" />
            <div class="content"><span class="label">在外作业人员</span><span class="num">720</span></div>
          </div>
        </div>
        <div class="trawler-overview-item">
          <div class="trawler-overview-wrapper flex">
            <img src="@/assets/image/people/icon-crew-arrival.png" class="item-icon" />
            <div class="content"><span class="label">超长作业人员</span><span class="num">45</span></div>
          </div>
        </div>
      </div>

      <div class="list">
        <div class="top">
          <v-title title="培训记录"></v-title>
        </div>
        <div class="bottom">
          <v-title title="船员违规"></v-title>
        </div>
      </div>
    </v-card>
  </v-drawer>
</template>

<script setup lang="ts">
import { CountTo } from 'vue3-count-to';
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
}
</style>
