<template>
  <div class="goods-item" @click="getDetailiid(goodsinfo.iid)">
    <img v-lazy="showImg" @load="imgLoad" />
    <div class="goods-item-info">
      <p class="goods-item-title">{{ goodsinfo.title }}</p>
      <span class="price">{{ goodsinfo.price }}</span>
      <span class="collect">{{ goodsinfo.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsinfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed:{
    showImg(){
     return this.goodsinfo.img||this.goodsinfo.image||this.goodsinfo.show.img;
    }
  },
  methods: {
    imgLoad() {
      //触发事件总线的自定义事件
      this.$bus.$emit("itemImgLoad");
    },
    getDetailiid(iid) {
      this.$router.push({
        path: "/detail",
        query: {
          iid,
        },
      });
    },
  },
};
</script>

<style scoped>
.goods-item {
  position: relative;
  padding-bottom: 40px;
  margin-bottom: 15px;
}
.goods-item img {
  width: 100%;
  border-radius: 5px;
}
.goods-item-info {
  font-size: 13px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.goods-item-info p {
  /* 超过宽度自动裁剪 */
  overflow: hidden;
  /* 多余部分使用省略号 */
  text-overflow: ellipsis;
  /* 文字不换行 */
  white-space: nowrap;
  margin-bottom: 3px;
}
.goods-item-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}
.goods-item-info .collect {
  position: relative;
}
/* 票数标签的第一个伪子元素 */
.goods-item-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  /* 0 0/14px 表示   background-position/background-size的形式 */
  background: url("~assets/img/common/collect.svg") 0 0/14px;
}
</style>
