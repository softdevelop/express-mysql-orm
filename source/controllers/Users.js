import User from '../models/User.js';

const list = async (req, res) => {
	//var records = User.findAll().toArray().then(function(records) { //console.log(records);	});
	var records = await User.findAll();
	res.render('./users/index', {'records': records});
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