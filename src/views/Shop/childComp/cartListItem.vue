<template>
  <div class="product-item" v-if="Object.keys(product).length > 0">
    <div class="item-select">
        <cart-check-box :is-checked="product.checked" @isCheckBox="isCheckBox"/>
    </div>
    <div class="item-image">
        <img :src="product.image"/>
    </div>
    <div class="item-info">
        <div class="info-title">
            {{product.title}}
        </div>
        <div class="info-desc">
            {{product.desc}}
        </div>
        <div class="info-bottom">
            <div class="bottom-price left">￥{{product.price}}</div>
            <div class="bottom-count right">x{{product.count}}</div>
        </div>
    </div>
  </div>
</template>

<script>
import cartCheckBox from "./cartCheckBox"
export default {
    components:{
    cartCheckBox,
},
    props:{
        product:{
            type:Object,
            default(){
                return {};
            }
        }
    },
    methods:{
        isCheckBox(){
            this.product.checked=!this.product.checked;
        }
    }
}
</script>

<style scoped>
.product-item{
    padding: 5px;
    border-bottom: 1px solid #ccc;
    display: flex;
    width: 100%;
}
.item-select{
    width: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.item-image{
    padding: 5px;
}
.item-image img{
    width: 80px;
    height: 100px;
    border-radius: 5px;
}
.item-info{
    font-size: 17px;
    color: #333;
    padding: 5px 10px;
    overflow: hidden;
    position: relative;
}
.info-title,.info-desc{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.info-desc{
    font-size: 14px;
    color: #666;
    margin-top: 15px;
}
.info-bottom{
    position: absolute;
    left: 10px;
    right: 10px;
    bottom: 10px;
}
.bottom-price{
    color: #ff5111;
}
.bottom-count{
    text-align: right;
}
</style>