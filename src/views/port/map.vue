<template></template>

<script setup lang="ts">
import * as mars3d from 'mars3d';
import { useCommonStore } from '@/store';
import { onMounted, onUnmounted } from 'vue';
import portImg from '@/assets/image/port/port.svg';
import emitter from '@/utils/eventbus';
import { useBreedStore } from '@/store';
const breedStore = useBreedStore();
const commonStore = useCommonStore();
const graphicLayer = new mars3d.layer.GraphicLayer();

onMounted(() => {
  commonStore.map?.addLayer(graphicLayer);
  const yaGraphic = new mars3d.graphic.BillboardEntity({
    position: new mars3d.LngLatPoint(117.094195, 23.408295, 0),
    style: {
      image: portImg,
      scale: 0.3,
      clampToGround: true,
      scaleByDistance: true,
      scaleByDistance_far: 1000000,
      scaleByDistance_near: 1,
    },
    attr: { name: '云澳中心渔港' },
  });
  graphicLayer.addGraphic(yaGraphic);
  const wpzGraphic = new mars3d.graphic.BillboardEntity({
    position: new mars3d.LngLatPoint(117.104857, 23.478669, 0),
    style: {
      image: portImg,
      scale: 0.3,
      clampToGround: true,
      scaleByDistance: true,
      scaleByDistance_far: 1000000,
      scaleByDistance_near: 1,
    },
    attr: { name: '吴平寨渔港' },
  });
  graphicLayer.addGraphic(wpzGraphic);
  const hjGraphic = new mars3d.graphic.BillboardEntity({
    position: new mars3d.LngLatPoint(117.025983, 23.445645, 0),
    style: {
      image: portImg,
      scale: 0.3,
      clampToGround: true,
      scaleByDistance: true,
      scaleByDistance_far: 1000000,
      scaleByDistance_near: 1,
      visibleDepth: false,
    },
    attr: { name: '后江渔港' },
  });
  graphicLayer.addGraphic(hjGraphic);
  graphicLayer.bindTooltip((event) => {
    const attr = event.graphic.attr;
    return attr.name;
  });
  graphicLayer.on(mars3d.EventType.click, (event) => {
    console.log(event.sourceTarget._name);
    console.log(event.sourceTarget);
    breedStore.setBaseName(event.sourceTarget._name);
    emitter.emit('setRightDrawer', 'gangKo');
  });
});
onUnmounted(() => {
  commonStore.map?.removeLayer(graphicLayer);
});
</script>
