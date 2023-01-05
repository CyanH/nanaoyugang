<template>
  <v-drawer direction="left" hasArrow>
    <v-card>
      <v-title title="番禺籍渔船"></v-title>
      <div class="one">
        <one></one>
      </div>
      <v-title title="渔船证书信息"></v-title>
      <div class="two">
        <div v-for="item,index in list.top" class="top1">
          <div class="name">{{ item.name }}</div>
          <div class="value">{{ item.value }}</div>
          <div class="img">
            <img :src="getImgUrl('d'+(index + 1))" alt="">
          </div>
        </div>
      </div>
    </v-card>
  </v-drawer>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, reactive, ref } from 'vue';
import incomeMiddle from './newDrawer/incomeMiddle.vue';
import bottomView from './newDrawer/bottom.vue';
import one from './newDrawer/one.vue'
const list = reactive({
  top: [
      {
        name:'证书过期',
        value: 9
      },
      {
        name:'保险过期',
        value: 3
      }
    ] as any
})
const getImgUrl = (url: string) => {
    return new URL(`../../assets/image/trawler/${url}.png`, import.meta.url).href;
  };
</script>

<style lang="scss" scoped>
.line {
  height: 2px;
  background: linear-gradient(
    to right,
    transparent 0,
    rgba(147, 203, 255, 0.2) 15%,
    rgba(147, 203, 255, 0.2) 85%,
    transparent 100%
  );
  margin: 15px 0;
}

.legend {
  position: absolute;
  padding: 15px;
  background-color: rgba(17, 16, 45, 0.7);
  border-radius: 2px;
  right: 27%;
  top: 110px;
  color: #fff;
  font-size: 14px;
  z-index: 7;

  .row:not(:last-child) {
    margin-bottom: 12px;
  }

  .icon {
    width: 26px;
    height: 26px;
    margin-right: 15px;
  }
}
.one{
  height: 72%;
  // margin-bottom: 8px;
  padding-top: 12px;
}
.two{
  height: 16%;
  display: flex;
  padding-top: 24px;
  .top1{
    width: 50%;
    height: calc(100% - 24px);
    text-align: center;
    .name{
      font-size: 18px;
      // margin-bottom: 12px;
      height: 35px;
    }
    .value{
      color: #00d2ff;
      font-family: PMZDR;
      font-size: 26px;
      font-style: italic;
      line-height: 1;
      height: 30px;
    }
    .img{
      height: calc(100% - 65px);
      text-align: center;
      // margin-top: -8px;
      img{
        margin: 0 auto;
      }
    }
  }
}
</style>
