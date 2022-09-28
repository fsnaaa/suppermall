<template>
  <div class="params-info" v-if="Object.keys(goodsParams).length > 0">
    <table>
        <tr v-for="(item,index) in goodsParams.sizes" :key="index">
            <td v-for="(v,i) in item" :key="i">{{v}}</td>
        </tr>
    </table>
    <table>
        <tr v-for="(item,index) in goodsParams.sets" :key="index">
            <td class="params-key">{{item.key}}</td>
            <td class="params-value">{{item.value}}</td>
        </tr>
    </table>
  </div>
</template>

<script>
export default {
    props:{
        goodsParams:{
            type:Object
        }
    },
}
</script>

<style scoped>
    .params-info{
        padding: 20px 15px;
        font-size: 14px;
        border-bottom: 5px solid #f2f5f8;
    }
    .params-info table{
        width: 100%;
        border-collapse: collapse;
    }
    .params-info table td{
        height: 45px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
    .params-key{
        width: 95px;
    }
    .params-value{
        color: #eb4868;
    }
</style>