<!-- <template>
  <div id="cesiumContainer" class="model"></div>
</template>

<script setup lang="ts">
import * as Cesium from 'cesium';
import { onMounted, onUnmounted, watch } from 'vue';
import emitter from '@/utils/eventbus';
import { useParkStore } from '@/store';
import { cyyImplementations, getPlantBase, cyyprojectManagement } from '@/api/industrial';
import GlobeTooltip from '@/utils/globeTooltip';
import { data } from '@/assets/json/area.json';

const parkStore = useParkStore();
let oldEntity: any;
let oldEntities = [] as Cesium.Entity[];
let toolTip: GlobeTooltip;
let projectArr = [] as any[];

let viewer: any;

onMounted(() => {});

watch(
  () => parkStore.chooseIndex,
  (index) => {
    oldEntities.map((entity) => {
      viewer.entities.remove(entity);
    });
    oldEntities = [];
    if (index === 0) {
      createAllEntity();
    } else if (index === 1) {
      createOverAll();
    } else if (index === 2) {
      createSubject();
    } else if (index === 3) {
      createBreedBase();
    } else if (index === 4) {
      cyyprojectManagement({ size: 50 }).then((res: any) => {
        projectArr = res.content;
        createProject();
      });
    } else if (index === 5) {
      createFarmer();
    }
  }
);

watch(
  () => parkStore.projectChooseIndex,
  () => {
    oldEntities.map((entity) => {
      viewer.entities.remove(entity);
    });
    oldEntities = [];
    createProject();
  }
);

//所有实体
const createAllEntity = () => {
  createOverAll(); //总体规划
  createSubject();
  createBreedBase();
  cyyprojectManagement({ size: 50 }).then((res: any) => {
    projectArr = res.content;
    projectArr.map((it: any) => {
      it.clickType = 'project';

      let entity = viewer.entities.add({
        name: 'point',
        position: Cesium.Cartesian3.fromDegrees(parseFloat(it.resultVideo), parseFloat(it.resultAddress), 2.38),
        properties: { param: it },
        billboard: {
          image: getImgUrl('i_xm.png'), //图标
          scale: 0.8,

          disableDepthTestDistance: Number.POSITIVE_INFINITY,
        },
      });
      oldEntities.push(entity);
    });
  });
};

//总体规划
const createOverAll = () => {
  const arr = [
    {
      name: '万亩水产融合发展核心区',
      x: -0.000042,
      y: -0.000183,
      z: 4.5,
      img: getImgUrl('gh_hxqt.png'),
      horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
      verticalOrigin: Cesium.VerticalOrigin.CENTER,
    },
    {
      name: '万亩水产融合发展核心区',
      x: -0.000042,
      y: -0.000183,
      z: 2.38,
      img: getImgUrl('gh_hxq.png'),
      horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
      verticalOrigin: Cesium.VerticalOrigin.CENTER,
    },
    {
      name: '健康水产标准化养殖示范区',
      x: -0.000008,
      y: -0.000139,
      z: 2.38,
      img: getImgUrl('gh_sfq.png'),
    },
    {
      name: '水产品牌建设与营销推广重点区',
      x: -0.00002,
      y: -0.000205,
      z: 2.38,
      img: getImgUrl('gh_zdq.png'),
    },
  ];
  arr.map((it) => {
    let entity = viewer.entities.add({
      name: 'overall',
      properties: { param: { clickType: 'overall', name: it.name } },
      position: Cesium.Cartesian3.fromDegrees(it.x, it.y, it.z),
      billboard: {
        image: it.img, //图标
        scaleByDistance: new Cesium.NearFarScalar(1.7e2, 1, 9e2, 0.2),
        disableDepthTestDistance: Number.POSITIVE_INFINITY,
      },
    });
    oldEntities.push(entity);
  });

  data.map((item) => {
    let position = [] as Cesium.Cartesian3[];
    item.positions.map((it) => {
      position.push(new Cesium.Cartesian3(it.x, it.y, it.z));
    });

    let entity = viewer.entities.add({
      polygon: {
        hierarchy: new Cesium.PolygonHierarchy(position),
        height: 2.38,
        material: Cesium.Color.fromCssColorString(item.color).withAlpha(0.5),
        outline: true,
        outlineColor: Cesium.Color.fromCssColorString(item.color),
      },
    });
    oldEntities.push(entity);
  });
};

