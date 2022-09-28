<template>
  <div class="select-info" 
  @click="isCheckBox"
  :class="{'select-Checked':isChecked}">
    <img src="~assets/img/cart/tick.svg"/>
  </div>
</template>

<script>
export default {
    props:{
        isChecked:{
            type:Boolean,
            default:true
        }
    },
    methods:{
        isCheckBox(){
            this.$emit("isCheckBox");
        }
    }
}
</script>

<style scoped>
.select-info{
    margin: 0;
    width: 18px;
    height: 18px;
    line-height: 18px;
    cursor: pointer;
    position: relative;
    border-radius: 50%;
    border: 2px solid #ccc;
}
.select-Checked{
    background-color: #ff8198;
    border-color: #ff8198;
}
</style>