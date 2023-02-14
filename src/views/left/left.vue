<template>
  <v-drawer direction="right">
    <v-card>
      <v-title :title="states.name" hasClose></v-title>
      <div class="box">
        <div class="left">
          <img :src="getImgUrl(states.list.img)" alt="" />
        </div>
        <div class="right">
          <div class="one">
            <div class="l1">渔港等级</div>
            <div class="l2">{{ states.list.dj }}</div>
          </div>
          <div class="one on1">
            <div class="l1">渔港类型</div>
            <div class="l2">{{ states.list.lx }}</div>
          </div>
          <div class="one on1">
            <div class="l1">渔港所在地</div>
            <div class="l2" :title="states.list.dz">{{ states.list.dz }}</div>
          </div>
          <div class="one on1">
            <div class="l1">机构负责人</div>
            <div class="l2" :title="states.list.fzr">{{ states.list.fzr }}</div>
          </div>
          <div class="one on1">
            <div class="l1">管理机构</div>
            <div class="l2" :title="states.list.jg">{{ states.list.jg }}</div>
          </div>
          <div class="one on1">
            <div class="l1">联系方式</div>
            <div class="l2">{{ states.list.lxfs }}</div>
          </div>
        </div>
      </div>
      <v-title title="水域信息"></v-title>
      <div class="box_two">
        <div class="two">
          <img src="@/assets/image/dian.png" alt="" />
          <div class="title">水域面积</div>
          <div class="content">{{ states.sy.mj }}</div>
        </div>
        <div class="two o1">
          <img src="@/assets/image/dian.png" alt="" />
          <div class="title">码头长度</div>
          <div class="content">{{ states.sy.mtcd }}</div>
        </div>
        <div class="two o1">
          <img src="@/assets/image/dian.png" alt="" />
          <div class="title">码头宽度</div>
          <div class="content">{{ states.sy.mtkd }}</div>
        </div>
        <div class="two o1">
          <img src="@/assets/image/dian.png" alt="" />
          <div class="title">航道宽度</div>
          <div class="content">{{ states.sy.hdkd }}</div>
        </div>
        <div class="two o1">
          <img src="@/assets/image/dian.png" alt="" />
          <div class="title">可容纳数量</div>
          <div class="content">{{ states.sy.shul }}</div>
        </div>
        <div class="two o1 os">
          <!-- <img src="@/assets/image/dian.png" alt=""> -->
          <div class="titles" @click="go">查看全景图</div>
        </div>
      </div>
      <v-title title="渔港监控"></v-title>
      <div class="video">
        <div class="good_video">
          <div id="video-container" ref="videoEle" style="height: 100%" />
        </div>
        <!-- <div v-else class="no_video">
                <img src="@/assets/image/noVideo.png" alt="">
                <span>暂无视频</span>
            </div> -->
      </div>
      <v-title title="渔港预警记录"></v-title>
      <div class="bottom">
        <div class="nav">
          <div>渔船名称</div>
          <div>预警内容</div>
          <div>预警时间</div>
        </div>
        <div class="content">
          <vue3-seamless-scroll :list="states.projectList" :step="0.3" :hover="true">
            <div class="row" v-for="(item, index) in states.projectList" :key="index">
              <div>{{ item.name }}</div>
              <div>{{ item.content }}</div>
              <div>{{ item.date }}</div>
            </div>
          </vue3-seamless-scroll>
        </div>
      </div>
    </v-card>
  </v-drawer>
</template>

