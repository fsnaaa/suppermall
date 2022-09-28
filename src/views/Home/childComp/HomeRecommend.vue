<template>
  <div class="recommend">
    <div class="recommend-item" v-for="(item, i) in recommends" :key="i">
      <a :href="item.link">
        <img :src="item.image" />
        <p>{{ item.title }}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.recommend {
  display: flex;
  text-align: center;
  font-size: 12px;
  margin-top: 10px;
  padding-bottom: 10px;
  border-bottom: 10px solid #ebebee;
}
.recommend-item {
  flex: 1;
}
.recommend-item img {
  height: 70px;
  width: 70px;
}
</style>
