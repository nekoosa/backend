'use strict';

module.exports = {
  keys: 'my secret keys',
  security: {
    csrf: {
      enable: false
    },
    domainWhiteList: [ 'http://localhost:3002', 'http://localhost:8080', 'http://localhost:8000', 'http://localhost:3000' ]
  }
}