<template>
  <div id="me">
    <nav-bar class="meNavBar">
      <span slot="center">我的档案</span>
    </nav-bar>
    <profile-user-info/>
    <profile-user-balance/>
    <profile-service/>
    <profile-shop/>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import profileUserInfo from "./childComp/profileUserInfo";
import profileUserBalance from "./childComp/profileUserBalance"
import profileService from "./childComp/profileService"
import profileShop from "./childComp/profileShop"
export default {
  components: {
    NavBar,
    profileUserInfo,
    profileUserBalance,
    profileService,
    profileShop,
},
};
</script>

<style scoped>
.meNavBar {
  background-color: var(--color-tint);
  color: white;
  font-weight: 700;
}
</style>
