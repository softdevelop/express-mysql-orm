import users from '../controllers/Users.js';
//const multer  = require('multer')
import multer from 'multer';
const uploadAvata = multer({ dest: 'upload/users' })

//module.exports = function(app) {
//exports.routes = function(app) {
export default function(app) {
  // todoList Routes
  app.route('/users')
    .get(users.list)
    .post(users.add);

  app.route('/users/add')
    .get(users.add);

  app.route('/users/update/:id')
    .get(users.update);
    
  app.route('/users/:id')
    .get(users.view)
    .post(users.update);
    .delete(users.del);
};