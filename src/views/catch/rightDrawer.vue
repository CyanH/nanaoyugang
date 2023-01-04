<template>
  <v-drawer direction="right" hasArrow>
    <v-card>
      <div class="top">
        <v-title title="供需物流"></v-title>
        <div class="flex-between wrapper">
          <div>
            <div class="num">1210</div>
            <div class="label">供货统计/吨</div>
          </div>
          <div>
            <div class="num">820</div>
            <div class="label">求购统计/吨</div>
          </div>
          <div>
            <div class="num">121</div>
            <div class="label">车辆需求统计</div>
          </div>
          <div>
            <div class="num">107</div>
            <div class="label">车辆供应统计</div>
          </div>
        </div>
      </div>

      <div class="bottom">
        <div class="bt-top">
          <v-title title="渔获电子交易市场统计"></v-title>

          <div class="chart"></div>
        </div>

        <div class="bt-bottom">
          <v-title title="价格走势分析"></v-title>

          <div class="chart"></div>
        </div>
      </div>
    </v-card>
  </v-drawer>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.top {
  padding-bottom: 20px;
  .wrapper {
    margin-top: 20px;
    .num {
      width: 60px;
      height: 60px;
      font-size: 16px;
      background: url('@/assets/image/catch/icon-gx.png') center no-repeat;
      background-size: 100% 100%;
      text-align: center;
      line-height: 60px;
      margin: auto;
    }

    .label {
      margin-top: 10px;
      font-size: 14px;
    }
  }
}

.bottom {
  height: calc(100% - 164px);

  .bt-top,
  .bt-bottom {
    height: calc(50% - 10px);
  }

  .bt-top {
    margin-bottom: 20px;
  }

  .chart {
    height: calc(100% - 55px);
    margin-top: 17px;
  }
}
</style>
