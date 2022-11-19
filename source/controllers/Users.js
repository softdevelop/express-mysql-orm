import User from '../models/User.js';
import {usersConfig} from '../config/constant.js';

const list = async (req, res) => {
	console.log(usersConfig);
	//var records = User.findAll().toArray().then(function(records) { //console.log(records);	});
	var records = await User.findAll();
	res.render('./users/index', {'records': records, 'avataUrl': usersConfig.avataUrl});
}

const view = (req, res) => {
	console.log('User detail page');
	var record = User.findByPk(req.params.id).then(function(record) {
		console.log(record);
	});
	res.send("User detail page");
}

const users = { 
	list: list,
	view: view
};

export default users;