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
	console.log(req.body);
	console.log(req.file);

	if(typeof req.body.email !== 'undefined') {
		const user = User.build({ 
			email: req.body.email,
			name: req.body.name,
			pass: req.body.pass,
			avate: req.file.avata
		});

	  user.save().then(result => {
	    res.status(201).json({
	      message: "User registered successfully!",
	    })
	    res.redirect('/users');
	  })
	}
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