<template>
  <left-drawer></left-drawer>
  <component :is="currentComponent"></component>

  <component :is="mapComponent"></component>
</template>

<script setup lang="ts">
import { useCommonStore } from '@/store';
import emitter from '@/utils/eventbus';
import { defineAsyncComponent, markRaw, onMounted, onUnmounted, ref, watch } from 'vue';

const leftDrawer = markRaw(defineAsyncComponent(() => import('./trawler/leftDrawer.vue')));
const rightDrawer = markRaw(defineAsyncComponent(() => import('./trawler/rightDrawer.vue')));
const mapView = markRaw(defineAsyncComponent(() => import('./trawler/map.vue')));
const modelView = markRaw(defineAsyncComponent(() => import('./trawler/model.vue')));
const chuan = markRaw(defineAsyncComponent(() => import('./left/chuan.vue')));
const currentComponent = ref(rightDrawer);
const mapComponent = ref();
const commonStore = useCommonStore();

onMounted(() => {
  changeMapComponent();
});

watch(
  () => commonStore.mapComponent,
  () => {
    changeMapComponent();
  }
);

emitter.on('setRightDrawer', (name) => {
  if (name === 'gangKo') {
    currentComponent.value = chuan;
  } else {
    currentComponent.value = rightDrawer;
  }
});

const changeMapComponent = () => {
  if (commonStore.mapComponent === 'mapView') {
    mapComponent.value = mapView;
  } else {
    mapComponent.value = modelView;
  }
};

onUnmounted(() => {
  emitter.emit('setRightDrawer', '');
});
</script>
