<template>
  <left-drawer></left-drawer>
  <component :is="currentComponent"></component>

  <map-view></map-view>
</template>

<script setup lang="ts">
import emitter from '@/utils/eventbus';
import mapView from './port/map.vue';
import { defineAsyncComponent, markRaw, onMounted, onUnmounted, ref } from 'vue';

const leftDrawer = markRaw(defineAsyncComponent(() => import('./port/leftDrawer.vue')));
const rightDrawer = markRaw(defineAsyncComponent(() => import('./port/rightDrawer.vue')));
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
