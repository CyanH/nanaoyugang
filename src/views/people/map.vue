<template></template>

<script setup lang="ts">
import * as mars3d from 'mars3d';
import { useCommonStore } from '@/store';
import { onMounted, onUnmounted } from 'vue';

const commonStore = useCommonStore();
const graphicLayer = new mars3d.layer.GraphicLayer();

onMounted(() => {
  commonStore.map?.setCameraView({ lat: 23.112589, lng: 117.060851, alt: 17756.5, heading: 357.2, pitch: -26.3 });
  commonStore.map?.addLayer(graphicLayer);

  mars3d.Util.fetchJson({ url: 'config/data.json' })
    .then(function (res) {
      loadChart(res.data); // 柱状图
    })
    .catch(function () {
      console.log('获取信息失败，请稍候再试');
    });
});

const loadChart = (data: any) => {
  for (let i = 0; i < data.length; i += 1) {
    const attr = data[i];

    const html = `<div style="line-height:22px">
                  <div style="font-size:16px">${attr.name}</div>
                  <div style="color:#63AEFF">在籍船员：${attr.people}</div>
                  </div>`;

    const height = attr.people * 5;

    const p = mars3d.Cesium.Cartesian3.fromDegrees(attr.lng, attr.lat, height / 2);

    // 添加柱体
    createBar(p, height, '#63AEFF', html);

    // 添加文字
    const graphic = new mars3d.graphic.LabelPrimitive({
      position: mars3d.Cesium.Cartesian3.fromDegrees(attr.lng, attr.lat, height),
      style: {
        text: attr.people,
        font_size: 24,
        font_family: '楷体',
        color: '#0EF5BC',
        outline: true,
        outlineColor: '#000000',
        outlineWidth: 1,
        horizontalOrigin: mars3d.Cesium.HorizontalOrigin.CENTER,
        verticalOrigin: mars3d.Cesium.VerticalOrigin.BOTTOM,
        pixelOffset: new mars3d.Cesium.Cartesian2(0, -20),
        scaleByDistance: true,
        scaleByDistance_far: 1000000,
        scaleByDistance_near: 1,
      },
    });
    graphicLayer.addGraphic(graphic);
    graphic.bindTooltip(html);
  }
};

const createBar = (position: mars3d.Cesium.Cartesian3, len: number, color: string, html: string) => {
  const graphic = new mars3d.graphic.CylinderEntity({
    position: position,
    style: {
      length: len,
      topRadius: 400.0,
      bottomRadius: 400.0,
      color: color,
    },
  });
  graphicLayer.addGraphic(graphic);
  graphic.bindTooltip(html);
  return graphic;
};

onUnmounted(() => {
  commonStore.map?.removeLayer(graphicLayer);
});
</script>
