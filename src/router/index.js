//导入资源包
import Vue from "vue";
import VueRouter from "vue-router";

//注册
Vue.use(VueRouter);

//导入组件
const Home = () => import("views/Home/Home.vue");
const Category = () => import("views/Category/Category.vue");
const Shop = () => import("views/Shop/Shop.vue");
const Me = () => import("views/Me/Me.vue");
const Detail = () => import("views/detail/Detail.vue");

//定义路由映射
const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/category",
    component: Category,
  },
  {
    path: "/shop",
    component: Shop,
  },
  {
    path: "/me",
    component: Me,
  },
  {
    path: "/detail",
    component: Detail,
  },
];

//实例化一个路由对象
const router = new VueRouter({
  routes,
  mode: "history",
});

//导出对象
export default router;
