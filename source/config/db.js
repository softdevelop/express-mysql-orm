const { Sequelize } = require('sequelize');

var sequelize = new Sequelize('test2', 'root', '!234rewQ', {
    host: 'localhost',
    dialect: 'mysql',    //'mysql'|'mariadb'|'sqlite'|'postgres'|'mssql',

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
});

//     var sequelize = new Sequelize('mysql://root:!234rewQ@localhost.com:3600/test2');