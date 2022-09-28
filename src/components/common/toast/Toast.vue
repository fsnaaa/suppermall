<template>
  <div class="toast" v-show="isShow">
    {{message}}
  </div>
</template>

<script>
export default {
    props:{
        message:{
            type:String
        },
        showTime:{
            type:Number,
            default:3000
        }
    },
    data(){
        return{
            isShow:false
        }
    },
    methods:{
        close(){
            this.isShow=true;
            setTimeout(() => {
                this.isShow=false;
            }, this.showTime);
        }
    }
}
</script>

<style scoped>
.toast{
    position: fixed;
    top: 50%;
    left: 50%;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    transform: translate(-50%,-50%);
    padding: 8px 10px; 
    border-radius: 5px;
}
</style>