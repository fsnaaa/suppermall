<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
    <mall-tab-bar></mall-tab-bar>
  </div>
</template>

<script>
import MallTabBar from "components/content/mallTabBar/MallTabBar.vue";

export default {
  name: "App",
  components: {
    MallTabBar,
  },
};
</script>

<style>
@import url("assets/css/base.css");
</style>
