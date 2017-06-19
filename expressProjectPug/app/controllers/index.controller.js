exports.render = function(req, res) {
  res.render('index', {
    'title': 'Hello World',
    'message': 'What do you mean?'
  });
};
