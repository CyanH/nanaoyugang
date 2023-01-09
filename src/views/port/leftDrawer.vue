<template>
  <v-drawer direction="left" hasArrow>
    <v-card>
      <div class="one">
        <v-title title="港区概况"></v-title>
        <one></one>
      </div>

      <div class="two">
        <v-title title="休闲渔业"></v-title>
        <bottom-view></bottom-view>
      </div>
    </v-card>
  </v-drawer>
</template>

<script setup lang="ts">
import bottomView from './newDrawer/bottom.vue';
import one from './newDrawer/one.vue';
</script>

<style lang="scss" scoped>
.one {
  height: 65%;
  margin-bottom: 8px;
}
.two {
  height: calc(35% - 8px);
}
</style>
