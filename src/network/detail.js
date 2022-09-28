import { requestInfo } from "network/request";

//获取头部数据(轮播图)
export function getDetailMultiData(iid) {
  return requestInfo({
    url: "/detail",
    method: "get",
    params: {
      iid,
    },
  });
}

export function getDetailType() {
  return requestInfo({
    url: "/recommend",
    method: "get",
  });
}
