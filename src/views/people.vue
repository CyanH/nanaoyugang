<template>
  <left-drawer></left-drawer>
  <right-drawer></right-drawer>
  <map-view></map-view>
</template>

<script setup lang="ts">
import emitter from '@/utils/eventbus';
import { defineAsyncComponent, markRaw, onUnmounted } from 'vue';

const leftDrawer = markRaw(defineAsyncComponent(() => import('./people/leftDrawer.vue')));
const rightDrawer = markRaw(defineAsyncComponent(() => import('./people/rightDrawer.vue')));
const mapView = markRaw(defineAsyncComponent(() => import('./people/map.vue')));

onUnmounted(() => {
  emitter.emit('setRightDrawer', '');
});
</script>
