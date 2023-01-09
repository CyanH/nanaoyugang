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
  commonStore.map?.addLayer(graphicLayer);

  let arr = [
    {
      lng: 117.094195,
      lat: 23.408295,
      name: '粤汕渔05417',
    },
    {
      lng: 117.104857,
      lat: 23.478669,
      name: '粤汕渔78723',
    },
    {
      lng: 117.025983,
      lat: 23.445645,
      name: '粤汕渔01388',
    },
    {
      lng: 117.06321,
      lat: 23.396924,
      name: '粤汕渔53242',
    },
    {
      lng: 117.013165,
      lat: 23.486787,
      name: '粤汕渔45632',
    },
    {
      lng: 117.027372,
      lat: 23.473333,
      name: '粤汕渔63521',
    },
    {
      lng: 116.991423,
      lat: 23.404527,
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
        scaleByDistance_far: 1000000,
        scaleByDistance_near: 1,
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
  commonStore.map?.removeLayer(graphicLayer);
});
</script>
