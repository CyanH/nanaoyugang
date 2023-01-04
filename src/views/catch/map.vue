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

    const numall = Number(attr.num1 + attr.num2 + attr.num3 + attr.num4).toFixed(2);
    const html = `<div style="line-height:22px">
                  <div style="font-size:16px">${attr.name}</div>
                  <div style="color:#63AEFF">第一季度总产值：${attr.num1}</div>
                  <div style="color:#FFB861">第二季度总产值：${attr.num2}</div>
                  <div style="color:#0EF5BC">第三季度总产值：${attr.num3}</div>
                  <div style="color:#FF6D5D">第四季度总产值：${attr.num3}</div>
                  </div>`;

    const height1 = Math.floor(attr.num1 * 4);
    const height2 = Math.floor(attr.num2 * 4);
    const height3 = Math.floor(attr.num3 * 4);
    const height4 = Math.floor(attr.num4 * 4);

    const p1 = mars3d.Cesium.Cartesian3.fromDegrees(attr.lng, attr.lat, height4 / 2);
    const p2 = mars3d.Cesium.Cartesian3.fromDegrees(attr.lng, attr.lat, height4 + height3 / 2);
    const p3 = mars3d.Cesium.Cartesian3.fromDegrees(attr.lng, attr.lat, height4 + height3 + height2 / 2);
    const p4 = mars3d.Cesium.Cartesian3.fromDegrees(attr.lng, attr.lat, height4 + height3 + height2 + height1 / 2);

    // 添加柱体
    createBar(p1, height4, '#63AEFF', html);
    createBar(p2, height3, '#FFB861', html);
    createBar(p3, height2, '#0EF5BC', html);
    createBar(p4, height1, '#FF6D5D', html);

    // 添加文字
    const graphic = new mars3d.graphic.LabelPrimitive({
      position: mars3d.Cesium.Cartesian3.fromDegrees(attr.lng, attr.lat, height1 + height2 + height3 + height4),
      style: {
        text: numall,
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
