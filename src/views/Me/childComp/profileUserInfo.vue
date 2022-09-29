<template>
  <div class="user-info">
    <img class="user-img" src="~assets/img/profile/avatar.svg" />
    <div class="user-content">
        <p class="c-login">登录/注册</p>
        <p class="c-phon">暂无绑定手机号</p>
    </div>
    <div class="user-back">></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
*{
    padding: 0px;
    margin: 0px;
}
.user-info{
    width: 100%;
    display: flex;
    color: white;
    padding: 15px 20px;
    align-items: center;
    background-color: #ff8198;
}
.user-img{
    width: 65px;
    height: 65px;
    display: flex; 
}
.user-content{
    margin-left: 15px;
    width: 248px;
}
.c-login{
    font-size: 18px;
}
.c-phon{
    margin-top: 5px;
    font-size: 14px;
    margin-left: 20px;
    position: relative;
}
.c-phon::before{
    content: "";
    position: absolute;
    left: -25px;
    top: -2px;
    width: 23px;
    height: 23px;
    background: url("~assets/img/profile/phone.svg") 0 0/23px;
}
</style>