<template>
  <nav-bar>
    <img src="~assets/img/common/back.svg" slot="left" @click="backClick" />
    <div class="titles" slot="center">
      <div
        class="title-item"
        @click="navClick(index)"
        :class="{ activeStyle: currentIndex == index }"
        v-for="(item, index) in titles"
        :key="index"
      >
        {{ item }}
      </div>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  props:{
    currentIndex:{
      type:Number,
      default:0
    }
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      
    };
  },
  components: {
    NavBar,
  },
  methods: {
    navClick(i) {
      this.currentIndex = i;
      this.$emit("navClick",i)
    },
    backClick() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.titles {
  display: flex;
  font-size: 13px;
}
img {
  margin-top: 10px;
}
.activeStyle {
  color: var(--color-tint);
}
.title-item {
  flex: 1;
}
</style>
