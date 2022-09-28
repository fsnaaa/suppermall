<template>
  <div class="tab-bar-box-item" @click="itemClick">
    <div>
      <slot name="item-normal-img" v-if="!isActive"></slot>
      <slot name="item-active-img" v-else></slot>
    </div>
    <div :style="isActive ? { color: activeColor } : {}">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      required: true
    },
    activeColor: {
      type: String,
      default: "#ff5777"
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) >= 0;
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path);
    }
  }
};
</script>

<style scoped>
.tab-bar-box-item {
  height: 49px;
  flex: 1;
  text-align: center;
  font-size: 14px;
  margin-top: 5px;
  margin-bottom: 2px;
}
.tab-bar-box-item img {
  width: 24px;
  height: 24px;
}
</style>
