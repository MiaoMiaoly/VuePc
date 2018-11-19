import Constants from '@/assets/js/global.js'
/**
 * serviceType 的对应关系
 */
export default {
  1: {
    name: '登录中心',
    url: Constants['login-address'],
    matchPath: '/loginCenter/'
  },
  2: {
    name: '运营中心',
    url: Constants['operaCenter-address'],
    matchPath: '/operaCenter/'
  },
  3: {
    name: '用户中心',
    url:  Constants['userCenter-address'],
    matchPath: '/userCenter/'
  },
  4: {
    name: '审批中心',
    url: Constants['approCenter-address'],
    matchPath: '/approCenter/'
  },
  5: {
    name: '客服中心',
    url: Constants['servCenter-address'],
    matchPath: '/servCenter/'
  },
  6: {
    name: '数据中心',
    url: Constants['dataCenter-address'],
    matchPath: '/dataCenter/'
  }
}