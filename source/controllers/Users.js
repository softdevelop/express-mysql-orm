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
			console.log(rs);
			res.status(201).json({
	      message: "User registered successfully!",
	    })
	    res.redirect('/users');
		}
		/*
		const user = User.build({ 
			email: req.body.email,
			name: req.body.name,
			pass: req.body.pass,
			//avata: req.file.avata
			avata: 'no_picture.png'
		});
		let rs = await  user.save();
		if(rs) {
			res.status(201).json({
	      message: "User registered successfully!",
	    })
	    res.redirect('/users');
		}
		/*
	  user.save().then(result => {
	    res.status(201).json({
	      message: "User registered successfully!",
	    })
	    res.redirect('/users');
	  })
	  */
	}
	res.render('./users/add');
}


const update = async (req, res) => {
	let inform = {};
	var record = await User.findByPk(req.params.id);

	if(typeof req.body.email !== 'undefined') {
		/*
		await record.set( {
			email: req.body.email,
			name: req.body.name,
			pass: req.body.pass,
			//avata: req.file.avata
			avata: 'no_picture.png'
		});
		let rs = await record.save();
		*/
		let rs = await record.update({
			email: req.body.email,
			name: req.body.name,
			pass: req.body.pass,
			//avata: req.file.avata
			avata: 'no_picture.png'
		});
		if(rs) {
			res.redirect('/users');
		} else	inform = "Error when update record!"; 
	}
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

/*
app.post('/add', upload.single('image'), (req, res, next) => {
  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    imageURL: req.file.path
  });
  user.save().then(result => {
    res.status(201).json({
      message: "User registered successfully!",
    })
  })
})
*/