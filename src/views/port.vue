<template>
  <left-drawer></left-drawer>
  <component :is="currentComponent"></component>
  <template v-if="show">
    <quan-jin :list="list"></quan-jin>
  </template>
  <map-view></map-view>
</template>

<script setup lang="ts">
import emitter from '@/utils/eventbus';
import mapView from './port/map.vue';
import { defineAsyncComponent, markRaw, onMounted, onUnmounted, ref } from 'vue';

const leftDrawer = markRaw(defineAsyncComponent(() => import('./port/leftDrawer.vue')));
const rightDrawer = markRaw(defineAsyncComponent(() => import('./port/rightDrawer.vue')));
const gangKoDrawer = markRaw(defineAsyncComponent(() => import('./left/left.vue')));
const quanJin = markRaw(defineAsyncComponent(() => import('./left/quanjin.vue')));
const currentComponent = ref(rightDrawer);
const show = ref(false);
let list = ref('');
onMounted(() => {
  emitter.on('setRightDrawer', (name) => {
    if (name === 'event') {
      //
    } else if(name === 'gangKo'){
      console.log('111');
      currentComponent.value = gangKoDrawer;
    } else {
      currentComponent.value = rightDrawer;
    }
  });

});
emitter.on('clickWuDrawer', (item: any) => {
  console.log(item);
  show.value = item.flag;
  if(item.name === '云澳中心渔港'){
    list.value = 'http://14.23.111.138:92/attachment/%E5%85%A8%E6%99%AF%E5%9B%BE/%E6%B1%95%E5%A4%B4%E5%B8%82/%E4%BA%91%E6%BE%B3%E4%B8%AD%E5%BF%83%E6%B8%94%E6%B8%AF/index.html'
  }else if(item.name === '吴平寨渔港'){
    list.value = 'http://14.23.111.138:92/attachment/%E5%85%A8%E6%99%AF%E5%9B%BE/%E6%B1%95%E5%A4%B4%E5%B8%82/%E5%90%B4%E5%B9%B3%E5%AF%A8%E7%A0%81%E5%A4%B4/index.html'
  }else if(item.name === '后江渔港'){
    list.value = 'http://14.23.111.138:92/attachment/%E5%85%A8%E6%99%AF%E5%9B%BE/%E6%B1%95%E5%A4%B4%E5%B8%82/%E5%90%8E%E6%B1%9F%E6%B8%94%E6%B8%AF/index.html'
  }
  console.log(list.value);
  
});

onUnmounted(() => {
  emitter.emit('setRightDrawer', '');
});
</script>
