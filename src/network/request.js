import axios from "axios";

export function requestInfo(config) {
  return new Promise((resolve, reject) => {
    //1创建实例
    const instance1 = axios.create({
      //路径配置
      baseURL: "http://152.136.185.210:7878/api/hy66",
      //网络请求时间配置
      timeout: 3000,
    });

    //2.1.request拦截请求
    instance1.interceptors.request.use(
      (config) => {
        // console.log(config);
        return config;
      },
      (err) => {
        // console.log(err);
        return err;
      }
    );

    //2.2.response拦截响应
    instance1.interceptors.response.use(
      (config) => {
        // console.log(config);
        return config.data;
      },
      (err) => {
        // console.log(err);
        return err;
      }
    );

    //3.传入对象进行网络请求(发送网络请求)
    instance1(config)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
