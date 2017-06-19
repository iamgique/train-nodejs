const express = require('express');
module.exports = function() {
  const app = express();
  require('../app/routes/index.routes')(app);
  require('../app/routes/user.routes')(app);
  return app;
};
