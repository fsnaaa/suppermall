<template>
  <div id="category">
    <!-- 分类标题 -->
    <nav-bar class="category-nav-bar">
      <span slot="center">商品分类</span>
    </nav-bar>
    <!-- 分类的内容 -->
    <div class="content">
      <!-- 分类左侧导航栏 -->
      <tab-menu :category="category" @childCategoryClick="childCategoryClick" />
      <!-- 分类右侧商品列表的滚动组件 -->
      <b-scroll class="scroll" ref="scroll">

        <!-- 分类右侧商品列表 -->
        <tab-child-category
          :child-category="childCategory"
          class="tab-child-category"
        />

        <!-- tab导航 -->
        <tab-control class="tab-control"  
        :titles="['综合', '新品', '销量']"
        @tabItemIndex="tabControlClick"/>

        <!-- 商品展示 -->
        <goods-list :goodsItem="getGoodsList" />

      </b-scroll>
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import BScroll from "components/content/scroll/BScroll";
import TabMenu from "./childComp/TabMenu";
import TabChildCategory from "./childComp/TabChildCategory";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goodsItemList/GoodsList";

import { getCategoryMultiData, getSubCategory,getGoodsByCategory } from "network/category";
export default {
  data() {
    return {
      category: [], //一级栏目数组
      childCategory: [], //二级栏目数组
      currentType: "pop",
      goods: {
        pop: [],
        new: [],
        sell: [],
      },
      
    };
  },
  components: {
    NavBar,
    BScroll,
    TabMenu,
    TabChildCategory,
    TabControl,
    GoodsList
  },
  created() {
    //使用获取内容数据函数
    this.getCategoryMultiData();
  },
  updated() {
    //重新计算 刷新
    this.$refs.scroll && this.$refs.scroll.refresh();
  },
  computed: {
    getGoodsList() {
      return this.goods[this.currentType];
    },
  },
  methods: {
    //根据子组件传入的序号 判断对应序号类别
    tabControlClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
        default:
          this.currentType = "pop";
          break;
      }
    },
    //获取内容数据
    getCategoryMultiData() {
      getCategoryMultiData().then((res) => {
        //获取侧面导航数据
        this.category = res.data.category.list;
        //console.log(this.category);
        this.childCategoryClick(0);
      });
    },
    childCategoryClick(index) {
      //获取对应序号的maitKey值 
      let key = this.category[index].maitKey;
      let miniWallKey=this.category[index].miniWallkey;
      //通过对应的maitKey值 寻找对应的数据
      getSubCategory(key).then((res) => {
        //获取右侧列表的相关数据
        this.childCategory = res.data.list;
      });

      //查询所有商品类别('综合', '新品', '销量')
      this.getGoodsByCategory(miniWallKey,"pop");
      this.getGoodsByCategory(miniWallKey,"sell");
      this.getGoodsByCategory(miniWallKey,"new");

    },
    getGoodsByCategory(miniWallkey,type){
      //查询所有商品类别('综合', '新品', '销量')
      getGoodsByCategory(miniWallkey,type).then(res=>{
        //将获取的数据保存 修改对应类型商品数据
        this.goods[type]=res;
      })
    }


  },
};
</script>

<style scoped>
#category {
  height: 100vh;
}
.category-nav-bar {
  background-color: var(--color-tint);
  color: white;
  font-weight: 700;
  position: fixed;
  left: 0px;
  right: 0px;
  top: 0px;
  z-index: 999;
}
.content {
  position: absolute;
  left: 0px;
  right: 0px;
  top: 44px;
  bottom: 56px;
  display: flex;
}
.scroll {
  height: 100%;
  overflow: hidden;
  flex: 1;
}
</style>
