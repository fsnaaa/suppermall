<template>
  <div id="home">
    <!-- 标题头 -->
    <nav-bar class="homeNavBar">
      <span slot="center">购物商城</span>
    </nav-bar>
    <!-- 头部tab替身导航 -->
    <tab-control
      v-show="isShowTobControl"
      ref="control"
      class="tab-control"
      :titles="['流行', '新款', '精选']"
      @tabItemIndex="tabControlClick"
    />

    <!-- 滚动部分组件 -->
    <b-scroll
      @pullingUp="loadMore"
      @contentScroll="scroll"
      :probeType="3"
      :pullUpLoad="true"
      class="b-scroll"
      ref="myScroll"
    >
      <!-- 轮播图 -->
      <home-swiper :banners="banners" @swiperImageLoad="swiperImage"/>

      <!-- 主页推荐 -->
      <home-recommend :recommends="recommends" />

      <!-- 本周流行 -->
      <home-feature />

      <!-- tab导航 -->
      <tab-control
        v-show="!isShowTobControl"
        ref="control2"
        class="tab-control"
        :titles="['流行', '新款', '精选']"
        @tabItemIndex="tabControlClick"
      />

      <!-- 商品展示 -->
      <goods-list :goodsItem="getGoodsList" />
    </b-scroll>
    <!-- native 使组件中可以点击 回到顶部-->
    <back-top v-show="isScrollTop" @click.native="BackTop" />
  </div>
</template>

<script>
//子功能导入包
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childComp/HomeSwiper";
import HomeRecommend from "./childComp/HomeRecommend";
import HomeFeature from "./childComp/HomeFeature";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goodsItemList/GoodsList";
import BScroll from "components/content/scroll/BScroll";


//导入数据
import { getHomeMultiData, getHomeTypePage } from "network/home";
import { backTopMixin } from "common/mixin";
import { debounce } from "common/utils";
export default {
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomeFeature,
    TabControl,
    GoodsList,
    BScroll,
   
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 1, list: [] },
        new: { page: 1, list: [] },
        sell: { page: 1, list: [] },
      },
      currentType: "pop",
      
      isShowTobControl: false, //是否显示替身top
      tabControlDis: 0, //到头部的距离
      listenerEvent:null //监听事件总线


    };
  },
  mixins:[backTopMixin],
  computed: {
    getGoodsList() {
      return this.goods[this.currentType].list;
    },
  },
  //钩子函数，创建之后
  created() {
    //获取头部数据(轮播图、推荐)
    this.getHomeMultiData();

    //根据类别调用对应获取数据函数
    this.getHomeTypePage("pop");
    this.getHomeTypePage("new");
    this.getHomeTypePage("sell");
  },

  activated(){
    //通过事件总线 绑定图片加载事件
   let listener = ()=>{
      console.log("图片加载")
      //调用组件内部的refresh函数
      this.$refs.myScroll && this.$refs.myScroll.refresh();
    }
    this.listenerEvent=debounce(listener,300)
    this.$bus.$on("itemImgLoad", this.listenerEvent);
  },
  deactivated(){
    this.$bus.$off("itemImgLoad", this.listenerEvent);
  },
  methods: {
    //给轮播图 绑定图片加载事件
    swiperImage(){
      //获取Tab导航菜单到顶部的距离
      this.tabControlDis = this.$refs.control2.$el.offsetTop;
      //console.log(this.tabControlDis);
    },
    
    //向上拉加载更多
    loadMore() {
      this.getHomeTypePage(this.currentType);
      //myScroll为子组件的ref
      //finishPullUp是组件中封装的函数名称 用于通知下次加载更多
      this.$refs.myScroll && this.$refs.myScroll.finishPullUp();
    },
    //滚动的高度
    scroll(position) {
      //console.log(-position.y);
      this.isScrollTop = position.y <= -1000;

      //判断到顶部的距离是否需要显示对应的top组件
      if (this.tabControlDis - 44 <= -position.y) {
        this.isShowTobControl = true;
      } else {
        this.isShowTobControl = false;
      }
    },
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
      this.$refs.control2.currentIndex = index;
      this.$refs.control.currentIndex = index;
    },
    //获取头部数据(轮播图、推荐)
    getHomeMultiData() {
      getHomeMultiData()
        .then((res) => {
          // console.log(res);
          //轮播图数据
          this.banners = res.data.banner.list;
          // console.log(this.banners);
          //推荐数据
          this.recommends = res.data.recommend.list;
        })
        .catch((err) => {});
    },

    //根据类别和页码加载商品数据
    getHomeTypePage(type) {
      //获取页码
      let pageNum = this.goods[type].page;
      //根据页码和类别进行网络请求
      getHomeTypePage(type, pageNum)
        .then((res) => {
          // console.log(res);
          //将获取的数据保存 修改对应类型商品数据
          this.goods[type].list.push(...res.data.list);
          //下次请求 页码加一
          this.goods[type].page++;
          // console.log(this.goods)
        })
        .catch((err) => {});
    },
  },
};
</script>

<style scoped>
#home {
  position: relative;
  height: 100vh;
}
.homeNavBar {
  background-color: var(--color-tint);
  color: white;
  font-weight: 700;
}
.tab-control {
  position: sticky;
  top: 44px;
  z-index: 99999;
}
.b-scroll {
  /* position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0px;
  right: 0px; */
  overflow: hidden;
  height: calc(100% - 93px);
}
</style>
