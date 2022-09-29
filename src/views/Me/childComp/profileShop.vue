<template>
  <div class="profile-Shop">
    <div class="shop-top">
        <img src="~assets/img/profile/cart.svg"/>
        <span>我的购物车</span>
    </div>
    <div class="shop-bottom">
        <img src="~assets/img/profile/shopping.svg"/>
        <span class="border">下载购物APP</span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.profile-Shop{
    width: 100%;
    padding: 2px 0px 10px 15px;
    font-size: 15px;
}
.profile-Shop div{
    display: flex;
    align-items: center;
}
img{
    width: 25px;
    height: 25px;
}
span{
    padding: 10px 10px;
    width: 380px;
}
.border{
    border-top: 2px solid #f2f2f2;
}
</style>