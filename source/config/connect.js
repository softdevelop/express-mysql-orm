//const { Sequelize } = require('sequelize');
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('test2', 'root', '!234rewQ', {
  host: 'localhost',
  dialect: 'mysql'  /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});

export default sequelize;