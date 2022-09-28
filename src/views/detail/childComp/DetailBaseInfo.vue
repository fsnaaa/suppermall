<template>
  <div class="base-info" v-if="Object.keys(goods).length > 0">
    <div class="info-title">{{ goods.title }}</div>
    <div class="info-price">
      <span class="n-price">{{ goods.price }}</span>
      <span class="o-price">{{ goods.oldPrice }}</span>
      <span class="discount" v-if="goods.discountDesc">
        {{ goods.discountDesc }}
      </span>
    </div>
    <div class="info-sale">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>
    <div class="info-services">
      <span v-for="index in goods.services.length - 1" :key="index">
        <img :src="goods.services[index].icon" />
        <span>{{ goods.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.base-info {
  margin-top: 15px;
  padding: 0px 8px;
  color: #999;
  border-bottom: 5px solid #f2f5f8;
}
.info-title {
  color: #2e2e2e;
}
.info-price {
  margin-top: 10px;
}
.info-price .n-price {
  color: var(--color-high-text);
  font-size: 24px;
}
.info-price .o-price {
  font-size: 12px;
  text-decoration: line-through;
  margin-left: 8px;
}
.info-price .discount {
  font-size: 12px;
  background-color: var(--color-high-text);
  border-radius: 8px;
  padding: 3px 6px;
  color: #ffffff;
  margin-left: 8px;
  position: relative;
  top: -5px;
}
.info-sale {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  font-size: 13px;
  line-height: 30px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
.info-services {
  display: flex;
  justify-content: space-between;
  line-height: 60px;
  font-size: 13px;
  color: #333;
}
.info-services img {
  width: 14px;
  height: 14px;
  position: relative;
  top: 2px;
}
</style>
