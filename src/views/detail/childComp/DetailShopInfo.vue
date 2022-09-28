<template>
  <div class="shop-info" v-if="Object.keys(shop).length > 0">
    <div class="info-top">
      <img :src="shop.logo" />
      <span class="title">{{shop.title}}</span>
    </div>
    <div class="info-middle">
      <div class="info-middle-left">
        <div class="sell-info">
          <p class="sell-count">{{shop.cSells|sellsParams}}</p>
          <p class="sell-text">总销量</p>
        </div>
        <div class="goods-info">
          <p class="goods-count">{{shop.cGoods}}</p>
          <p class="goods-text">全部宝贝</p>
        </div>
      </div>
      <div class="info-middle-right">
        <table>
          <tr v-for="(item,index) in shop.score" :key="index">
            <td>{{item.name}}</td>
            <td :class="['score',item.isBetter?'better-score':'']">{{item.score}}</td>
            <td><span :class="['leva',item.isBetter?'better-leva':'']">{{item.isBetter?"高":"低"}}</span></td>
          </tr>
        </table>
      </div>
    </div>
    <div class="info-bottom">
      <div class="info-bottom-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters:{
    sellsParams(v){
      if(v<=10000){
        return v;
      }
      else{
        let sell= v/10000;
        return sell.toFixed(1)+"万";
      }
    }
  }
};
</script>

<style scoped>
.shop-info {
  padding: 25px 8px;
  border-bottom: 5px solid #f2f5f8;
}
.info-top {
  line-height: 45px;
  display: flex;
  align-items: center;
}
.info-top img {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);
}
.info-top .title {
  margin-left: 15px;
}
.info-middle {
  margin-top: 15px;
  display: flex;
  align-items: center;
}
.info-middle > div {
  flex: 1;
}
.info-middle-left {
  display: flex;
  justify-content: space-evenly;
  color: #333;
  text-align: center;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}
.sell-count,.goods-count {
  font-size: 18px;
}
.sell-text,.goods-text {
  font-size: 12px;
  margin-top: 12px;
}
.info-middle-right table{
  width: 120px;
  margin-left: 30px;
  font-size: 13px;
  color: #333;
}
.info-bottom{
  text-align: center;
  margin-top: 10px;
}
.info-bottom-shop{
  width: 150px;
  height: 30px;
  line-height: 30px;
  display: inline-block;
  background-color: #f2f5f8;
  border-radius: 10px;
  font-size: 12px;
  text-align: center;
}
.score{
  color: #5ea732;
}
.better-score{
  color: #f13e3a;
}
.leva{
  background-color: #5ea732;
  color: white;
}
.better-leva{
  background-color: #f13e3a;
}
</style>
