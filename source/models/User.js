import { Sequelize } from 'sequelize';
import sequelize from '../config/connect.js';

const User = sequelize.define('users', {
    //id: Sequelize.INTEGER,
    email: Sequelize.STRING,
    name: Sequelize.STRING,
    pass: Sequelize.STRING
});

export default User; 