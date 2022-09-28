import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);


import state from "./state"
import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"
//创建vueX对象
const store =new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})

export default store;