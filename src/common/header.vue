<template>
  <div class="header">
    <div class="date">
      <span class="mr">{{ date }}</span>
      <span class="mr">{{ week }}</span>
      <span class="mr">{{ time }}</span>
      <span class="mr">{{ weather }}</span>
      <span class="mr">{{ degree }}°C</span>
    </div>
    <div class="title" @click="handleClick('port')">智慧渔港一张图</div>
    <div class="right">
      <span style="margin-right: 30px" @click="openUrl(0)">渔港大数据中心</span>
      <span @click="openUrl(1)">广东省渔港一张图</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { parseTime } from '@/utils/parseTime';
import { useRouter } from 'vue-router';
import { getWeather } from '@/api/common';

const router = useRouter();
const date = ref(parseTime(new Date(), '{y}年{m}月{d}日'));
const week = ref(parseTime(new Date(), '{a}'));
const time = ref(parseTime(new Date(), '{h}:{m}:{s}'));
const weather = ref('');
const degree = ref(25);

onMounted(() => {
  setInterval(() => {
    time.value = parseTime(new Date(), '{h}:{m}:{s}');
  }, 1000);

  setInterval(() => {
    date.value = parseTime(new Date(), '{y}年{m}月{d}日');
    week.value = parseTime(new Date(), '{a}');
  }, 3600000);

  getWeather('广东省', '汕头市', '南澳县').then((res: any) => {
    weather.value = res.weather;
    degree.value = res.degree;
  });
});

const handleClick = (name: string) => {
  router.push({ name });
};

const openUrl = (index: number) => {
  if (index === 0) {
    window.open('http://14.23.111.138:92/nayg/data/index');
  } else if (index === 1) {
    window.open('http://14.23.111.138:92/gdhyyy/index.jsp');
  }
};
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  background: url('@/assets/image/common/header.png') center no-repeat;
  height: 83px;
  width: 1913px;
  background-size: 100% 100%;
  margin: auto;
  z-index: 9;
  .date {
    position: absolute;
    top: 28px;
    transform: translateY(-50%);
    left: 10%;
    color: #ddfff7;
    font-size: 16px;
  }

  .title {
    position: absolute;
    left: 50%;
    top: 42%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    font-family: 'PuHuiTi';
    font-size: 32px;
    font-style: italic;
    font-weight: 800;
    letter-spacing: 2px;
  }

  .mr {
    margin-right: 12px;
  }

  .right {
    position: absolute;
    top: 28px;
    transform: translateY(-50%);
    right: 10%;
    color: #ddfff7;
    font-size: 16px;
    span {
      cursor: pointer;
    }
  }
}
</style>
