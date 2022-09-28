<template>
  <div class="detail">
    <!-- tab页面头部 -->
    <detail-nav-bar class="navBar" @navClick="navClick" :current-index="currentThemeIndex"/>
    <!-- 滚动区域 -->
    <b-scroll 
      @contentScroll="scroll"
      :probeType="3" 
      class="b-scroll"
      ref="myScroll">
      <detail-swiper :images="images" class="detailSwiper" />
      <detail-base-info :goods="baseGoods" />
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :goodsInfo="goodsInfo"/>
      <detail-goods-params ref="params" :goodsParams="goodsParams"/>
      <detail-comment ref="comment" :comment="comment"/>
      <goods-list ref="recommend" :goodsItem="detailList" class="goodsList"/>
    </b-scroll>
    <detail-bottom-bar @addToCart="addToCart"/>
    <!-- native 使组件中可以点击 回到顶部-->
    <back-top v-show="isScrollTop" @click.native="BackTop"/>
    <toast ref="toast" :message="message" :showTime="3000"/>
  </div>
</template>

<script>
// {{ $route.query.iid }}
//滚动和回到顶部组件导入
import BScroll from "components/content/scroll/BScroll";
//导入子组件
import DetailNavBar from "./childComp/DetailNavBar";
import DetailSwiper from "./childComp/DetailSwiper";
import DetailBaseInfo from "./childComp/DetailBaseInfo";
import DetailShopInfo from "./childComp/DetailShopInfo";
import DetailGoodsInfo from "./childComp/DetailGoodsInfo";
import DetailGoodsParams from "./childComp/DetailGoodsParams";
import DetailComment from "./childComp/DetailComment";
import DetailBottomBar from "./childComp/DetailBottomBar";
import GoodsList from "components/content/goodsItemList/GoodsList";
import Toast from "components/common/toast/Toast";

//导入数据 DetailGoodsParams
import { getDetailMultiData,getDetailType } from "network/detail";
import { Goods,Shop,GoodsParams } from "common/models";
import { backTopMixin } from "common/mixin";
import { debounce } from "common/utils";

import {mapActions} from "vuex"

export default {
  name:"Detail",
  components: {
    BScroll,
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailComment,
    DetailGoodsParams,
    DetailBottomBar,
    GoodsList,
    Toast
  },
  data() {
    return {
      images: [],
      iid: "",
      baseGoods: {},
      shop: {},
      goodsInfo:{},
      goodsParams:{},
      comment:{},
      detailList:[],
      isScrollTop:false,
      listenerEvent:null, //监听事件总线
      themeOffsetToArr:[], //每个主题的offsetTop
      currentThemeIndex:0, //每个主题的区域序号
      message:"",
    };
  },
  mixins:[backTopMixin],
  created() {
    this.getDetailMultiData();
    this.getDetailType();

    //通过事件总线 绑定图片加载事件
    let listener= ()=>{
      //console.log("图片加载")
      //1 调用组件内部的refresh函数
      this.$refs.myScroll && this.$refs.myScroll.refresh();

      //2 获取每个组件到头部的距离
      this.themeOffsetToArr=[];
      this.themeOffsetToArr.push(0);
      this.themeOffsetToArr.push(-this.$refs.params.$el.offsetTop-44);
      this.themeOffsetToArr.push(-this.$refs.comment.$el.offsetTop-44);
      this.themeOffsetToArr.push(-this.$refs.recommend.$el.offsetTop-44);
      this.themeOffsetToArr.push(-Number.MAX_VALUE);

    }
    this.listenerEvent=debounce(listener,300)
    this.$bus.$on("itemImgLoad", this.listenerEvent);
    
  },
  destroyed(){
    this.$bus.$off("itemImgLoad", this.listenerEvent);
  },
  methods: {
    //在methods中映射actions中的方法
    //使用别名来映射
    ...mapActions({
        addCart:'addToCart',
    }),
    //点击添加购物车
    addToCart(){
      //获取商品数据
      let product={
        iid:this.baseGoods.iid,
        title:this.baseGoods.title,
        desc:this.baseGoods.desc,
        price:this.baseGoods.lowNowPrice,
        image:this.images[0]
      }
      //调用action中的方法需要使用dispatch
      //调用mutations中的方法需要使用commit
      //添加产品到购物车 
      // this.$store.dispatch("addToCart",product);
      this.addCart(product).then(res=>{
        this.message=res;
        this.$refs.toast.close();
      })
      

    },
    //获取当前的滚动距离
    navClick(index){
      let pos=this.themeOffsetToArr[index];
      this.$refs.myScroll && this.$refs.myScroll.ScrollTo(0, pos,400);
    },
    //获取滚动距离
    scroll(position) {
      //console.log(position.y);
      this.isScrollTop = position.y <= -1000;

      //获取组件到头部的距离
      let distance=position.y;
      //循环数组themeOffsetToArr 获取区间范围
      for(let i=0;i<this.themeOffsetToArr.length;i++){
        //获取开始位置
        let star=this.themeOffsetToArr[i];
        //获取结束位置
        let end=this.themeOffsetToArr[i+1];
        //根据位置范围判断区间
        if(distance<=star&&distance>end){
          this.currentThemeIndex=i;
          break;
        }
      }
    },
    
    //获取头部数据(轮播图、商品基础信息、店铺详细信息、商品参数、商品评价)
    getDetailMultiData() {
      this.iid = this.$route.query.iid;
      getDetailMultiData(this.iid).then((res) => {
        let result = res.result;
        //console.log(result)
       //轮播图数据
        this.images = result.itemInfo.topImages;
        //商品基础信息数据
        this.baseGoods = new Goods(result.itemInfo,result.columns, result.shopInfo);
        //店铺详细信息数据
        this.shop=new Shop(result.shopInfo);
        //商品详细信息数据
        this.goodsInfo=result.detailInfo;
        //商品参数
        this.goodsParams=new GoodsParams(result.itemParams.info,result.itemParams.rule);
        //商品评价
        this.comment=result.rate.list?result.rate.list[0]:{};
        //console.log(this.comment);
      });
    },
    getDetailType(){
      getDetailType()
        .then((res) => {
          //获取推荐商品数据
          this.detailList=res.data.list;
        })
    }
  },
};
</script>

<style scoped>
.detailSwiper {
  height: 300px;
  margin-top: 44px;
}
.b-scroll {
  /* position: absolute;
  top: 44px;
  bottom: 0px;
  left: 0px;
  right: 0px; */
  overflow: hidden;
  height: calc(100% - 102px);
  margin-bottom: 49px;
}
.detail{
  height: 100vh;
  position: relative;
}
.navBar{
  background-color: white;
  /* position: fixed;
  left: 0px;
  right: 0px;
  top: 0px;
  z-index: 99999; */
}

</style>
