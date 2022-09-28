import { requestInfo } from "network/request";

//获取头部数据(轮播图、推荐)
export function getHomeMultiData() {
  return requestInfo({
    url: "/home/multidata",
    method: "get",
  });
}

//根据类别和页码获取数据
export function getHomeTypePage(type,page) {
  return requestInfo({
    url: "/home/data",
    method: "get",
    params:{
      type,
      page
    }
  });
}