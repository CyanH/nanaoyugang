<template></template>

<script setup lang="ts">
import * as mars3d from 'mars3d';
import { useCommonStore } from '@/store';
import { onMounted, onUnmounted } from 'vue';
import shipImg from '@/assets/image/trawler/ship.svg';
import emitter from '@/utils/eventbus';
import { useBreedStore } from '@/store';
const breedStore = useBreedStore();
const commonStore = useCommonStore();
const graphicLayer = new mars3d.layer.GraphicLayer();

onMounted(() => {
  commonStore.model?.addLayer(graphicLayer);

  let arr = [
    {
      lng: 117.035033,
      lat: 23.337851,
      name: '粤汕渔05417',
    },
    {
      lng: 117.035086,
      lat: 23.337802,
      name: '粤汕渔78723',
    },
    {
      lng: 117.035046,
      lat: 23.33778,
      name: '粤汕渔01388',
    },
    {
      lng: 117.03509,
      lat: 23.337826,
      name: '粤汕渔53242',
    },
    {
      lng: 117.035022,
      lat: 23.337805,
      name: '粤汕渔45632',
    },
    {
      lng: 117.035038,
      lat: 23.33782,
      name: '粤汕渔63521',
    },
    {
      lng: 117.035096,
      lat: 23.337873,
      name: '粤汕渔23156',
    },
  ];

  arr.map((it) => {
    let graphic = new mars3d.graphic.BillboardEntity({
      position: new mars3d.LngLatPoint(it.lng, it.lat, 0),
      style: {
        image: shipImg,
        scale: 0.25,
        clampToGround: true,
        scaleByDistance: true,
        scaleByDistance_far: 800,
        scaleByDistance_near: 1,
        visibleDepth: false,
      },
      attr: { name: it.name },
    });
    graphicLayer.addGraphic(graphic);
  });

  graphicLayer.bindTooltip((event) => {
    const attr = event.graphic.attr;
    return attr.name;
  });
  graphicLayer.on(mars3d.EventType.click, (event) => {
    breedStore.setChuanName(event.sourceTarget._name);
    emitter.emit('setRightDrawer', 'gangKo');
  });
});
onUnmounted(() => {
  commonStore.model?.removeLayer(graphicLayer);
});
</script>
