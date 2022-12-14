import users from '../controllers/Users.js';
//const multer  = require('multer')
import multer from 'multer';

import upload from '../helpers/uploadFile.js'

//module.exports = function(app) {
//exports.routes = function(app) {
export default function(app) {
  // todoList Routes
  app.route('/users')
    .get(users.list)
    .post(upload.single('avata'), users.add);
    //.post(users.add);

  app.route('/users/add')
    .get(users.add);

  app.route('/users/update/:id')
    .get(users.update);
    
  app.route('/users/:id')
    .get(users.view)
    .post(upload.single('avata'),users.update)
    .delete(users.del);
};