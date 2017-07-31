module.exports = app => {
  class BaseController extends app.Controller {
    * login() {
      let ctx = this.ctx
      let { appid, projectid } = ctx.params
      const result = yield app.mysql.insert('apps', {
        appid: appid,
        projectid: projectid
      })
      console.log(result);
      const insertSuccess = result.affectedRows === 1;
      if (insertSuccess) {
        ctx.body = {
          code: 200,
          data: '登录成功'
        }
      } else {
        ctx.body = {
          code: 400,
          data: '登录失败'
        }
      }
    }
  }
  return BaseController
}