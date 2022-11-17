import sequelize from '../config/connect.js';

const index = (req, res) => {
	console.log('Home page');
	//res.send("Home page");
	res.render('./home/index');
	//res.render('main');
}

const testConnect = async (req, res) => {
	console.log('Test connect');
	try {
		await sequelize.authenticate();
		console.log('Connection has been established successfully.');
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}
	res.send("Test connect");
}

const home = {
	index: index,
	testConnect: testConnect
};

export default home;