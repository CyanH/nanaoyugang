<template>
  <left-drawer></left-drawer>
  <map-view></map-view>
  <right-drawer></right-drawer>
</template>

<script setup lang="ts">
import emitter from '@/utils/eventbus';
import { defineAsyncComponent, markRaw, onUnmounted,reactive } from 'vue';

const leftDrawer = markRaw(defineAsyncComponent(() => import('./people/leftDrawer.vue')));
const rightDrawer = markRaw(defineAsyncComponent(() => import('./people/rightDrawer.vue')));
const mapView = markRaw(defineAsyncComponent(() => import('./people/map.vue')));
onUnmounted(() => {
  emitter.emit('setRightDrawer', '');
});
</script>
<style lang="scss" scoped>
  
</style>
