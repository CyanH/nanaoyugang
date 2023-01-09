<template>
  <left-drawer></left-drawer>
  <component :is="currentComponent"></component>
  <template v-if="show">
    <quan-jin :list="list"></quan-jin>
  </template>

  <component :is="mapComponent"></component>
</template>

<script setup lang="ts">
import { useCommonStore } from '@/store';
import emitter from '@/utils/eventbus';
import { defineAsyncComponent, markRaw, onMounted, onUnmounted, ref, watch } from 'vue';

const leftDrawer = markRaw(defineAsyncComponent(() => import('./port/leftDrawer.vue')));
const rightDrawer = markRaw(defineAsyncComponent(() => import('./port/rightDrawer.vue')));
const mapView = markRaw(defineAsyncComponent(() => import('./port/map.vue')));
const modelView = markRaw(defineAsyncComponent(() => import('./port/model.vue')));
const gangKoDrawer = markRaw(defineAsyncComponent(() => import('./left/left.vue')));
const quanJin = markRaw(defineAsyncComponent(() => import('./left/quanjin.vue')));
const currentComponent = ref(rightDrawer);
const mapComponent = ref();
const show = ref(false);
const list = ref('');
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
    currentComponent.value = gangKoDrawer;
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

emitter.on('clickWuDrawer', (item: any) => {
  console.log(item);
  show.value = item.flag;
  if (item.name === '云澳中心渔港') {
    list.value =
      'http://14.23.111.138:92/attachment/%E5%85%A8%E6%99%AF%E5%9B%BE/%E6%B1%95%E5%A4%B4%E5%B8%82/%E4%BA%91%E6%BE%B3%E4%B8%AD%E5%BF%83%E6%B8%94%E6%B8%AF/index.html';
  } else if (item.name === '吴平寨渔港') {
    list.value =
      'http://14.23.111.138:92/attachment/%E5%85%A8%E6%99%AF%E5%9B%BE/%E6%B1%95%E5%A4%B4%E5%B8%82/%E5%90%B4%E5%B9%B3%E5%AF%A8%E7%A0%81%E5%A4%B4/index.html';
  } else if (item.name === '后江渔港') {
    list.value =
      'http://14.23.111.138:92/attachment/%E5%85%A8%E6%99%AF%E5%9B%BE/%E6%B1%95%E5%A4%B4%E5%B8%82/%E5%90%8E%E6%B1%9F%E6%B8%94%E6%B8%AF/index.html';
  }
  console.log(list.value);
});

onUnmounted(() => {
  emitter.emit('setRightDrawer', '');
});
</script>
