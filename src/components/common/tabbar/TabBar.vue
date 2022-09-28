<template>
  <div id="tab-bar-box">
    <slot></slot>
  </div>
</template>

<script>
import TabBarItem from "./TabBarItem.vue";
export default {
  components: {
    TabBarItem,
  },
};
</script>

<style scoped>
* {
  margin: 0px;
  padding: 0px;
}
#tab-bar-box {
  display: flex;
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: 5;
  background-color: #f5f4f5;

  box-shadow: 0px -1px 1px #dadadb;
}
</style>
