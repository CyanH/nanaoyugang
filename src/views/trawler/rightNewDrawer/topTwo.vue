<template>
  <div class="top">
    <div class="top_one">
      <div v-for="(item, index) in state.list" class="o">
        <div class="alert-line"></div>
        <img :src="getImgUrl(index + 1)" alt="" />
        <div class="right">
          <div class="o1">{{ item.title }}</div>
          <div class="o2">{{ item.value }}</div>
        </div>
      </div>
    </div>
    <div class="top_two">
      <vue3-seamless-scroll :list="state.projectList" :step="0.3" :hover="true">
        <div class="top_1" v-for="(item, index) in state.projectList">
          <div class="yuan">
            {{ index + 1 }}
          </div>
          <div class="content">
            <div class="o1">
              {{ item.cm }}
            </div>
            <div class="o2">
              <span class="t1">{{ item.lx }}</span>
              <span class="t2">{{ item.time }}</span>
            </div>
            <div class="xian"></div>
          </div>
        </div>
      </vue3-seamless-scroll>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { Vue3SeamlessScroll } from 'vue3-seamless-scroll';

const state = reactive({
  list: [
    {
      title: '已处置',
      value: 0,
    },
    {
      title: '今日告警',
      value: 0,
    },
  ] as any,
  projectList: [
    {
      cm: '粤汕渔01385',
      lx: '出港未报备',
      time: '2022-12-23 08:52:11',
    },
    {
      cm: '苏启34212',
      lx: '外地渔船进出港',
      time: '2022-12-24 14:52:11',
    },
    {
      cm: '粤汕渔55321',
      lx: '非本地渔船进港',
      time: '2022-12-25 08:52:11',
    },
    {
      cm: '粤汕渔46433',
      lx: '出港未报备',
      time: '2022-12-25 10:52:11',
    },
    {
      cm: '粤汕渔45321',
      lx: '进港未报备',
      time: '2022-12-27 22:52:11',
    },
    {
      cm: '粤汕渔53223',
      lx: '休渔期出港',
      time: '2022-12-28 08:52:11',
    },
    {
      cm: '粤汕渔65312',
      lx: '出港未报备',
      time: '2022-12-29 08:52:11',
    },
    {
      cm: '粤番渔35241',
      lx: '外地渔船进出港',
      time: '2022-08-01 08:52:11',
    },
    {
      cm: '粤汕渔78421',
      lx: '休渔期出港',
      time: '2023-01-01 08:52:11',
    },
  ] as any,
});

const getImgUrl = (url: number) => {
  return new URL(`../../../assets/image/trawler/b${url}.png`, import.meta.url).href;
};
</script>

<style lang="scss" scoped>
.top {
  height: calc(52% - 46px);
  width: 100%;
  padding-top: 12px;
  padding-bottom: 8px;
  .top_one {
    height: 56px;
    width: 80%;
    margin: 0 auto;
    display: flex;
    .o {
      width: calc(50% - 4px);
      background: linear-gradient(0deg, rgba(99, 163, 255, 0.2), rgba(22, 127, 255, 0.2) 50%, rgba(114, 190, 255, 0.2));
      display: flex;
      .alert-line {
        background: linear-gradient(
          0deg,
          rgba(99, 163, 255, 0),
          #63a3ff 30%,
          #fcfbf7 50%,
          #72beff 70%,
          rgba(114, 190, 255, 0)
        );
        height: 56px;
        width: 1px;
      }
      .right {
        flex: 1;
        margin-left: 8px;
        .o1,
        .o2 {
          width: 100%;
          height: calc(50% - 2px);
        }
        .o1 {
          color: #fff;
          font-size: 14px;
          display: flex;
          align-items: center;
        }
        .o2 {
          color: #04dcf6;
          font-family: PMZDR;
          font-size: 18px;
          display: flex;
          align-items: center;
        }
      }
    }
    :nth-child(1) {
      margin-right: 8px;
    }
  }
  .top_two {
    height: calc(100% - 64px);
    margin-top: 8px;
    overflow: hidden;
    .top_1 {
      width: 100%;
      height: 60px;
      display: flex;
      align-items: center;
      margin-bottom: 6px;
      .yuan {
        background: #167fff;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        text-align: center;
        font-size: 14px;
        line-height: 20px;
      }
      .content {
        flex: 1;
        width: calc(100% - 28px);
        margin-left: 8px;
        height: 100%;
        .o1,
        .o2 {
          height: 48%;
        }
        .o1 {
          color: #00d2ff;
          font-size: 16px;
          display: flex;
          align-items: center;
        }
        .o2 {
          color: white;
          font-size: 14px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 5px;
        }
        .xian {
          width: 90%;
          margin: 0 auto;
          background: linear-gradient(
            90deg,
            rgba(123, 217, 245, 0),
            rgba(123, 217, 245, 0) 0,
            #7bd9f5 50%,
            rgba(123, 217, 245, 0)
          );
          height: 1px;
        }
      }
    }
  }
}
</style>
