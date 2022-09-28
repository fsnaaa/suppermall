<template>
  <div id="wrapper" ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      bs: null,
    };
  },
  mounted() {
    this.initBScroll();
  },
  methods: {
    //重新计算
    refresh() {
      this.bs && this.bs.refresh();
    },

    finishPullUp() {
      this.bs && this.bs.finishPullUp();
    },
    //滚动到指定位置
    ScrollTo(x, y, time = 300) {
      this.bs && this.bs.scrollTo(x, y, time);
    },

    initBScroll() {
      this.bs = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad,
        click: true,
      });

      if (this.probeType >= 2) {
        this.bs.on("scroll", (ps) => {
          this.$emit("contentScroll", ps);
        });
      }
      if (this.pullUpLoad == true) {
        this.bs.on("pullingUp", () => {
          console.log("加载");
          this.$emit("pullingUp");
        });
      }
    },
  },
};
</script>

<style scoped>
/* #wrapper {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0px;
  right: 0px;
  overflow: hidden;
  height: calc(100% - 49px);
} */
</style>
