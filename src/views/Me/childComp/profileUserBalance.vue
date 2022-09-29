<template>
  <div class="user-balance">
    <div class="balance-left">
        <p><span class="sum">0.00</span>元</p>
        <p class="text">我的余额</p>
    </div>
    <div class="balance-center">
        <p><span class="sum">0</span>个</p>
        <p class="text">我的优惠</p>
    </div>
    <div class="balance-right">
        <p><span class="sum">0</span>分</p>
        <p class="text">我的积分</p>
    </div>
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
.user-balance{
    width: 100%;
    display: flex;
    text-align: center;
    font-size: 14px;
    border-bottom: 10px solid #f2f2f2;
}
.balance-left,.balance-center,.balance-right{
    flex: 1;
    padding: 20px 30px;
}
.balance-center{
    border-right: 1px solid #e7e7e8;
    border-left: 1px solid #e7e7e8;
}
.sum{
    font-size: 22px;
    font-weight: 600;
    color: #ff5f3e;
}
.text{
    margin-top: 5px;
}
</style>