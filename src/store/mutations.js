import * as types from "./mutations-type"

const mutations={
    [types.ADD_NEW_PRODUCT](state,product){
        //将新商品添加到购物车
        state.cartListArr.push(product);   
    },
    
    [types.IN_CREASE_COUNT](state,index){
        //根据序号找到对应商品 修改单个商品数量
        state.cartListArr[index].count++;
    }
}

export default mutations;