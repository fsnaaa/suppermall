<template>
  <div class="cart-list" >
    <cart-list-item v-for="(item,index) in cartList" :key="index" :product="item"/>
  </div>
</template>

<script>
import cartListItem from "./cartListItem"
export default {
    components:{
        cartListItem
    },
    props:{
        cartList:{
            type:Array,
            default(){
                return [];
            }
        }
    }
}
</script>

<style>

</style>