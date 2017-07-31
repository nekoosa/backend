'use strict';

module.exports = app => {
  app.get('/', 'home')
  app.get('/foo/:appid/app/:projectid', 'foo')
  app.get('/login', app.controller.base.login)
};
