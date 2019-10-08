import Axios from "axios";
const axios = Axios.create();
let cancelToken = Axios.CancelToken;
const pending = {};

/** 
 * abort=true: 保留第一次的请求（例：按钮快速点击多次）
 * 默认为false: 保留最后一次的请求（例：翻页
 {
   url: '',
   abort: true,
   config: {}
 }
 * @param {Boolean} abort
 * @param {string} url  
 * @param {Object} config
 */

class Methods {
  constructor(api, moduleKey, apiKey) {
    this.api = api;
    this.api.$$modulename = moduleKey;
    this.api.$$apiname = apiKey;
  }
  get(params) {
    return handleRequest("get", this.api, params);
  }
  post(params, data) {
    return handleRequest("post", this.api, params, data);
  }
  put(params, data) {
    return handleRequest("put", this.api, params, data);
  }
  delete(params, data) {
    return handleRequest("delete", this.api, params, data);
  }
}

function handleRequest(type, api, params, data) {
  const abort = api.abort;
  const apiUrl = parseUrl(api, params);
  let config = formatConfig(api);
  let identity = getRequestIdentify({
    url: apiUrl,
    method: type
  });

  if (abort && pending[identity]) {
    // 只发起第一次请求
    return Promise.reject("太忙了, 只允许一个请求");
  }
  if (!api.url.match(/(\{.*?\})/)) data = params;

  if (data && type === "delete") {
    config.data = data;
    data = config;
    config = null;
  }
  let axiosAgr = [apiUrl, data, config];
  axiosAgr.map(item => {
    if (item) return item;
  });
  return new Promise((resolve, reject) => {
    axios[type](...axiosAgr)
      .then(
        response => {
          return resolve(response);
        },
        err => {
          reject(err);
        }
      )
      .catch(error => {
        reject(error);
      });
  });
}

function getRequestIdentify(config) {
  let { method, modulename, apiname } = config;
  return `${method}&${modulename}&${apiname}`;
}
function removePendingIdentify(identity) {
  if (pending[identity]) {
    pending[identity]("取消过期请求！！！");
  }
  delete pending[identity];
}

function formatConfig(api) {
  return {
    apiname: api.$$apiname,
    modulename: api.$$modulename,
    withCredentials: true,
    ...api.config
  };
}
function parseUrl(api, params) {
  let computed = api.url.replace(/(\{.*?\})/g, function(match, key) {
    const k = match.replace(/[\{|\}]/g, "").trim();
    return api.encode ? encodeURIComponent(params[k]) : params[k];
  });
  return computed;
}

function interceptors() {
  axios.interceptors.request.use(
    config => {
      let identity = getRequestIdentify(config);
      removePendingIdentify(identity);
      config.cancelToken = new cancelToken(c => {
        //必须在config中设置cancelToken，才可取消请求
        pending[identity] = c;
      });
      if (axios.setReqConfig) {
        return axios.setReqConfig(config);
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );
  // 异常处理
  axios.interceptors.response.use(
    response => {
      // 把已经完成的请求从 pending 中移除
      let identity = getRequestIdentify(response.config);
      removePendingIdentify(identity);
      let resData = response.data;
      let sourceData = {
        code:
          resData.status || resData.code || resData.errId || resData.error_code,
        message: resData.message || resData.error || resData.error_msg,
        data: resData.data || resData.result
      };
      if (!sourceData.data) sourceData.data = resData || {};

      if (axios.handlerResData) {
        return axios.handlerResData(sourceData);
      }

      return sourceData;
    },
    err => {
      if (err && err.response) {
        let status = err.response.status;
        switch (status) {
          case 400:
            err.message = "错误请求";
            break;
          case 401:
            err.message = "未授权，请重新登录";
            break;
          case 403:
            err.message = "拒绝访问";
            break;
          case 404:
            err.message = "请求错误,未找到该资源";
            break;
          case 405:
            err.message = "请求方法未允许";
            break;
          case 408:
            err.message = "请求超时";
            break;
          case 500:
            err.message = "服务器端出错";
            break;
          case 501:
            err.message = "网络未实现";
            break;
          case 502:
            err.message = "网络错误";
            break;
          case 503:
            err.message = "服务不可用";
            break;
          case 504:
            err.message = "网络超时";
            break;
          case 505:
            err.message = "http版本不支持该请求";
            break;
          default:
            err.message = `连接错误${status}`;
        }
        let errData = {
          code: status,
          message: err.message
        };
        // 统一错误处理可以放这，例如页面提示错误...
        console.log("统一错误处理: ", errData);
        if (axios.handlerResErr) axios.handlerResErr(errData);
      }
      return Promise.reject(err);
    }
  );
}

interceptors();
export default Methods;
export { axios };
