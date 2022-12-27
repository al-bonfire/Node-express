const Sequelize = require('sequelize');
require('dotenv').config();


if (process.env.NODE_ENV == 'PROD') {
    process.env.MYSQL_HOST = 'mysql'
} else {
    process.env.MYSQL_HOST = 'localhost'
}


const database = new Sequelize(
    process.env.MYSQL_DATABASE,
    process.env.MYSQL_USER,
    process.env.MYSQL_PASSWORD, {
        dialect: process.env.MODEL_DIALECT,
        host: process.env.MYSQL_HOST,
        port: Number(process.env.MYSQL_PASSWORD)
    }
)


const User = database.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoincrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNulL: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNulL: false,
    },
    senha: {
        type: Sequelize.STRING,
        allowNulL: false,
    },
})

async function init_database() {
    await database.sync();
}

module.exports = {
    User: User,
    init_database: init_database
}
