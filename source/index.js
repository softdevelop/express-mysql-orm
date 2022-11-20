import express from 'express';
import home from './controllers/Home.js';
import users from './controllers/Users.js';

var app = express();
app.set('view engine', 'pug');
app.set('views','./source/views');
app.use(express.static('./source/public'));

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', home.index);
app.get('/test-connect',home.testConnect);

app.get('/users', users.list);
app.get('/users/view/:id', users.view);
app.get('/users/add', users.add);
app.post('/users/add', users.add);
app.get('/users/update/:id', users.update);
app.get('/users/del/:id', users.del);

app.listen(3000);