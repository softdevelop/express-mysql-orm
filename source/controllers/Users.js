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
	//console.log("req.method: ");
	//console.log(req.method);

	let inform;
	//if(typeof req.body.email !== 'undefined') {
	if(req.method == 'POST') {
		console.log("req.method: ");
		console.log(req.method);
		console.log(req);
    const bb = busboy({ headers: req.headers });
    bb.on('avata', (name, file, info) => {
      //const saveTo = path.join(os.tmpdir(), `busboy-upload-${random()}`);
      const saveTo = usersConfig.avataUrl.file.originalname.toLowerCase().split(' ').join('-') + Date.now() + "." + file.mimetype;
      file.pipe(fs.createWriteStream(saveTo));

			console.log("saveTo ");
			console.log(saveTo);
    });

		let rs = 1;
    /*
		let rs = await User.create({
			email: req.body.email,
			name: req.body.name,
			pass: req.body.pass,
			//avata: req.file.avata
			avata: 'no_picture.png'
		});
		*/
		console.log("Req.file: ");
		console.log(rs);
		
		if(rs) {
			inform = 1;
			res.redirect('/users');
			//res.render('./users/add', {'inform': inform});
		} else	inform = "Error when create new record!";
	}
	if (inform !== 1)
		res.render('./users/add', {'inform': inform});
}

const update = async (req, res) => {
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