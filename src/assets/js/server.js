const axios = require('axios')
import { getData, nextStep, Utils } from '@/common/comUtils.js'
import serviceType from '@/assets/js/serviceType.js'
import Constants from '@/assets/js/global.js'
export let base = Constants["request-host"];

// let LoadingT = loadingObj();
const TIME_OUT = 300;
axios.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8';
// 发送请求之前验证token的正确性
axios.interceptors.request.use(function (config) {
  console.log(config);
  let token = window.sessionStorage.getItem('token');
  let userInfo = window.sessionStorage.getItem('userInfo');
  config.withCredentials = config.url.includes('/main/api/login');
  /**
   * 此处增加了全部请求默认添加loading功能，如果指定的请求不需要loading应该在请求中显示声明 needLoading 值为false，并且不能声明 loadingParams 参数
   */
  if (!config.data) {
    config.data = {}
  }
  // if (Utils.isBoolean(config.data.needLoading) && !config.data.needLoading) {
  //   config.data.needLoading = false
  // } else {
  //   config.data.needLoading = true
  // }
  // if (config && config.data && (config.data.needLoading || config.data.loadingParams)) {
    // let loadingParams = config.data.loadingParams || {};
    // let { timeout, callback } = loadingParams;
    // LoadingT.show(timeout, callback,config.url);
    // delete config.data.needLoading;
    // delete config.data.loadingParams;
  // }
  if (!userInfo && token) {
    gotoLogin();
    return;
  }
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
}, function (error) {
  console.log(error,'11111111');
  // LoadingT.hide();
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 拦截响应
axios.interceptors.response.use(function (response) {
  // console.log(response)
  // LoadingT.hide(response.config.url);
  if (response.status === 200) {
    let { resultCode, resultMessage } = response.data;
    if (resultCode === '200') {
      return response.data;
    } else if (resultCode === '203') {
      // token 过期
      gotoLogin(true);
      return;
    } else {
      let error = {
        resultCode,
        resultMessage
      }
      return Promise.reject(error);
    }
  } else {
    // this.$message({
    //   message: "网络异常" + response.statusText,
    //   type: "error"
    // });
    return Promise.reject({
      statusText: response.statusText,
      status: response.status
    });
  }
}, function (error) {
  console.log(error,'22222');
  // LoadingT.hide(true);
  let err = error.response;
  if (err && err.data && err.data.resultCode && (err.data.resultCode==='203')) {
    // token 验证失败，重新登录
    gotoLogin(true)
    return;
  } else if (err && Number(err.status) === 429) {
    // Vue.prototype.$message.error('服务器繁忙，请稍后再试')
    return
  } else if (error.message === 'Network Error') {
    // 服务器直接报错
    // Vue.prototype.$message.error('网络错误')
    return
  }
  return Promise.reject(error.response);
})

function gotoLogin(saveCurrentPage) {
  let type = getData({
    key: 'serviceType'
  })
  // saveCurrentPage ? nextStep({url: serviceType[1].url+'?reLogin=true&lastSerT='+type}) : nextStep({url: serviceType[1].url});
}

/**
 * loading 动画
 * 使用说明：可以通过 needLoading 和 loadingParams 进行配置
 * needLoading 是 boolean 值，true 表示请求时有 loading 动画， false 为 不展示 loading 动画。默认为展示
 * loadingParams 是 object， 用于 loading 动画的相关配置，包含两个参数：timeout（String 类型，表示动画的最少展示时长，默认值为300ms）、callback（Function 类型，表示动画消失之后的 回调函数）
 */
// function loadingObj () {
//   return {
//     self: {},
//     show (timeout, callback ,id) {
//       this.self = Vue.prototype.$loading({
//         lock: true,
//         text: 'Loading',
//         background: "rgba(255, 255, 255, 0.7)"
//       });
//       this.self.timeout = timeout;
//       this.self.callback = callback;
//       this.self.id = id;
//       return this.self;
//     },
//     hide (id) {
//       if(id === true || this.self.id === id){
//         setTimeout(() => {
//           this.self && (typeof this.self.close === 'function') && this.self.close();
//           let cb = this.self.callback || function(){};
//           cb && cb();
//         }, this.self.timeout || TIME_OUT);
//       }
//     }
//   }
// }

export const server = axios;