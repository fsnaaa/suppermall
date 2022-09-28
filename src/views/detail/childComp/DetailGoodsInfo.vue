<template>
  <div class="goods-info" v-if="Object.keys(goodsInfo).length > 0">
    <div class="info-desc">
        <div class="start"></div>
        <div class="desc">{{goodsInfo.desc}}</div>
        <div class="end"></div>
    </div>
    <div class="info-key">{{goodsInfo.detailImage[0].key}}</div>
    <div class="info-list">
      <img :src="item" 
      @load="imgLoad"
      v-for="(item,index) in goodsInfo.detailImage[0].list" 
      :key="index"/>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    goodsInfo:{
      type:Object
    }
  },
  methods:{
    imgLoad() {
      //触发事件总线的自定义事件
      this.$bus.$emit("itemImgLoad");
    },
  }
}
</script>

<style scoped>
.goods-info{
    padding: 20px 0px;
    border-bottom: 5px solid #f2f5f8;
}
.info-desc{
  padding: 0px 15px;
}
.desc{
  padding: 15px 0px;
  font-size: 14px;
}
.info-desc .start,.info-desc .end{
  width: 90px;
  height: 1px;
  background-color: #a3a3a5;
  position: relative;
}
.info-desc .start::before,.info-desc .end::after{
  content: '';
  width: 5px;
  height: 5px;
  background-color: #333;
  position: absolute;
  bottom: 0px;
}
.info-desc .end::after{
  right: 0px;
}
.info-desc .start{
  float: left;
}
.info-desc .end{
  float: right;
}
.info-key{
  margin: 10px 0px 10px 15px;
  font-size: 15px;
  color: #333;
}
.info-list img{
  width: 100%;
}
</style>