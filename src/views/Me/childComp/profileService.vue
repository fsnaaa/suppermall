<template>
  <div class="profile-service">
    <div class="service-top">
        <img src="~assets/img/profile/message.svg"/>
        <span>我的消息</span>
    </div>
    <div class="service-middle">
        <img src="~assets/img/profile/pointer.svg"/>
        <span class="border">积分商城</span>
    </div>
    <div class="service-bottom">
        <img src="~assets/img/profile/vip.svg"/>
        <span>会员卡</span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.profile-service{
    width: 100%;
    padding: 10px 0px 10px 15px;
    font-size: 15px;
    border-bottom: 10px solid #f2f2f2;
}
.profile-service div{
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
    border-bottom: 2px solid #f2f2f2;
}
</style>