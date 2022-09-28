import BackTop from "components/content/backTop/BackTop";
export const backTopMixin={
    components: {
        BackTop,
    },
    data(){
        return{
            isScrollTop: false, //是否显示回到顶部图标
        }
    },
    methods: {
        //回到头部
        BackTop() {
            this.$refs.myScroll && this.$refs.myScroll.ScrollTo(0, 0, 400);
            //console.log("点击了");
        },
    }

}