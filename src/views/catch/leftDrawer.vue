<template>
  <v-drawer direction="left" hasArrow>
    <v-card>
      <v-title title="渔获概况"></v-title>
      <div class="flex wrapper">
        <img src="@/assets/image/catch/icon-ashore.png" class="icon" />
        <span class="label">今日上岸数</span>
        <count-to :startVal="0" :endVal="1725" :duration="3000" class="num"></count-to>
        <span>船次</span>
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
</style>