//实施主体
const createSubject = () => {
  cyyImplementations().then((res: any) => {
    let arr = res.content;
    let imgArr = {
      0: getImgUrl('zt_ltqy.png'),
      2: getImgUrl('zt_qtqy.png'),
      3: getImgUrl('zt_qt.png'),
    };
    arr.map((it: any, index: number) => {
      let image = imgArr[it.kind as keyof typeof imgArr];

      it.clickType = 'subject';
      let entity = viewer.entities.add({
        name: 'point',
        position: Cesium.Cartesian3.fromDegrees(Number(it.by1), Number(it.by2), 2.38),
        properties: { param: it },
        billboard: {
          image, //图标
          scale: 0.8,
          verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
          disableDepthTestDistance: Number.POSITIVE_INFINITY,
        },
      });
      oldEntities.push(entity);
    });
  });
};

//种植基地
const createBreedBase = () => {
  getPlantBase().then((res: any) => {
    let arr = res.content;
    arr.map((it: any) => {
      it.clickType = 'breedBase';
      it.name = it.plantBaseName;
      let entity = viewer.entities.add({
        name: 'point',
        position: Cesium.Cartesian3.fromDegrees(it.by1, it.by2, 2.38),
        properties: { param: it },
        billboard: {
          image: getImgUrl('i_yzjd.png'), //图标
          scale: 0.8,

          disableDepthTestDistance: Number.POSITIVE_INFINITY,
        },
      });
      oldEntities.push(entity);
    });
  });
};

//建设项目
const createProject = () => {
  projectArr.map((it: any) => {
    it.clickType = 'project';
    let image = '';
    if (parkStore.projectChooseIndex === 0) {
      //根据类型渲染
      let imageObj = {
        产业融合: getImgUrl('i_cyrh.png'),
        土地流转: getImgUrl('i_tdlz.png'),
        农业设施: getImgUrl('i_nyss.png'),
        科技研发与信息支撑: getImgUrl('i_kjxx.png'),
        公共区域品牌: getImgUrl('i_ggqy.png'),
        统筹资金: getImgUrl('i_dktx.png'),
        其他: getImgUrl('i_qt.png'),
      };
      image = imageObj[it.level as keyof typeof imageObj];
    } else if (parkStore.projectChooseIndex === 1) {
      //根据进度渲染
      if (it.progress == 0) {
        image = getImgUrl('i_wkg.png');
      } else if (it.progress < 100) {
        image = getImgUrl('i_sgz.png');
      } else if (it.progress >= 100) {
        image = getImgUrl('i_ywg.png');
      } else {
        image = getImgUrl('i_wkg.png');
      }
    } else {
      //根据资金渲染
      if (it.total <= 50) {
        image = getImgUrl('i_xm_ws.png');
      } else if (it.total > 50 && it.total <= 100) {
        image = getImgUrl('i_xm_yb.png');
      } else if (it.total > 100 && it.total <= 200) {
        image = getImgUrl('i_xm_lb.png');
      } else if (it.total > 200) {
        image = getImgUrl('i_xm_dylb.png');
      }
    }

    let entity = viewer.entities.add({
      name: 'point',
      position: Cesium.Cartesian3.fromDegrees(parseFloat(it.resultVideo), parseFloat(it.resultAddress), 2.38),
      properties: { param: it },
      billboard: {
        image, //图标
        scale: 0.8,

        disableDepthTestDistance: Number.POSITIVE_INFINITY,
      },
    });
    oldEntities.push(entity);
  });
};

//实施主体
const createFarmer = () => {
  cyyImplementations().then((res: any) => {
    let arr = res.content;

    arr.map((it: any) => {
      let entity = viewer.entities.add({
        name: 'farmer',
        position: Cesium.Cartesian3.fromDegrees(Number(it.by1), Number(it.by2), 2.38),
        properties: { param: it },
        billboard: {
          image: getImgUrl('farmer.png'), //图标
          scale: 0.8,
          verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
          disableDepthTestDistance: Number.POSITIVE_INFINITY,
        },
      });
      oldEntities.push(entity);
    });
  });
};

const getImgUrl = (url: string) => {
  return new URL(`../../assets/image/industrialPark/${url}`, import.meta.url).href;
};

onUnmounted(() => {});
</script> -->