<script setup lang="ts">
import EZUIKit from 'ezuikit-js';
import { onMounted, reactive, ref, watch, onUnmounted, nextTick } from 'vue';
import { useBreedStore } from '@/store';
import { Vue3SeamlessScroll } from 'vue3-seamless-scroll';
import { getVideoData } from '@/api/breed/index';
import emitter from '@/utils/eventbus';
const videoEle = ref<HTMLDivElement | null>(null);
let offset = {
  width: 0,
  height: 0,
};
let new_offset = reactive({
  width: 0,
  height: 0,
});
let player: any;
const breedStore = useBreedStore();
const states = reactive({
  name: '',
  list: {
    img: '',
    dj: '',
    lx: '',
    dz: '',
    fzr: '',
    jg: '',
    lxfs: '',
  },
  sy: {
    mj: '',
    mtcd: '',
    mtkd: '',
    hdkd: '',
    shul: '',
  },
  video: {
    url: '' as any,
  },
  projectList: [
    {
      name: '粤汕渔08381',
      yg_name: '莲花山渔港',
      content: '进港未报备',
      date: '2022-12-23 16:02:06',
    },
    {
      name: '粤汕渔21342',
      yg_name: '莲花山渔港',
      content: '休渔期出海',
      date: '2022-12-24 10:02:06',
    },
    {
      name: '粤汕渔16532',
      yg_name: '莲花山渔港',
      content: '出港未报备',
      date: '2022-12-25 08:02:06',
    },
    {
      name: '苏启渔74213',
      yg_name: '莲花山渔港',
      content: '非本地渔船进港',
      date: '2022-12-25 22:02:06',
    },
    {
      name: '粤汕渔63123',
      yg_name: '莲花山渔港',
      content: '进港未报备',
      date: '2023-01-01 08:02:06',
    },
    {
      name: '粤汕渔12421',
      yg_name: '莲花山渔港',
      content: '休渔期出海',
      date: '2022-01-02 05:02:06',
    },
  ] as any,
});
onUnmounted(() => {
  if (player) {
    player.stop();
    player.destroy();
    player = null;
  }
});
watch(
  () => breedStore.gangKoName,
  (val) => {
    if (val !== '') getData();
  }
);
onMounted(() => {
  getData();
});
const getData = () => {
  console.log('1111');
  console.log(player);
  if (!player) {
    getVideoData({ plantWlwId: '9df56f32710840c1a1ac1121bb5aac48' }).then((res: any) => {
      console.log(res);
      let dom = videoEle.value as HTMLDivElement;
      if (dom.offsetWidth !== 0) {
        offset.width = dom.offsetWidth;
        offset.height = dom.offsetHeight;
        new_offset.width = dom.offsetWidth;
        new_offset.height = dom.offsetHeight;
      } else {
        offset.width = new_offset.width;
        offset.height = new_offset.height;
      }
      console.log(offset);
      if (dom) {
        nextTick(() => {
          player = new EZUIKit.EZUIKitPlayer({
            id: 'video-container', // 视频容器ID
            accessToken: res.token,
            url: res.videoData.url,
            width: dom.offsetWidth,
            height: dom.offsetHeight,
          });
        });
      }
    });
  }

  states.name = breedStore.gangKoName;
  if (breedStore.gangKoName === '云澳中心渔港') {
    states.list.img = 'yunao.png';
    states.list.dj = '中心';
    states.list.lx = '综合性港口渔业港区';
    states.list.dz = '广东省汕头市南澳县云澳镇';
    states.list.fzr = '林俊冲';
    states.list.jg = '汕头市南澳县农业农村和水务局';
    states.list.lxfs = '0754-86802251';
    // 水域
    states.sy.mj = '294.08h㎡';
    states.sy.mtcd = '700m';
    states.sy.mtkd = '20m';
    states.sy.hdkd = '60m';
    states.sy.shul = '1000艘';
  } else if (breedStore.gangKoName === '吴平寨渔港') {
    states.list.img = 'wpj.jpg';
    states.list.dj = '未评级';
    states.list.lx = '渔业专用港口';
    states.list.dz = '广东省汕头市南澳县深澳镇吴平寨村';
    states.list.fzr = '-';
    states.list.jg = '-';
    states.list.lxfs = '-';
    // 水域
    states.sy.mj = '24.67h㎡';
    states.sy.mtcd = '300m';
    states.sy.mtkd = '15m';
    states.sy.hdkd = '-';
    states.sy.shul = '200艘';
  } else {
    states.list.img = 'houjiang.png';
    states.list.dj = '二级';
    states.list.lx = '综合性港口渔业港区';
    states.list.dz = '广东省汕头市南澳县后宅镇';
    states.list.fzr = '林俊冲';
    states.list.jg = '汕头市南澳县农业农村和水务局';
    states.list.lxfs = '0754-86802251';
    // 水域
    states.sy.mj = '20.19h㎡';
    states.sy.mtcd = '433m';
    states.sy.mtkd = '20m';
    states.sy.hdkd = '40m';
    states.sy.shul = '585艘';
  }
};
const getImgUrl = (url: string) => {
  return new URL(`../../assets/image/${url}`, import.meta.url).href;
};
const go = () => {
  console.log('1111');
  emitter.emit('clickWuDrawer', {
    name: states.name,
    flag: true,
  });
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 160px;
  margin: 8px 0;
  display: flex;
  .left {
    width: 170px;
    height: 160px;
    img {
      width: 170px;
      height: 160px;
    }
  }
  .right {
    width: calc(100% - 170px);
    height: 100%;
    margin-left: 12px;
    .one {
      height: 25px;
      width: 100%;
      line-height: 25px;
      display: flex;
      font-size: 16px;
      .l1 {
        width: 110px;
        // text-align-last: justify;

        color: #b9b9b9;
        letter-spacing: 2px;
      }
      .l2 {
        width: calc(100% - 110px);
        color: #fff;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
    .on1 {
      margin-top: 2px;
    }
  }
}
.box_two {
  width: 100%;
  // height: ;
  height: 135px;
  margin: 8px 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  .two {
    height: 25px;
    width: 50%;
    display: flex;
    align-items: center;
    font-size: 16px;
    img {
      width: 25px;
      height: 25px;
      margin-right: 6px;
    }
    .title {
      width: 90px;
      letter-spacing: 2px;
      margin-right: 6px;
    }
    .content {
      width: calc(100% - 127px);
    }
  }
  .o1 {
    margin-top: 2px;
  }
  .os {
    .titles {
      width: 85px;
      padding: 8px;
      height: 25px;
      background-color: rgba(17, 16, 45, 0.8);
      border-radius: 4px;
      line-height: 25px;
      border: 1px solid rgba(160, 216, 255, 0.3);
      cursor: pointer;
    }
  }
}
.video {
  width: 100%;
  height: 190px;
  margin: 8px 0;
  .good_video {
    width: 100%;
    height: 100%;
  }
  .no_video {
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 16px;
    img {
      height: 70%;
      margin: 0 auto;
    }
  }
}
.bottom {
  width: 100%;
  margin-top: 8px;
  height: calc(100% - 690px);
  box-sizing: border-box;
  overflow: hidden;
  .nav {
    width: 100%;
    display: flex;
    height: 34px;
    line-height: 34px;
    font-size: 16px;
    background: rgba(19, 39, 165, 0.5);
    color: rgba(255, 255, 255, 0.8);
    text-align: center;

    :nth-child(1) {
      width: 30%;
    }
    :nth-child(2) {
      width: 30%;
    }
    :nth-child(3) {
      width: 40%;
    }
  }
  .content {
    width: 100%;
    height: calc(100% - 34px);
    overflow: hidden;

    .row {
      width: 100%;
      height: 38px;
      align-items: center;
      color: #ffffff;
      font-size: 16px;
      text-align: center;
      display: flex;

      &:nth-child(even) {
        background-color: rgba(19, 39, 165, 0.2);
      }

      :nth-child(1) {
        width: 30%;
      }
      :nth-child(2) {
        width: 30%;
      }
      :nth-child(3) {
        width: 40%;
      }
    }
  }
}
</style>
