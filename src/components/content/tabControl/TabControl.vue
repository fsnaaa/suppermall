<template>
  <div id="tab-control">
    <div
      class="tab-control-item"
      @click="activeClick(index)"
      :class="{ activeStyle: currentIndex == index }"
      v-for="(item, index) in titles"
      :key="index"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0, //当前序号
    };
  },
  methods: {
    activeClick(i) {
      this.currentIndex = i;
      //通过emit给父组件传值
      this.$emit("tabItemIndex", i);
    },
  },
};
</script>

<style scoped>
#tab-control {
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  background-color: white;
}
.activeStyle {
  color: var(--color-tint);
}
.activeStyle span {
  border-bottom: 3px solid var(--color-high-text);
  padding: 5px;
}
.tab-control-item {
  flex: 1;
}
</style>
