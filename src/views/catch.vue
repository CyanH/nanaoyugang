<template>
  <left-drawer></left-drawer>
  <right-drawer></right-drawer>
</template>

<script setup lang="ts">
import emitter from '@/utils/eventbus';

import { defineAsyncComponent, markRaw, onUnmounted } from 'vue';

const leftDrawer = markRaw(defineAsyncComponent(() => import('./catch/leftDrawer.vue')));
const rightDrawer = markRaw(defineAsyncComponent(() => import('./catch/rightDrawer.vue')));

onUnmounted(() => {
  emitter.emit('setRightDrawer', '');
});
</script>
