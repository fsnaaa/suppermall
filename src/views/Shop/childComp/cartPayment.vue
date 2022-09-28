<template>
  <div class="payment-item">
    <!-- 单选按钮组件 -->
    <cart-check-box class="select-checkbox" 
    :is-checked="isSelectAll" 
    @click.native="selectAllClick"/>
    <!-- 全选文字 -->
    <span>全选</span>
    <!-- 总价和总商品数量 -->
    <span class="pay-total">合计:￥{{cartTotal}}</span>
    <span class="pay-button">去计算({{selectCount}})</span>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
import cartCheckBox from "./cartCheckBox"
export default {
    components:{
        cartCheckBox
    },
    computed:{
        ...mapGetters(["cartLength","cartList"]),

        //获取购物车商品总价 toFixed()保留几位小数
        cartTotal(){
            //filter 根据条件筛选 返回筛选的内容
            //reduce 将数组中的成员进行累加 value前面已经相加的和 item是要累加的值
            const list=this.cartList;
            let total=list.filter(item=>item.checked).reduce((value,item)=>{
                return value+item.price*item.count;
            },0)    
            return total.toFixed(2);
        },
        isSelectAll(){
            //是否全部选中所有商品
            //find 查找数组第一个满足条件的内容 没有 返回undefined
            return this.cartList.find(item=>item.checked==false)==undefined;
        },
        selectCount(){
            //计算有多少种类 商品数量
            //filter 根据条件筛选 返回筛选的内容
            let total2=this.cartList.filter(item=>item.checked).reduce((value,item)=>{
                return value+item.count;
            },0)    
            return total2;

            //return this.cartList.filter(item=>item.checked).length;
        }
  },
  methods:{
    selectAllClick(){
        this.$emit("selectAllClick")
    },
   
  }
}
</script>

<style scoped>
.payment-item{
    width: 100%;
    height: 44px;
    line-height: 44px;
    position: fixed;
    bottom: 56px;
    left: 0px;
    right: 0px;
    background-color: #eee;
    box-shadow: 0 -2px 3px rgba(0,0,0,.2);
    color: #888;
    font-size: 14px;
    padding-left: 35px;
}
.pay-select{
    display: flex;
    align-items: center;
    justify-content: center;
}
.select-checkbox{
    position: absolute;
    left: 12px;
    top: 11px;
}
.pay-total{
    color: #666;
    font-size: 16px;
    margin-left: 15px;
}
.pay-button{
    color: #fff;
    width: 100px;
    height: 44px;
    line-height: 44px;
    text-align: center;
    float: right;
    background-color: orangered;
}
</style>