import express from 'express';

//var methodOverride = require('method-override')
import methodOverride from 'method-override';

//import bodyParser from 'body-parser';

import userRouers from "./routes/userRouters.js";
import { createRequire } from "module";
const require = createRequire(import.meta.url);

import home from './controllers/Home.js';
//import users from './controllers/Users.js';

//const checkFileExisting = require("/helpers/uiHelper");
import { checkFileExisting } from "./helpers/uiHelper.js";

var app = express();
app.set('view engine', 'pug');
app.set('views','./source/views');
app.use(express.static('./source/public'));
//app.use(express.json()) // for parsing application/json

//app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//app.use(methodOverride('_method'));

// assuming the express app is initialized
app.locals.checkFileExisting = checkFileExisting

//app.use(bodyParser());
//app.use(bodyParser. text({type: '/'}));
/*
app.use(bodyParser.urlencoded())
app.use(methodOverride(function (req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method
    delete req.body._method
    return method
  }
}))
*/
app.get('/', home.index);
app.get('/test-connect',home.testConnect);

//const userRouers = require("./routes/userRouters.js");
userRouers(app);

app.listen(3000);