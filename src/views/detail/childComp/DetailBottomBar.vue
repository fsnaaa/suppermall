<template>
  <div class="bottom-bar">
    <div class="bar-left">
        <div>
            <i class="icon service"></i>
            <span class="txt">客服</span>
        </div>
        <div>
            <i class="icon shop"></i>
            <span class="txt">店铺</span>
        </div>
        <div>
            <i class="icon select"></i>
            <span class="txt">收藏</span>
        </div>
    </div>
    <div class="bar-right">
        <div class="car" @click="addToCart">加入购物车</div>
        <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
    methods:{
        addToCart(){
            this.$emit("addToCart");
        }
    }
}
</script>

<style scoped>
.bottom-bar{
    position: fixed;
    bottom: 0px;
    left: 0px;
    right: 0px;
    height: 58px;
    text-align: center;
    background-color: white;
    display: flex;
    z-index: 10;
}
.bar-left{
    flex: 1;
    display: flex;
    font-size: 13px;
    
}
.bar-left .icon{
    display: block;
    width: 22px;
    height: 22px;
    background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
    margin: 10px auto 3px;
}
.bar-left .service{
    background-position: 0px -53px;
}
.bar-left .shop{
    background-position: 0px -98px;
}
.bar-right{
    flex: 1;
    display: flex;
    font-size: 15px;
    color: white;
    line-height: 58px;
}
.bar-left>div,.bar-right>div{
    flex: 1;
}
.car{
    background-color: #ffe817;
    color: #333;
   
}
.buy{
    background-color: #ff6699;
    color: #333;
   
}
</style>