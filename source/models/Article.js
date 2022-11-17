var Article = sequelize.define('articles', {
    id: Sequelize.INTEGER
    ttile: Sequelize.STRING,
    content: Sequelize.TEXT,
    user_id: Sequelize.INTEGER,
    status: Sequelize.INTEGER,
    created: Sequelize.DATE,
    //description: Sequelize.TEXT
})