<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav-bar {
  height: 44px;
  line-height: 44px;
  text-align: center;
  display: flex;
  /* position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 99999; */
}
.left,
.right {
  width: 60px;
}
.center {
  flex: 1;
}
</style>
