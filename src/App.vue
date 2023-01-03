<template>
  <div class="container">
    <header-view />
    <div class="content">
      <router-view />
    </div>
    <footer-view />
    <div id="marsMap" class="mars3d-container"></div>
  </div>
</template>

<script setup lang="ts">
import * as mars3d from 'mars3d';
import { defineAsyncComponent, markRaw, onMounted } from 'vue';
import { useCommonStore } from './store';
import headerView from './common/header.vue';
import { getDefaultContextMenu } from '@/utils/getDefaultContextMenu';

const footerView = markRaw(defineAsyncComponent(() => import('./common/footer.vue')));
const configUrl = 'config/config.json';
const commonStore = useCommonStore();

onMounted(() => {
  mars3d.Util.fetchJson({ url: configUrl }).then((data: any) => {
    const map = new mars3d.Map('marsMap', data.map3d);
    // 绑定当前项目的默认右键菜单
    map.bindContextMenu(getDefaultContextMenu(map));
    createLayer(map);
    const rawMap = markRaw(map);
    commonStore.setMap(rawMap);
  });
});

const createLayer = (map: mars3d.Map) => {
  const graphicLayer = new mars3d.layer.GraphicLayer();
  map.addLayer(graphicLayer);
  const graphic = new mars3d.graphic.PolygonEntity({
    positions: [
      [116.968186, 23.476081, -12.2],
      [116.925348, 23.43685, 6.7],
      [116.933415, 23.414842, 6.4],
      [117.012963, 23.406191, 6.9],
      [117.052311, 23.392917, 6.9],
      [117.080257, 23.398686, 6.9],
      [117.106478, 23.381615, 7],
      [117.133762, 23.384258, 6.9],
      [117.153385, 23.408663, 6.8],
      [117.152659, 23.463117, 7],
      [117.141522, 23.46853, 6.9],
      [117.132187, 23.497029, 6.9],
      [117.034909, 23.484999, 6.9],
    ],
    style: {
      color: '#4a8df8',
      opacity: 0.2,
      outline: true,
      outlineWidth: 2,
      outlineColor: '#4a8df8',
      label: {
        text: '汕头南澳\n国家级沿海渔港经济区',
        font_size: 36,
        font_family: '楷体',
        color: '#00ffff',
        outline: true,
        outlineColor: '#000000',
        outlineWidth: 2,
        scaleByDistance: true,
        scaleByDistance_far: 1000000,
        scaleByDistance_near: 1,
      },
    },
  });
  graphicLayer.addGraphic(graphic);
};
</script>

<style lang="scss" scoped>
.container {
  background: url('@/assets/image/background.png') center no-repeat;
  height: 100%;
  background-size: 100% 100%;
}

.content {
  height: calc(100% - 83px);
  position: relative;
  overflow: hidden;
}

.mars3d-container {
  position: fixed;
  top: 0;
  left: 0;
}
</style>
