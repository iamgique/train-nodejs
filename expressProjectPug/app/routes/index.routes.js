module.exports = function(app) {
  const index = require('../controllers/index.controller');
  app.get('/', index.render);
  app.post('/', index.render);
  app.put('/', index.render);
  app.delete('/', index.render);
  app.all('/', index.render);
}
