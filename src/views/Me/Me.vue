<template>
  <div id="me">
    <nav-bar class="meNavBar">
      <span slot="center">我的</span>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  components: {
    NavBar,
  },
};
</script>

<style scoped>
.meNavBar {
  background-color: var(--color-tint);
  color: white;
}
</style>
