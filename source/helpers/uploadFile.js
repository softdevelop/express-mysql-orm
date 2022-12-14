import multer from 'multer';
import {usersConfig} from "../config/constant.js";

const rd = (length) => {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, usersConfig.avataUri)
  },
  filename: function (req, file, cb) {
    let fext = file.originalname.split(".").pop(); 
    let fnm  = rd(8) + Date.now() + "." +fext;
  	console.log('filename');
    console.log(fnm);
    cb(null, fnm); 
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