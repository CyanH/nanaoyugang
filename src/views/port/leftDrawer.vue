<template>
  <v-drawer direction="left" hasArrow>
    <v-card>
      <!-- <v-title title="渔港概况"></v-title>
      <product-middle></product-middle> -->
      <!-- <div class="line"></div> -->
      <v-title title="渔港概况"></v-title>
      <div class="one">
        <one></one>
      </div>
      <!-- <div class="line"></div> -->
      <!-- <income-middle></income-middle> -->
      <v-title title="休闲渔业"></v-title>
      <div class="two">
        <bottom-view></bottom-view>
      </div>
      <!-- <target-view></target-view>
      <div class="line"></div>
      <income-middle></income-middle>
      <div class="line"></div>
      <product-middle></product-middle>
      <div class="line"></div> -->
      
    </v-card>
  </v-drawer>
</template>

<script setup lang="ts">
import bottomView from './newDrawer/bottom.vue';
import one from './newDrawer/one.vue'
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
.one{
  height: 58%;
  margin-bottom: 8px;
}
.two{
  height: 30%;
}
</style>
