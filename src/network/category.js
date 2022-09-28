import { requestInfo } from "network/request";

//获取头部数据(轮播图、推荐)
export function getCategoryMultiData() {
  return requestInfo({
    url: "/category",
    method: "get",
  });
}

//根据父类别key 获取子类别
export function getSubCategory(maitKey) {
  return requestInfo({
    url: "/subcategory",
    params:{
      maitKey
    }
  });
}

//根据父类别key 获取子类别
export function getGoodsByCategory(miniWallkey,type) {
  return requestInfo({
    url: "/subcategory/detail",
    params:{
      miniWallkey,
      type
    }
  });
}