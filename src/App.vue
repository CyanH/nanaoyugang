<template>
  <div class="container">
    <header-view />
    <div class="content">
      <router-view />
    </div>
    <footer-view />

    <div v-show="commonStore.mapVisible" id="marsMap" class="mars3d-container"></div>

    <div class="chooseBar flex" v-show="commonStore.mapVisible">
      <div :class="choose === 0 ? 'choose' : ''" style="margin-right: 10px" @click="handleClick(0)">地图</div>
      <div :class="choose === 1 ? 'choose' : ''" @click="handleClick(1)">模型</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as mars3d from 'mars3d';
import { defineAsyncComponent, markRaw, onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useCommonStore } from './store';
import headerView from './common/header.vue';
import { getDefaultContextMenu } from '@/utils/getDefaultContextMenu';

const footerView = markRaw(defineAsyncComponent(() => import('./common/footer.vue')));
const configUrl = 'config/config.json';
const commonStore = useCommonStore();
const route = useRoute();
const choose = ref(0);

watch(
  () => route.path,
  (val) => {
    if (val === '/' || val === '/trawler') {
      commonStore.setMapVisible(true);
    } else {
      commonStore.setMapVisible(false);
    }
  }
);

onMounted(() => {
  createMap();
});

const createMap = async () => {
  await mars3d.Util.fetchJson({ url: configUrl }).then((data: any) => {
    const map = new mars3d.Map('marsMap', data.map3d);
    // 绑定当前项目的默认右键菜单
    map.bindContextMenu(getDefaultContextMenu(map));
    createLayer(map);
    const rawMap = markRaw(map);
    commonStore.setMap(rawMap);
  });
};

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

const handleClick = (index: number) => {
  if (choose.value === index) return;
  choose.value = index;
  commonStore.map?.destroy();
  commonStore.setMap(null);
  if (index === 0) {
    createMap().then(() => {
      commonStore.setMapComponent('mapView');
    });
  } else {
    const mapOptions = {
      scene: {
        center: { lat: 23.337809, lng: 117.035226, alt: 12.1, heading: 278.6, pitch: -34.6 },
        showSun: false,
        showMoon: false,
        showSkyBox: false,
        showSkyAtmosphere: false,
        fog: false,
        contextOptions: {
          webgl: {
            alpha: true,
          },
        },
        globe: {
          show: false,
          showGroundAtmosphere: false,
          enableLighting: false,
        },
      },
      control: {
        baseLayerPicker: false,
      },
      basemaps: [],
      layers: [],
    };
    const map = new mars3d.Map('marsMap', mapOptions);
    map.bindContextMenu(getDefaultContextMenu(map));

    const graphicLayer = new mars3d.layer.GraphicLayer({
      name: '模型',
      data: [
        {
          type: 'model',
          position: [117.035067, 23.337833, 0],
          style: {
            url: 'model/model.glb',
            scale: 1,
          },
        },
      ],
      flyTo: true,
    });
    map.addLayer(graphicLayer);
    const rawMap = markRaw(map);
    commonStore.setMap(rawMap);

    commonStore.setMapComponent('modelView');
  }
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
.chooseBar {
  position: absolute;
  left: 27%;
  top: 83px;
  z-index: 9;
  background-color: rgba(17, 16, 45, 0.7);
  padding: 10px 15px;
  border-radius: 25px;
  font-size: 14px;

  div {
    cursor: pointer;
  }

  .choose {
    color: #00f6ff;
  }
}
</style>
