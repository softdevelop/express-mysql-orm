import users from '../controllers/Users.js';
//const multer  = require('multer')
//import multer from 'multer';

//import upload from '../helpers/uploadFile.js'

//module.exports = function(app) {
//exports.routes = function(app) {
export default function(app) {
  // todoList Routes
  app.route('/users')
    .get(users.list)
    //.post(upload.single('avata'), users.add);
    .post(users.add);
    //.post(upload, users.add);

  app.route('/users/add')
    .get(users.add);

  app.route('/users/update/:id')
    .get(users.update);
    
  app.route('/users/:id')
    .get(users.view)
    .post(users.update)
    .delete(users.del);
};

/*
app.post('/add', upload.single('image'), (req, res, next) => {
  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    imageURL: req.file.path
  });
  user.save().then(result => {
    res.status(201).json({
      message: "User registered successfully!",
    })
  })
})
*/