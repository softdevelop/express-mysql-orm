const multer  = require('multer')
const uploadAvata = multer({ dest: 'upload/users' })

import users from './controllers/Users.js';

module.exports = function(app) {
  // todoList Routes
  app.route('/users')
    .get(users.list)
    .post(users.add);

  app.route('/users/add')
    .get(users.add);

  app.route('/users/update')
    .get(users.update);
    
  app.route('/users/:id')
    .get(users.view)
    .put(users.update)
    .delete(users.delete);
};
