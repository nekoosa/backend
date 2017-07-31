'use strict';

module.exports = {
  keys: 'my secret keys',
  security: {
    csrf: {
      enable: false
    },
    domainWhiteList: [ 'http://localhost:3002', 'http://localhost:8080', 'http://localhost:8000', 'http://localhost:3000' ]
  },
  mysql: {
    // 单数据库信息配置
    client: {
      // host
      host: 'localhost',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: '123456',
      // 数据库名
      database: 'egg_project'
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  }
}