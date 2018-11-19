// let env = 1;    // 生产
// let env = 2;    // 测试
// let env = 3;    // 开发
let env = 4;    // 本地
// let env = 5;    // 预发布

const ENV_MAP = {
  1: 'prod',
  2: 'test',
  3: 'dev',
  4: 'local',
  5: 'stage'
}


let version = "1.0.0.5";

if (env !== 1) {
  document.title += '(' + (ENV_MAP[env]) + ')' + (' ' + version)
}


// 默认的 本地开发前端代理服务器端口号
const currentIp = '10.43.23.229'
const currentHost = 'https://dev.999haoche.com'
const proxyPort = '7890';


// config start ------------------------------------
/**
 * 各环境的配置只需要修改 HOSTS 和 PORT
 */
const HOSTS = { // 地址
  server: { // 后端
    prod: 'https://www.999haoche.com', // 生产
    stage: 'https://stage.999haoche.com', // 预发布环境
    test: 'https://test.999haoche.com', // 测试
    dev: 'https://dev.999haoche.com',  // 开发
    local: currentHost // 本地
  },
  client: { // 前端
    prod: 'https://www.999haoche.com', // 生产
    stage: 'https://stage.999haoche.com', // 预发布环境
    test: 'https://test.999haoche.com', // 测试
    dev: 'https://dev.999haoche.com',  // 开发
    local: 'http://' + currentIp // 本地
  }
}

const PORT = {  // 端口
  server: {
    prod: '8661',
    stage: '8661',
    test: '8661',
    dev: '8661',
    local: '8661'
  },
  client: {
    prod: '8080',
    stage: '8080',
    test: '8080',
    dev: '8080',
    local: proxyPort
  }
}
// config end ------------------------------------

const Constants = {
  'request-host': `${HOSTS.server[ENV_MAP[env]]}:${PORT.server[ENV_MAP[env]]}/scf/`,
  'common-host': `${HOSTS.server[ENV_MAP[env]]}:${PORT.server[ENV_MAP[env]]}/scf/infc/api/`,
  'login-host': `${HOSTS.server[ENV_MAP[env]]}:${PORT.server[ENV_MAP[env]]}/scf/`,
  'userCenter-host': `${HOSTS.server[ENV_MAP[env]]}:${PORT.server[ENV_MAP[env]]}/scf/dealer/api/`,
  'approCenter-host': `${HOSTS.server[ENV_MAP[env]]}:${PORT.server[ENV_MAP[env]]}/scf/approve/api/`,
  'operaCenter-host': `${HOSTS.server[ENV_MAP[env]]}:${PORT.server[ENV_MAP[env]]}/scf/oper/api/`,
  'servCenter-host': `${HOSTS.server[ENV_MAP[env]]}:${PORT.server[ENV_MAP[env]]}/scf/customer/api/`,
  'dataCenter-host': `${HOSTS.server[ENV_MAP[env]]}:${PORT.server[ENV_MAP[env]]}/scf/data/api/`,

  'pdf-address': `${HOSTS.client[ENV_MAP[env]]}:${PORT.client[ENV_MAP[env]]}/`,
  'login-address': `${HOSTS.client[ENV_MAP[env]]}:${PORT.client[ENV_MAP[env]]}/login/#/`,
  'userCenter-address': `${HOSTS.client[ENV_MAP[env]]}:${PORT.client[ENV_MAP[env]]}/userCenter/#/main/Welcome`,
  'operaCenter-address': `${HOSTS.client[ENV_MAP[env]]}:${PORT.client[ENV_MAP[env]]}/operaCenter/#/main/Welcome`,
  'approCenter-address': `${HOSTS.client[ENV_MAP[env]]}:${PORT.client[ENV_MAP[env]]}/approCenter/#/main/Welcome`,
  'servCenter-address': `${HOSTS.client[ENV_MAP[env]]}:${PORT.client[ENV_MAP[env]]}/servCenter/#/main/Welcome`,
  'dataCenter-address': `${HOSTS.client[ENV_MAP[env]]}:${PORT.client[ENV_MAP[env]]}/dataCenter/#/main/Welcome`,

  env,
  version
}

export default Constants;