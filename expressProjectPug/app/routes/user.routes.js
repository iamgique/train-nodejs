module.exports = function(app) {
  const user = require('../controllers/user.controller');
  app.get('/user', user.list);
  app.post('/user/create', user.create);
};
