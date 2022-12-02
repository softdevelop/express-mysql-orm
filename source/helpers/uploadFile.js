import multer from 'multer';
import {usersConfig} from "../config/constant.js";

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
  	console.log('destination');
    cb(null, usersConfig.avataUrl)
  },
  filename: function (req, file, cb) {
  	console.log('filename');
    const fileName = file.originalname.toLowerCase().split(' ').join('-') + Date.now() + "." + file.mimetype;
  }
});
/* Test 
let upload = (req, res, next) => {
  console.log('Upload middleware');
  next();
}
/**/
let upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    console.log('fileFilter');
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
  }
});

export default upload;