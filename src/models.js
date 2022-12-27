const Sequelize = require('sequelize');


const DATABASE = 'database'
const USER = 'antonio'
const PASSWORD = 'senha1234'

const database = new Sequelize(DATABASE, USER, PASSWORD, {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
})


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
