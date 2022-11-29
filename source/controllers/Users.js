import User from '../models/User.js';
import {usersConfig} from '../config/constant.js';

const list = async (req, res) => {
	var records = await User.findAll();
	res.render('./users/index', {'records': records, 'avataUrl': usersConfig.avataUrl});
}

const view = async (req, res) => {
	var record = await User.findByPk(req.params.id);
	res.render('./users/view', {'record': record, 'avataUrl': usersConfig.avataUrl});
}

const add = async (req, res) => {
	console.log(req);
	console.log(req.body);
	res.render('./users/add');
}

const update = async (req, res) => {
	console.log(req.body);
	var record = await User.findByPk(req.params.id);
	res.render('./users/update', {'record': record, 'avataUrl': usersConfig.avataUrl});
}

const del = async (req, res) => {
  await User.destroy({
    where: { id: eq.params.id }
  });
  res.json({message: 'Delete success!'})
  //res.redirect('/users');
}

const users = { 
	list: list,
	view: view,
	add: add,
	update: update,
	del: del
};

export default users;