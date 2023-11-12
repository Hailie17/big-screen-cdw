import axios from "axios"; // 导入axios
import { BASE_URL, TIMEOUT } from "./config";
// 创建类
class HYRequest {
  constructor(baseURL = BASE_URL, timeout = TIMEOUT) {
    // 创建axios实例
    this.instance = axios.create({
      baseURL,
      timeout,
    });
  }
  // 定义了通用request请求。将返回结果改成promise
  request(config) {
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
  get(config) {
    return this.request({ ...config, method: "get" });
  }
  post(config) {
    return this.request({ ...config, method: "post" });
  }
}
export default new HYRequest(); // 导出构造器方法
