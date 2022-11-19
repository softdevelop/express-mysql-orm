import { Sequelize } from 'sequelize';
import sequelize from '../config/connect.js';

const User = sequelize.define('users', {
    email: Sequelize.STRING,
    name: Sequelize.STRING,
    pass: Sequelize.STRING,
    avata: Sequelize.STRING
});

export default User; 