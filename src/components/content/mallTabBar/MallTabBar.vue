<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <img src="~assets/img/tabbar/home.svg" slot="item-normal-img" />
      <img src="~assets/img/tabbar/home_active.svg" slot="item-active-img" />
      <span slot="item-text">首页</span>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img src="~assets/img/tabbar/category.svg" slot="item-normal-img" />
      <img
        src="~assets/img/tabbar/category_active.svg"
        slot="item-active-img"
      />
      <span slot="item-text">分类</span>
    </tab-bar-item>
    <tab-bar-item path="/shop">
      <img src="~assets/img/tabbar/shopcart.svg" slot="item-normal-img" />
      <img
        src="~assets/img/tabbar/shopcart_active.svg"
        slot="item-active-img"
      />
      <span slot="item-text">购物</span>
    </tab-bar-item>
    <tab-bar-item path="/me">
      <img src="~assets/img/tabbar/profile.svg" slot="item-normal-img" />
      <img src="~assets/img/tabbar/profile_active.svg" slot="item-active-img" />
      <span slot="item-text">我的</span>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBarItem from "components/common/tabbar/TabBarItem.vue";
import TabBar from "components/common/tabbar/TabBar.vue";

export default {
  components: {
    TabBarItem,
    TabBar,
  },
};
</script>

<style></style>
