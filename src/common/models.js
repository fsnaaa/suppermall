//商品信息
export class Goods {
  constructor(itemInfo, columns, shopInfo) {
    this.iid=itemInfo.iid;
    this.desc=itemInfo.desc;
    this.lowNowPrice=itemInfo.lowNowPrice;
    this.title = itemInfo.title;
    this.price = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discountDesc = itemInfo.discountDesc;

    this.columns = columns;
    this.services = shopInfo.services;
  }
}
//店铺信息
export class Shop {
  constructor(shopInfo) {
    this.title = shopInfo.name;
    this.logo = shopInfo.shopLogo;
    this.cSells = shopInfo.cSells;
    this.cGoods = shopInfo.cGoods;
    this.score = shopInfo.score;
  }
}

export class GoodsParams {
  constructor(info,rule) {
    this.sets=info.set;
    this.sizes=rule.tables[0];
  }
}