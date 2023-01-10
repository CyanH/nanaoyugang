<template>
  <left-drawer></left-drawer>
  <right-drawer></right-drawer>
  <map-view></map-view>
</template>

<script setup lang="ts">
import emitter from '@/utils/eventbus';

import { defineAsyncComponent, markRaw, onUnmounted } from 'vue';

const leftDrawer = markRaw(defineAsyncComponent(() => import('./catch/leftDrawer.vue')));
const rightDrawer = markRaw(defineAsyncComponent(() => import('./catch/rightDrawer.vue')));
const mapView = markRaw(defineAsyncComponent(() => import('./catch/map.vue')));

onUnmounted(() => {
  emitter.emit('setRightDrawer', '');
});
</script>
