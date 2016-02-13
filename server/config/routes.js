var linkController = require('../links/linkController.js');
var userController = require('../users/userController.js');
var helpers = require('./helpers.js'); // our custom middleware

module.exports = function (app, express) {
  app.get('/:code', linkController.navToLink);

  app.post('/api/users/signin', userController.signin);
  app.post('/api/users/signup', userController.signup);
  app.get('/api/users/signedin', userController.checkAuth);

  // authentication middleware used to decode token and made available on the request
  // app.use('/api/links', helpers.decode);
  app.get('/api/links/', linkController.allLinks);
  app.post('/api/links/', linkController.newLink);

  // If a request is sent somewhere other than the routes above,
  // send it through our custom error handler
  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);
};

