<template>
  <left-drawer></left-drawer>
  <component :is="currentComponent"></component>

  <map-view></map-view>
</template>

<script setup lang="ts">
import emitter from '@/utils/eventbus';
import { defineAsyncComponent, markRaw, onMounted, onUnmounted, ref } from 'vue';

const leftDrawer = markRaw(defineAsyncComponent(() => import('./trawler/leftDrawer.vue')));
const rightDrawer = markRaw(defineAsyncComponent(() => import('./trawler/rightDrawer.vue')));
const mapView = markRaw(defineAsyncComponent(() => import('./trawler/map.vue')));
const currentComponent = ref(rightDrawer);

onMounted(() => {
  emitter.on('setRightDrawer', (name) => {
    if (name === 'event') {
      //
    } else {
      currentComponent.value = rightDrawer;
    }
  });
});

onUnmounted(() => {
  emitter.emit('setRightDrawer', '');
});
</script>
