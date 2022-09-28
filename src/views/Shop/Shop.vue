<template>
  <div id="shop">
    <nav-bar class="shopNavBar">
      <span slot="center">购物车({{cartLength}})</span>
    </nav-bar>
    <b-scroll class="b-scroll"  
       ref="scroll">
      <cart-list :cart-list="cartList"/>
    </b-scroll>
    <cart-payment class="pay-cart" @selectAllClick="selectAllClick"/>
  </div>
</template>

<script>
import {mapGetters} from "vuex"

import BScroll from "components/content/scroll/BScroll";
import NavBar from "components/common/navbar/NavBar";
import cartList from "./childComp/cartList"
import cartPayment from "./childComp/cartPayment"


export default {
  components: {
    BScroll,
    NavBar,
    cartList,
    cartPayment
  },
  data(){
    return {
      listenerEvent:null
    }
  },
  activated(){
    //从新计算 刷新高度
     this.$refs.scroll && this.$refs.scroll.refresh();
  },
  computed:{
    //使用vueX的工具 ...解析数组
    ...mapGetters(["cartLength","cartList"]),
    
  },
  methods:{
    selectAllClick(){
      //找都所有未选中的
      let allSelect= this.cartList.filter(item=>item.checked==false);
      //console.log(allSelect);
      //判断未选中的是否大于0
      if(allSelect.length>0){
        allSelect.forEach(item=>{
          //在找到的所有未选中 将所有未选中的都设为选中
          item.checked=true;
        })
      }
      else{
        this.cartList.forEach(item=>{
          //循环商品列表 将所有的 设置为未选中
          item.checked=false;
        })
      }
     
    },
  }
 
};
</script>

<style scoped>
#shop{
  height: 100vh;
  position: relative;
}
.b-scroll {
  overflow: hidden;
  height: calc(100% - 144px);
}
.shopNavBar {
  background-color: var(--color-tint);
  color: white;
  font-weight: 600;
}

</style>
