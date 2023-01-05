<template>
  <v-drawer direction="right" hasArrow>
    <v-card>
       <v-title title="渔船进出动态"></v-title>
       <top-view></top-view>
       <v-title title="告警分析"></v-title>
       <top-two-view></top-two-view>
      <!-- <target-view></target-view> -->
      <!--<div class="line"></div>
      <income-middle></income-middle>
      <div class="line"></div>
      <product-middle></product-middle>
      <div class="line"></div>
      <bottom-view></bottom-view> -->
    </v-card>
  </v-drawer>
</template>

<script setup lang="ts">
import topView from './rightNewDrawer/top.vue';
import topTwoView from './rightNewDrawer/topTwo.vue'
</script>

<style lang="scss" scoped>
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

.legend {
  position: absolute;
  padding: 15px;
  background-color: rgba(17, 16, 45, 0.7);
  border-radius: 2px;
  right: 27%;
  top: 110px;
  color: #fff;
  font-size: 14px;
  z-index: 7;

  .row:not(:last-child) {
    margin-bottom: 12px;
  }

  .icon {
    width: 26px;
    height: 26px;
    margin-right: 15px;
  }
}
</style>
