const getters={
    cartLength(state){
        return state.cartListArr.length;
    },
    cartList(state){
        return state.cartListArr;
    }
};

export default getters;