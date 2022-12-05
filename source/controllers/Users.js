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

const add = async (req, res, next) => {
	let inform;
	if(typeof req.body.email !== 'undefined') {
		
		console.log(req.file);

		let rs = await User.create( {
			email: req.body.email,
			name: req.body.name,
			pass: req.body.pass,
			//avata: req.file.avata
			avata: 'no_picture.png'
		});

		if(rs) {
			inform = 1;
			res.redirect('/users');
		} else	inform = "Error when create new record!";
	}
	if (inform !== 1)
		res.render('./users/add', {'inform': inform});
}

const update = async (req, res, next) => {
	let inform ;
	var record = await User.findByPk(req.params.id);

	if(typeof req.body.email !== 'undefined') {
		let rs = await record.update({
			email: req.body.email,
			name: req.body.name,
			pass: req.body.pass,
			//avata: req.file.avata
			avata: 'no_picture.png'
		});
		if(rs) {
			inform = 1;
			res.redirect('/users');
		} else	inform = "Error when update record!"; 
	}
	if (inform !== 1)
		res.render('./users/update', {'record': record, 'inform': inform, 'avataUrl': usersConfig.avataUrl});
}

const del = async (req, res) => {
  await User.destroy({
    where: { id: req.params.id }
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