import fs from 'fs';
import busboy from 'busboy';

import User from '../models/User.js';
import {usersConfig} from '../config/constant.js';


//import multer from 'multer';
//import upload from '../helpers/uploadFile.js';

const list = async (req, res) => {
	var records = await User.findAll({order: [['id', 'DESC']]});
	res.render('./users/index', {'records': records, 'avataUrl': usersConfig.avataUrl});
}

const view = async (req, res) => {
	var record = await User.findByPk(req.params.id);
	res.render('./users/view', {'record': record, 'avataUrl': usersConfig.avataUrl});
}

const random = (() => {
  const buf = Buffer.alloc(16);
  return () => randomFillSync(buf).toString('hex');
})();

const add = async (req, res) => {
	let inform;
	if(req.method == 'POST') {
		let rs = await User.create({
			email: req.body.email,
			name: req.body.name,
			pass: req.body.pass,
			avata: req.file.filename
		});
		
		if(rs) {
			inform = 1;
			res.render('./users/add', {'inform': inform});
		} else	inform = "Error when create new record!";
	}
	if (inform !== 1)
		res.render('./users/add', {'inform': inform});
}

const update = async (req, res) => {
	let inform ;
	var record = await User.findByPk(req.params.id);

	if(req.method == 'POST') {
		let rs = await record.update({
			email: req.body.email,
			name: req.body.name,
			pass: req.body.pass,
			avata: req.file.filename
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