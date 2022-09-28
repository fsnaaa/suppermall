<template>
  <swiper>
    <swiper-item v-for="(item, i) in images" :key="i">
      <img :src="item" />
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  components: {
    Swiper,
    SwiperItem,
  },
  props: {
    images: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style></style>
