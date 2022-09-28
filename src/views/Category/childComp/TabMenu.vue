<template>
    <!-- 使用滚动组件 打包左侧导航栏 -->
    <b-scroll class="tab-menu" ref="menuScroll">
    <div>
        <!-- 循环一级栏目数组 创建所有商品导航 -->
        <div class="menu-list" 
        @click="menuClick(index)"
        :class="{'active':currentIndex==index}"
        v-for="(item,index) in category" 
        :key="index">
            {{item.title}}
        </div>
    </div>
    </b-scroll>
</template>

<script>
import BScroll from "components/content/scroll/BScroll";
export default {
    components:{
        BScroll
    },
    data(){
        return{
            currentIndex:0
        }
    },
    props:{
        category:{
            type:Array,
            default(){
                return [];
            }
        }
    },
    updated(){
        //重新计算高度 刷新
        this.$refs.menuScroll&&this.$refs.menuScroll.refresh();
    },
    methods:{
        //设置点击事件 获取对应序号 并给父组件传值
        menuClick(index){
            this.currentIndex=index;
            this.$emit("childCategoryClick",index);
        }
    },

}
</script>

<style scoped>
.tab-menu{
    width: 95px;
    height: 100%;
    overflow: hidden;
    background-color: #f6f6f6;
    box-sizing: border-box;
}
.menu-list{
    height: 45px;
    line-height: 45px;
    font-size: 14px;
    text-align: center;
}
.active{
    background-color: #fff;
    font-weight: 700;
    color: var(--color-high-text);
    border-left: 3px solid var(--color-high-text);
}
</style>