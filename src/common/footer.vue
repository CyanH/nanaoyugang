<template>
  <div class="footer">
    <div
      class="choose-bar"
      :class="chooseIndex === index ? 'isChoose' : ''"
      v-for="(item, index) in chooseList"
      :key="index"
      @click="handleChoose(item, index)"
    >
      <div class="img-box">
        <img :src="getImgUrl(item.icon)" class="icon" />
        <span class="name">{{ item.name }}</span>
      </div>
      <img :src="chooseIndex === index ? getImgUrl(item.chooseBg) : getImgUrl(item.bg)" class="bg" />
    </div>

    <img src="@/assets/image/common/footer.png" class="footer-img" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

watch(
  () => route.path,
  (val) => {
    if (val === '/') {
      chooseIndex.value = 0;
    }
  }
);

onMounted(() => {
  chooseList.map((it, index) => {
    if (route.path === it.url) {
      chooseIndex.value = index;
    }
  });
});

const chooseList = [
  {
    icon: 'gkgl',
    name: '港口管理',
    url: '/',
    bg: 'gkgl_not',
    chooseBg: 'gkgl_c',
  },
  {
    icon: 'ycgl',
    name: '渔船管理',
    url: '/trawler',
    bg: 'ycgl_not',
    chooseBg: 'ycgl_c',
  },
  {
    icon: 'ymgl',
    name: '渔民管理',
    url: '/people',
    bg: 'ymgl_not',
    chooseBg: 'ymgl_c',
  },
  {
    icon: 'yhgl',
    name: '渔获管理',
    url: '/catch',
    bg: 'yhgl_not',
    chooseBg: 'yhgl_c',
  },
];

let chooseIndex = ref(0);

const handleChoose = (item: any, index: number) => {
  chooseIndex.value = index;
  router.push(item.url);
};

const getImgUrl = (url: string) => {
  return new URL(`../assets/image/common/${url}.png`, import.meta.url).href;
};
</script>

<style lang="scss" scoped>
.footer {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  width: 542px;
  z-index: 9;

  .choose-bar {
    font-size: 16px;
    color: rgba(254, 255, 255, 0.8);
    cursor: pointer;
    position: absolute;
    text-align: center;
    white-space: nowrap;
    z-index: 5;
    transform: translateX(-50%);

    &:nth-of-type(1) {
      left: 9%;
      bottom: 0;
    }
    &:nth-of-type(2) {
      left: 36.5%;
      bottom: 26px;
    }
    &:nth-of-type(3) {
      left: 63.7%;
      bottom: 26px;
    }
    &:nth-of-type(4) {
      left: 91%;
      bottom: 3px;
    }

    .img-box {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .icon {
      width: 37px;
      margin: 0 auto 14px;
    }

    .bg {
      width: 140px;
    }
  }

  .isChoose {
    font-size: 18px;
    font-weight: 800;
    color: #feffff;

    .icon {
      width: 53px;
    }
  }
}

.footer-img {
  width: 100%;
}
</style>
