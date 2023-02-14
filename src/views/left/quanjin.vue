<template>
  <div class="side">
    <div class="card">
      <div class="bottom">
        <el-button class="closeBtn" @click="handleClose" :icon="Close"></el-button>
      </div>
      <iframe :src="_src" style="width: 100%; height: calc(100% - 31px)"></iframe>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch, toRefs } from 'vue';

import { Close } from '@element-plus/icons-vue';
import emitter from '@/utils/eventbus';

const props = defineProps({
  list: {
    type: String,
    default: '',
  },
});
let _src = ref('' as any);
const { list } = toRefs(props);
watch([props], () => {
  console.log(props.list);
  _src.value = props.list;
});

onMounted(() => {
  getData();
  _src.value = list.value;
});
const getData = () => {
  _src.value = '';
};

const handleClose = () => {
  console.log('1111');
  emitter.emit('clickWuDrawer', {
    flag: false,
  });
};
</script>

<style lang="scss" scoped>
.side {
  position: absolute;
  bottom: 15px;
  top: 0px;
  left: 15px;
  right: 15px;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.5);
}
.card {
  background: rgba(1, 0, 22, 0.8);
  width: 80%;
  height: 100%;
  position: relative;
  padding: 20px 20px 15px;
  box-sizing: border-box;
  margin: 0 auto;
}
.bottom {
  height: 25px;
  width: 100%;
  text-align: right;
  margin-bottom: 6px;
  .closeBtn {
    padding: 0;
    background: transparent;
    border: 0;
    color: #fff;
    font-size: 24px;
    &:hover {
      background: transparent;
      color: #fff;
    }
  }
}
</style>
