<template>
  <swiper>
    <swiper-item v-for="(item, i) in banners" :key="i">
      <a :href="item.link">
        <img :src="item.image" @load="swiperImgLoad" />
      </a>
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
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    swiperImgLoad() {
      //触发事件总线的自定义事件
      this.$emit("swiperImageLoad");
    },
  },
};
</script>

<style></style>
