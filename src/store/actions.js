import * as types from "./mutations-type"

const actions={
    addToCart(content,product){
        return new Promise((resolve,reject)=>{
            //判断该商品是否存在 por对象是引用类型
            let pro =content.state.cartListArr.find(p=>p.iid==product.iid);
            //console.log(pro)
            //不存在添加该商品数量
            if(pro){
                //获取已存在的商品序号
                let index=content.state.cartListArr.indexOf(pro);
                content.commit(types.IN_CREASE_COUNT,index);

                resolve("添加商品数量成功");
            }
            //存在添加到购物车 并添加初始数量
            else{
                //添加新商品到购物车
                product.count=1;
                product.checked=true;
                content.commit(types.ADD_NEW_PRODUCT,product);

                resolve("添加到购物车成功");
            }
        })

        
    }
}

export default actions;