import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueLazyLoad from "vue-lazyload"
import FastClick from "fastclick"
//调用attach方法来避免300ms延迟
FastClick.attach(document.body);

Vue.config.productionTip = false;

//注册图片懒加载
Vue.use(VueLazyLoad,{
  preLoad:1.3,
  error:require("assets/img/common/error.webp"),
  loading:require("assets/img/common/load.gif"),
  attempt:1
});

//添加事件总线 用于监听总线事件
Vue.prototype.$bus = new Vue();

new Vue({
  router,
  store,
  render: function (h) {
    return h(App);
  },
}).$mount("#app");
