<template>
  <div >
    <!-- 使用GridView组件 将商品列表按照要求排列 -->
    <grid-view :cols="3" :lineSpace="15" :v-margin="20">
      <!-- 循环二级栏目数组 创建所有商品列表 -->
      <div class="child-category" v-for="(item,index) in childCategory" :key="index">
        <!-- 列表链接 -->
        <a :href="item.link">
          <!-- 商品列表图片 -->
          <img :src="item.image" class="child-img"/>
          <!-- 商品列表文字 -->
          <div class="child-title">
            {{item.title}}
          </div>
        </a>
      </div>
    </grid-view>
  </div>
</template>

<script>
import GridView from "components/common/gridView/GridView";
export default {
  components:{
    GridView
  },
  props:{
    childCategory:{
      type:Array,
      default(){
        return [];
      }
    }
  }
}
</script>

<style scoped>
.child-category{
  font-size: 12px;
  text-align: center;
}
.child-img{
  width: 80%;
}
.child-title{
  margin-top: 15px;
}
</style>