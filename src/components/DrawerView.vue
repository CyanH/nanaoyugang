<template>
  <div class="side animate__animated" :class="[direction, animate]" :style="{ width }" v-show="!hidden">
    <slot></slot>
  </div>
  <div class="arrow animate__animated" :class="[animate, direction, hidden]" @click="handleClick" v-if="hasArrow">
    <img src="@/assets/image/common/arrow.png" style="height: 100%" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useCommonStore } from '@/store';

const commonStore = useCommonStore();

const props = defineProps({
  direction: {
    type: String,
    default: 'right',
  },
  width: {
    type: String,
    default: '25%',
  },
  hasArrow: {
    type: Boolean,
    default: false,
  },
});

const animate = computed(() => {
  return props.direction === 'left' ? 'animate__fadeInLeftBig' : 'animate__fadeInRightBig';
});

const hidden = computed(() => {
  return commonStore.hidden ? 'hidden' : '';
});

const handleClick = () => {
  commonStore.toggle();
};
</script>

<style lang="scss" scoped>
.side {
  position: absolute;
  bottom: 15px;
  top: 0;
  z-index: 9;
}

.side.right {
  right: 15px;
}

.side.left {
  left: 15px;
}

.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 8;
  cursor: pointer;
  transition: 1s;
}

.arrow.right {
  right: 26%;
}

.arrow.left {
  left: 26%;
  img {
    transform: translateY(-50%) rotate(180deg);
  }
}

.hidden.right {
  right: 0;
  img {
    transform: translateY(-50%) rotate(180deg);
  }
}
.hidden.left {
  left: 0;
  img {
    transform: translateY(-50%);
  }
}
</style>
