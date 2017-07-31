'use strict';

module.exports = function*(ctx) {
  let params = ctx.params
  ctx.body = {
    code: 200,
    data: {
      appid: params.appid,
      projectid: params.projectid
    }
  }
};
